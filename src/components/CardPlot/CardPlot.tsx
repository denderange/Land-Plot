import { landplotsData } from '../../data/landplots'
import styles from './CardPlot.module.css'
import imgBlank from '../../images/blank-photo.png'

const CardPlot = () => {
	const { id, image, price, square, description } = landplotsData[0]

	return (
		<div className={styles['card-container']}>
			<img
				src={image.length ?
					require(`../../images/plot-photos/${image}`) :
					imgBlank
				}
				className={styles['plot__image']}
				alt=""
			/>

			<div className={styles['plot__price']}>{price}$ / 000000 RUB</div>
			<div className={styles['plot__square']}>{square} соток</div>
			<p className={styles['plot__description']}>{description}</p>
		</div>
	)
}

export default CardPlot