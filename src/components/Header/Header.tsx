import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { useForm, SubmitHandler } from 'react-hook-form'
import logo from '../../images/logo.svg'
import { ReactComponent as IconSearch } from '../../images/search-loaction.svg'
import styles from './Header.module.css'
import { addFilteredPricePlots } from '../../redux/slice/landplotSlice'

type Inputs = {
	priceMin: number,
	priceMax: number
}

const Header = () => {
	const landPlotsList = useSelector((state: RootState) => state.landplot.plotsTotalList)
	const plotsPriceFiltered = useSelector((state: RootState) =>
		state.landplot.plotsPriceFiltered
	)
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>()

	const onSubmitPrice: SubmitHandler<Inputs> = (data) => {
		let chosen: any = []

		landPlotsList.forEach(item => {
			if (item.price >= data.priceMin && item.price <= data.priceMax) {
				chosen.push(item)
			}
		})

		dispatch(addFilteredPricePlots(chosen))
	}

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<img src={logo} alt="land plot" className={styles.logo} />

				<div className={styles.header__info}>
					<div className={styles['form-title']}>Цена участка</div>
					<form onSubmit={handleSubmit(onSubmitPrice)} className={styles['form-price']}>
						<input
							type='number'
							placeholder='от'
							{...register('priceMin')}
						/>
						<input
							type='number'
							placeholder='до'
							{...register('priceMax')}
						/>
						<button
							className={styles['btn-search']}
							type='submit'
						>
							<IconSearch />
						</button>
					</form>
				</div>

				<div className={styles['header__info']}>
					{plotsPriceFiltered.length === 0 ? `Участков всего: ${landPlotsList.length}` : `По запросу найдено ${plotsPriceFiltered.length} участков`}

				</div>
			</div>
		</header>
	)
}

export default Header