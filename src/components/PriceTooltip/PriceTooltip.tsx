import styles from './PriceTooltip.module.css'

type PriceTooltipProps = {
	price: number,
	square: number
}

const PriceTooltip = ({ price = 0, square = 0 }: PriceTooltipProps) => {
	return (
		<div className={styles['tootlip-container']}>
			<div>
				{price !== 0 && !isNaN(price) ? `${price} $` : ``}
			</div>
			<div>{square !== 0 && !isNaN(price) ? `${square} соток` : ``}</div>
		</div>
	)
}

export default PriceTooltip