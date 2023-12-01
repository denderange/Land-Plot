import { FC } from 'react';
import { ILandPlot } from '../../data/landplots'
import styles from './CardPlot.module.css'
import imgBlank from '../../images/blank-photo.png'
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
				alt={`Участок номер ${landPlot.id}`}
			/>

			<div className={styles['plot__info']}>
				<div className={styles['plot__price']}>
					{landPlot.price}$ / {landPlot.price}
				</div>

				<div className={styles['plot__square']}>
					{landPlot.square} соток
				</div>
				<p className={styles['plot__description']}>
					{landPlot.description.length ? landPlot.description : "Описания не предоставлено."}
				</p>
			</div>
		</div>
	)
}

export default CardPlot