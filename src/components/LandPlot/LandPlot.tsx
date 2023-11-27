import imgLand from '../../images/land-plot-image.jpg'
import LandPlotSvg from './LandPlotSvg'
import styles from './LandPlot.module.css'
import './svg-styles.css'

const LandPlot = () => {
	return (
		<div className='container'>
			<div
				style={{ backgroundImage: `url(${imgLand})` }}
				className={styles['land-plot__image-wrapper']}
			>
				{/* <img
					src={imgLand}
					alt=""
					className={styles['land-plot__image']}
				/> */}
				<LandPlotSvg />
			</div>
		</div>
	)
}

export default LandPlot