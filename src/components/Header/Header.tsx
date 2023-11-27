import logo from '../../images/logo.svg'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<img src={logo} alt="land plot" className={styles.logo} />

				<div className={styles.header__info}>
					По запросу найдено - 113 объектов | cсортировка по цене | сортировка по размеру м.кв | dropdown - цена в руб/$
				</div>
			</div>
		</header>
	)
}

export default Header