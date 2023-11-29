import imgLand from '../../images/land-plot-image.jpg'
import LandPlotSvg from './LandPlotSvg'
import styles from './LandPlot.module.css'
import './svg-styles.css'
import CardPlot from '../CardPlot/CardPlot'

const LandPlot = () => {
	const getPlotsApi = async () => {
		const response = await fetch('http://localhost:8001/landplots')
		const landplot = await response.json()

		return landplot.length
	}
	console.log(getPlotsApi())

	const allPaths = Array.from(document.querySelectorAll('path'))
	console.log(allPaths.length)

	return (
		<div className='container'>
			<section className={styles['map-wrapper']}>
				<div className={styles['land-plot__image-wrapper']}>
					<img src={imgLand} alt="" className={styles['land-plot__image']} />

					<LandPlotSvg />
				</div>

				<aside className={styles['map-info']}>
					<CardPlot />

				</aside>
			</section>
		</div>
	)
}

export default LandPlot