import { useEffect, useState, useRef, lazy, Suspense } from 'react'
import imgLand from '../../images/land-plot-image.jpg'
import LandPlotSvg from './LandPlotSvg'
// import CardPlot from '../CardPlot/CardPlot'
import { useSelector } from 'react-redux'
import { RootState, useStoreDispatch } from '../../redux/store'
import { addChosenPlot, clearChosenPlot, addFilteredPricePlots } from '../../redux/slice/landplotSlice'
import PriceTooltip from '../PriceTooltip/PriceTooltip'
import styles from './LandPlot.module.css'
import './svg-styles.css'

const CardPlot = lazy(() => import('../CardPlot/CardPlot'))
const errorMessage = 'В данный момент сервер недоступен. Попробуйте позже.'

const LandPlot = () => {
	const ref = useRef<HTMLDivElement>(null)
	const [allPlots, setAllPlots] = useState<SVGPathElement[]>()
	const [plotPrice, setPlotPrice] = useState(0)
	const [plotSquare, setPlotSquare] = useState(0)

	const dispatch = useStoreDispatch()
	const plotsChosen = useSelector((state: RootState) => state.landplot.plotsChosen)
	const plotsTotalList = useSelector((state: RootState) =>
		state.landplot.plotsTotalList
	)
	const plotsPriceFiltered = useSelector((state: RootState) =>
		state.landplot.plotsPriceFiltered
	)

	const handleClear = () => {
		allPlots?.forEach(item => {
			item.classList.remove('path-clicked')
			item.classList.remove('path-price-chosen')
		})

		dispatch(clearChosenPlot())
		dispatch(addFilteredPricePlots([]))
	}

	const clearRemovedPlot = () => {
		console.log('btn CLEAR handle')
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
			console.log(target.id.slice(4))

			if (!plotsChosen.includes(chosenPlot.toString())) {
				dispatch(addChosenPlot(chosenPlot))
			}
		}
	}

	useEffect(() => {
		fillFiltered()

		if (ref.current) {
			const allPaths = Array.from(ref.current.querySelectorAll('path'))
			allPaths.forEach(item => item.addEventListener('click', handlePathClick))

			setAllPlots([...allPaths])

			return () => allPaths.forEach(item => {
				item.removeEventListener("click", handlePathClick);
			});
		}

	}, [dispatch, plotsPriceFiltered, plotsChosen])

	return (
		<div className='container'>
			<section className={styles['map-wrapper']}>
				<div ref={ref} className={styles['land-plot__image-wrapper']}>
					<img src={imgLand} alt="" className={styles['land-plot__image']} />

					<LandPlotSvg />
					<PriceTooltip price={plotPrice} square={plotSquare} />
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

								<button
									onClick={clearRemovedPlot}
								>
									очистить участок
								</button>

								{plotsChosen.length ? (
									<h6>Участков выбрано: {plotsChosen.length}</h6>
								) : (<h5>Выберите участок</h5>)
								}
							</div>

							<div className={styles['cards-wrapper']}>
								{plotsChosen.map(item => (
									<div key={item}>
										<Suspense fallback={<div>LOADING ...</div>}>
											<CardPlot landPlot={plotsTotalList[Number(item) - 1]} />
										</Suspense>
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