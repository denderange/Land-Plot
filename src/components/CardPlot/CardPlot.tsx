import { FC } from 'react';
import { ILandPlot } from '../../data/landplots'
import styles from './CardPlot.module.css'
import imgBlank from '../../images/blank-photo.png'
import { useDispatch } from 'react-redux';
interface ICardPlotProps {
	landPlot: ILandPlot
}

const CardPlot: FC<ICardPlotProps> = ({ landPlot }) => {

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

			<div className={styles['plot__price']}>{landPlot.price}/ 000000 RUB</div>
			<div className={styles['plot__square']}>{landPlot.square} соток</div>
			<p className={styles['plot__description']}>
				{landPlot.description.length ? landPlot.description : "Описания не предоставлено."}
			</p>
		</div>
	)
}

export default CardPlot