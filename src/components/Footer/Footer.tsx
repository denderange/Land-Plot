import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer_action']}>
				<div className={styles['footer_action__container']}>
					<span>НЕ НАШЛИ ПОДХОДЯЩЕГО ВАРИАНТА?</span>
					<button className={styles['footer_action__btn']}>
						КЛИКНИТЕ ЗДЕСЬ!
					</button>
				</div>
			</div>

			<div className="container">
				<ul>
					<li>
						© 2016 - 2023 Агентство недвижимости

						ЗАО "АЛЬТЕРНАТИВА Брест"
						г. Брест, ул. Советская, 51-1
						office@a-brest.by
						office.a-brest.by
					</li>
				</ul>
				© 2016 - 2023 Агентство недвижимости

				ЗАО "АЛЬТЕРНАТИВА Брест"
				г. Брест, ул. Советская, 51-1
				office@a-brest.by
				office.a-brest.by
				Войти   Регистрация
				Новостройки
				+375 (29) 757-57-57
				Квартиры на вторичке
				+375 (33) 315-51-51
				Дома, дачи, участки
				+375 (33) 363-51-51
				Нежилой фонд
				+375 (29) 239-52-00
				Оформление сделок
				+375 (29) 727-02-07
				Консультации юристов
				+375 (29) 722-38-36
				Трудоустройство
				+375 (29) 725-44-00
			</div>
		</footer>
	)
}

export default Footer