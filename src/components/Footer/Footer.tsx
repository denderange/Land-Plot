import { useState } from 'react'
import ModalContacts from '../ModalContacts/ModalContacts'
import styles from './Footer.module.css'

const Footer = () => {
	const [modalIsActive, setModalIsActive] = useState(false)

	const toggleModal = () => {
		setModalIsActive(!modalIsActive)
	}

	return (
		<footer className={styles.footer}>
			<div className={styles['footer_action']}>
				<div className={styles['footer_action__container']}>
					<span>НЕ НАШЛИ ПОДХОДЯЩЕГО ВАРИАНТА?</span>
					<button
						className={styles['footer_action__btn']}
						onClick={toggleModal}
					>
						КЛИКНИТЕ ЗДЕСЬ!
					</button>
				</div>
			</div>

			<div className="container">
				<div className={styles['footer__content']}>
					<ul>
						<li>
							© 1991 - {new Date().getFullYear()} Агентство недвижимости
						</li>
						<li>
							<h5>
								ЗАО "ВАШВЫБОР Люксембург"
							</h5>
						</li>
						<li>г. Люксембург, ул. Вебсайтовая, строение 404</li>
						<li>office@example.com</li>
						<li>office.example.com</li>
					</ul>

					<ul className={styles['contacts']}>
						<li>
							<a href="tel:+375005557770">
								<i>Новостройки</i>
								<span>+375 (00) 555-77-70</span>
							</a>
						</li>
						<li>
							<a href="tel:+375005557771">
								<i>Квартиры на вторичке</i>
								<span>+375 (00) 555-77-71</span>
							</a>
						</li>
						<li>
							<a href="tel:+375005557772">
								<i>Дома, дачи, участки</i>
								<span>+375 (00) 555-77-72</span>
							</a>
						</li>
						<li>
							<a href="tel:+375005557773">
								<i>Нежилой фонд</i>
								<span>+375 (00) 555-77-73</span>
							</a>
						</li>
						<li>
							<a href="tel:+375005557774">
								<i>Оформление сделок</i>
								<span>+375 (00) 555-77-74</span>
							</a>
						</li>
						<li>
							<a href="tel:+375005557775">
								<i>Консультации юристов</i>
								<span>+375 (00) 555-77-75</span>
							</a>
						</li>
						<li>
							<a href="tel:+375005557776">
								<i>Трудоустройство</i>
								<span>+375 (00) 555-77-76</span>
							</a>
						</li>
					</ul>

					<ul className={styles['footer-links']}>
						<li><a href="#!">Каталог недвижимости</a></li>
						<li><a href="#!">Квартиры</a></li>
						<li><a href="#!">Дома</a></li>
						<li><a href="#!">Дачи</a></li>
						<li><a href="#!">Коммерческая</a></li>
						<li><a href="#!">Политика в отношении обработки персональных данных</a></li>
					</ul>

				</div>
			</div>

			<div
				style={{
					fontSize: 'small',
					borderTop: '1px solid',
					padding: '0 200px',
					margin: '0 auto',
					width: 'max-content'
				}}
			>{new Date().getFullYear()} &copy; Dennis Polukaroff</div>

			<ModalContacts toggleModal={toggleModal} isModalActive={modalIsActive} />
		</footer>
	)
}

export default Footer