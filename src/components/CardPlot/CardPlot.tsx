import { FC } from 'react';
import { ILandPlot } from '../../data/landplots'
import styles from './CardPlot.module.css'
import imgBlank from '../../images/blank-photo.png'
import { useDispatch } from 'react-redux';

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

interface ICardPlotProps {
	landPlot: ILandPlot
}

const CardPlot: FC<ICardPlotProps> = ({ landPlot }) => {
	// const { id, image, price, square, description } = landplotsData[0]
	// const { id, image, price, square, description } = landPlot



	return (
		<div className={styles['card-container']}>
			<img
				src={landPlot.image.length ?
					require(`../../images/plot-photos/${landPlot.image}`) :
					imgBlank
				}
				className={styles['plot__image']}
				alt=""
			/>

			<div className={styles['plot__price']}>{getRandomPrice(30, 500)}$ / 000000 RUB</div>
			<div className={styles['plot__square']}>{getRandomSquare(10, 100)} соток</div>
			<p className={styles['plot__description']}>
				{landPlot.description.length ? landPlot.description : "Описания не предоставлено."}
			</p>
		</div>
	)
}

export default CardPlot