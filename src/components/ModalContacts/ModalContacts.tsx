import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './ModalContacts.module.css'
import emailjs from '@emailjs/browser';

interface IModalContactsProps {
	isModalActive: boolean
	toggleModal: () => void
}

type Inputs = {
	name: string,
	phone: number,
	email: string,
	text: string
}

const ModalContacts = ({ toggleModal, isModalActive }: IModalContactsProps) => {
	const form = useRef()
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data)
		const templateParams = {
			from_name: data.name,
			from_email: data.email,
			message: `телефон пользователя: ${data.phone} \n 
			e-mail пользователя: ${data.email} \n
			сообщение: ${data.text}`
		}

		emailjs.send('service_e0nnd5v', 'template_6jxqu7s', templateParams, 'wpjHTljkoAL_B6MQX')
			.then(() => {
				alert('Сообщение успешно отправлено!')
				reset()
			}, (error) => {
				alert('Сообщение не отправлено. Возникла ошибка.')
			});
	}

	return (
		<dialog className={isModalActive ? styles['underlay'] : styles['underlay-hidden']}>
			<div className={styles['modal']}>
				<section className={styles['modal__contacts']}>
					<h4>
						ЗАО "ВАШВЫБОР Люксембург"
					</h4>

					<ul className={styles['modal__contacts-phones']}>
						<li>
							<a href="tel:375005557777">+ 375 (00)
								<span>{' '}555-77-70</span>
							</a>
							{' '}ЗЕМЕЛЬНЫЙ ОТДЕЛ
						</li>
						<li>
							<a href="tel:375005557777">+ 375 (00)
								<span>{' '}555-77-71</span>
							</a>
							{' '}НЕЖИЛОЙ ФОНД
						</li>
						<li>
							<a href="tel:375005557777">+ 375 (00)
								<span>{' '}555-77-72</span>
							</a>
							{' '}ОФОРМЛЕНИЕ СДЕЛОК
						</li>
						<li>
							<a href="tel:375005557777">+ 375 (00)
								<span>{' '}555-77-73</span>
							</a>
							{' '}КОНСУЛЬТАЦИИ ЮРИСТА
						</li>
						<li>
							<a href="tel:375005557777">+ 375 (00)
								<span>{' '}555-77-74</span>
							</a>
							{' '}БУХГАЛТЕРИЯ
						</li>
					</ul>

					<address>
						<h5>ул. Вебсайтовая, строение 404</h5>
						<p>
							пересечение с ул. Бегжан,
							около памятника "1000-летию г. Амстердам"
						</p>
					</address>

					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.662522209714!2d6.127652275726691!3d49.64181484525769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954f1d35d35c39%3A0xbaa53233b58c59d!2zUnVlIGRlIEJlZ2dlbiwgMTIyMSBCZWdnZW4gTHV4ZW1ib3VyZywg0JvRjtC60YHQtdC80LHRg9GA0LM!5e0!3m2!1sru!2sby!4v1701593176141!5m2!1sru!2sby" width="400" height="300" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
				</section>

				<section className={styles['modal__aside']}>
					<h4>Не нашли, что искали?</h4>
					<p>
						В нашей базе есть еще участки, которых нет на сайте. Оставьте свои данные и наши специалисты подберут вариант под ваши предпочтения.
					</p>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className={styles['modal__form']}
					// ref={form}
					>
						{errors.name && <span className={styles['modal__form-error']}>{errors.name.message}</span>}
						<input
							{...register("name", {
								required: "Введите Ваше имя.",
								maxLength: 50
							})}
							type="text"
							placeholder='Ваши фамилия и имя'
							style={errors.name && { borderColor: 'var(--color-700)', outlineColor: 'var(--color-700)' }}
						/>

						{errors.phone && <span className={styles['modal__form-error']}>{errors.phone.message}</span>}
						<input
							{...register("phone", {
								required: "Введите Ваш номер телефона.",
								maxLength: 50
							})}
							type="number"
							placeholder='Телефон'
							style={errors.phone && { borderColor: 'var(--color-700)', outlineColor: 'var(--color-700)' }}
						/>

						{errors.email && <span className={styles['modal__form-error']}>{errors.email.message}</span>}
						<input
							{...register("email", {
								required: "Укажите Ваш e-mail.",
								maxLength: 50
							})}
							type="email"
							placeholder='E-mail'
							style={errors.email && { borderColor: 'var(--color-700)', outlineColor: 'var(--color-700)' }}
						/>

						{errors.text && <span className={styles['modal__form-error']}>{errors.text.message}</span>}
						<textarea
							{...register("text", {
								required: "Введите текст сообщения.",
								maxLength: 300
							})}
							cols={30}
							rows={10}
							placeholder='Текст сообщения'
							style={errors.text && { borderColor: 'var(--color-700)', outlineColor: 'var(--color-700)' }}
						/>

						<button
							className={styles['modal__form-btn']}
							type='submit'
						>
							Отправить
						</button>
					</form>
				</section>

				<button
					className={styles['modal__btn-close']}
					onClick={toggleModal}
				>X</button>
			</div>
		</dialog>
	)
}

export default ModalContacts