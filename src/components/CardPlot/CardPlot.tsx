import { FC, useState } from 'react';
import { ILandPlot } from '../../data/landplots'
import styles from './CardPlot.module.css'
import imgBlank from '../../images/blank-photo.png'
import { removeChosenPlot } from '../../redux/slice/landplotSlice';
import { useDispatch } from 'react-redux';

interface ICardPlotProps {
	landPlot: ILandPlot
}

const CardPlot: FC<ICardPlotProps> = ({ landPlot }) => {
	const [imgIsLoaded, setImgIsLoaded] = useState(true)
	const dispatch = useDispatch()

	const handleBtnRemove = () => {
		dispatch(removeChosenPlot(landPlot.id.toString()))
		console.log(landPlot.id)
	}

	return (
		<div className={styles['card-container']}>
			<button
				className={styles['btn-remove']}
				onClick={handleBtnRemove}
			></button>
			<img
				src={
					imgIsLoaded ? imgBlank :
						landPlot.image.length ? require(`../../images/plot-photos/${landPlot.image}`) :
							imgBlank
				}
				className={styles['plot__image']}
				alt={`Участок номер ${landPlot.id}`}
				width={500}
				height={500}
				onLoad={() => setImgIsLoaded(false)}
			/>

			<div className={styles['plot__info']}>
				<div className={styles['plot__price']}>
					{landPlot.price} $
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