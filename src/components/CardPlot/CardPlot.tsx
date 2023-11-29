import { landplotsData } from '../../data/landplots'
import styles from './CardPlot.module.css'
import imgBlank from '../../images/blank-photo.png'

const getRandomSquare = (minSize: number, maxSize: number) => {
	const randomDecimals = Math.floor(Math.random() * 10) / 10;
	const randomSquare = Math.floor(
		minSize + Math.random() * (maxSize + 1 - minSize)
	);
	return randomSquare + randomDecimals;
};

const getRandomPrice = (min: number, max: number) => {
	return (Math.floor(min + Math.random() * (max + 1 - min)) * 100
	)
}

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

			<div className={styles['plot__price']}>{getRandomPrice(30, 500)}$ / 000000 RUB</div>
			<div className={styles['plot__square']}>{getRandomSquare(10, 100)} соток</div>
			<p className={styles['plot__description']}>
				{description.length ? description : "Описания не предоставлено."}
			</p>
		</div>
	)
}

export default CardPlot