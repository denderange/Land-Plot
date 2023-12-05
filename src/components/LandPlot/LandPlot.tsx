import { useEffect, useState, useRef } from 'react'
import imgLand from '../../images/land-plot-image.jpg'
import LandPlotSvg from './LandPlotSvg'
import styles from './LandPlot.module.css'
import './svg-styles.css'
import CardPlot from '../CardPlot/CardPlot'
import { useSelector } from 'react-redux'
import { RootState, useStoreDispatch } from '../../redux/store'
import { getPlots } from '../../redux/slice/landplotSlice'
import { addChosenPlot, clearChosenPlot, addFilteredPricePlots } from '../../redux/slice/landplotSlice'

const errorMessage = 'В данный момент сервер недоступен. Попробуйте позже.'

const LandPlot = () => {
	const ref = useRef<HTMLDivElement>(null)
	const [allPlots, setAllPlots] = useState<SVGPathElement[]>()
	const [plotsList, setPlotsList] = useState<string[]>([])

	const dispatch = useStoreDispatch()
	const plotsChosen = useSelector((state: RootState) => state.landplot.plotsChosen)
	const plotsTotalList = useSelector((state: RootState) =>
		state.landplot.plotsTotalList
	)
	const plotsPriceFiltered = useSelector((state: RootState) =>
		state.landplot.plotsPriceFiltered
	)

	const handleClear = () => {
		// console.log(plotsList)
		setPlotsList([])
		allPlots?.forEach(item => {
			item.classList.remove('path-clicked')
			item.classList.remove('path-price-chosen')
		})

		dispatch(clearChosenPlot())
		dispatch(addFilteredPricePlots([]))
	}

	const fillFiltered = () => {
		allPlots?.forEach(item => {
			item.classList.remove('path-price-chosen')

			if (plotsPriceFiltered.includes(Number(item.id.slice(4)))) {
				item.classList.add('path-price-chosen')
			}
		})
	}

	const handlePathClick = (event: Event) => {
		const target = event.target as HTMLElement

		if (target.tagName === 'path') {
			target.classList.add('path-clicked')
			const chosenPlot = target.id.slice(4)

			if (!plotsList.includes(chosenPlot)) {
				setPlotsList([...plotsList, chosenPlot])

				if (plotsTotalList.length) {
					dispatch(addChosenPlot(chosenPlot))
				}
			}
		}
	}

	useEffect(() => {

		dispatch(getPlots())
		fillFiltered()

		if (ref.current) {
			const allPaths = Array.from(ref.current.querySelectorAll('path'))
			allPaths.forEach(item => item.addEventListener('click', handlePathClick))

			setAllPlots([...allPaths])

			return () => allPaths.forEach(item => {
				item.removeEventListener("click", handlePathClick);
			});
		}

	}, [dispatch, plotsList, plotsPriceFiltered])

	return (
		<div className='container'>
			<section className={styles['map-wrapper']}>
				<div ref={ref} className={styles['land-plot__image-wrapper']}>
					<img src={imgLand} alt="" className={styles['land-plot__image']} />

					<LandPlotSvg />
				</div>

				<aside className={styles['map-info']}>
					{plotsTotalList.length ? (
						<>
							<div>
								<button
									className={styles['btn-clear']}
									onClick={handleClear}
								>
									Очистить выбранные
								</button>

								{plotsList.length ? (
									<h6>Участков выбрано: {plotsList.length}</h6>
								) : (<h5>Выберите участок</h5>)
								}
							</div>

							<div className={styles['cards-wrapper']}>
								{plotsChosen.map(item => (
									<div key={item}>
										<CardPlot landPlot={plotsTotalList[Number(item)]} />
									</div>
								))}
							</div>
						</>
					) : (
						<div className={styles['error-container']}>
							{errorMessage}
						</div>)
					}
				</aside>
			</section>
		</div>
	)
}

export default LandPlot