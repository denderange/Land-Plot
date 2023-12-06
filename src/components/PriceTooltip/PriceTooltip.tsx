import styles from './PriceTooltip.module.css'

type PriceTooltipProps = {
	price: number,
	square: number
}

const PriceTooltip = ({ price = 0, square = 0 }: PriceTooltipProps) => {
	return (
		<div className={styles['tootlip-container']}>
			<div>
				{price !== 0 ? `${price} $` : `цена не указана`}
			</div>
			<div>{square !== 0 ? `${square} $` : `размер не указан`}</div>
		</div>
	)
}

export default PriceTooltip