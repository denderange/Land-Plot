import { useState } from 'react'
import logo from '../../images/logo.svg'
import styles from './Header.module.css'

const Header = () => {
	const [plotsAmount, setPlotsAmount] = useState(0)

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<img src={logo} alt="land plot" className={styles.logo} />

				<div className={styles.header__info}>
					| cсортировка по цене | сортировка по размеру м.кв | dropdown - цена в руб/$
				</div>

				<div className={styles['header__info']}>
					Участков всего: {plotsAmount}
				</div>
			</div>
		</header>
	)
}

export default Header