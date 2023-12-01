import { useEffect, useState } from 'react'
import imgLand from '../../images/land-plot-image.jpg'
import LandPlotSvg from './LandPlotSvg'
import styles from './LandPlot.module.css'
import './svg-styles.css'
import CardPlot from '../CardPlot/CardPlot'
import { useSelector } from 'react-redux'
import { RootState, useStoreDispatch } from '../../redux/store'
import { getPlots } from '../../redux/slice/landplotSlice'
import { addChosenPlot, clearChosenPlot } from '../../redux/slice/landplotSlice'

const LandPlot = () => {
	const [allPlots, setAllPlots] = useState<SVGPathElement[]>()
	const [plotsList, setPlotsList] = useState<string[]>([])

	const dispatch = useStoreDispatch()
	const landPlotsChosen = useSelector((state: RootState) => state.landplot.plotsChosen)
	const landPlotsList = useSelector((state: RootState) =>
		state.landplot.plotsTotalList
	)

	const handleClear = () => {
		console.log(plotsList)
		setPlotsList([])
		allPlots?.forEach(item => item.classList.remove('path-clicked'))

		dispatch(clearChosenPlot())
	}

	const handlePathClick = (event: Event) => {
		const target = event.target as HTMLElement

		if (target.tagName === 'path') {
			target.classList.add('path-clicked')
			const chosenPlot = target.id.slice(4)

			if (!plotsList.includes(chosenPlot)) {
				setPlotsList([...plotsList, chosenPlot])

				dispatch(addChosenPlot(chosenPlot))
				// console.log(landPlotsList[Number(chosenPlot) - 1])
				console.log(landPlotsChosen)
			}
		}
	}

	useEffect(() => {
		const allPaths = Array.from(document.querySelectorAll('path'))
		allPaths.forEach(item => item.addEventListener('click', handlePathClick))
		setAllPlots([...allPaths])

		dispatch(getPlots())

		return () => allPaths.forEach(item => {
			item.removeEventListener("click", handlePathClick);
		});
	}, [dispatch, plotsList])

	return (
		<div className='container'>
			<section className={styles['map-wrapper']}>
				<div className={styles['land-plot__image-wrapper']}>
					<img src={imgLand} alt="" className={styles['land-plot__image']} />

					<LandPlotSvg />
				</div>

				<aside className={styles['map-info']}>
					<div>
						<button
							className={styles['btn-clear']}
							onClick={handleClear}
						>
							Очистить выбранные
						</button>
						<h5>items selected:</h5>
						<p>
							selected: {plotsList.length}
						</p>
						{plotsList.length ? (
							<>
								{plotsList.map((item, index) => (
									<span key={index}>{item}</span>
								))}
							</>
						) : (<h5>Выберите участок</h5>)
						}
					</div>

					{/* <CardPlot landPlot={testLandPlot} /> */}

					{landPlotsChosen.map(item => (
						<div key={item}>
							<CardPlot landPlot={landPlotsList[Number(item)]} />
						</div>
					))}

					<div>
						<h6>from redux</h6>
						<div>
							{landPlotsChosen.length}
						</div>
						<div>
							{/* {landPlotsChosen.id} */}
						</div>
					</div>
				</aside>
			</section>
		</div>
	)
}

export default LandPlot