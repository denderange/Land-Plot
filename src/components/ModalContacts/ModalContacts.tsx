import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './ModalContacts.module.css'
import { spawn } from 'child_process'

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
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

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
								<span>{' '}555-77-77</span>
							</a>
							{' '}ЗЕМЕЛЬНЫЙ ОТДЕЛ
						</li>
						<li>
							<a href="tel:375005557777">+ 375 (00)
								<span>{' '}555-77-77</span>
							</a>
							{' '}НЕЖИЛОЙ ФОНД
						</li>
						<li>
							<a href="tel:375005557777">+ 375 (00)
								<span>{' '}555-77-77</span>
							</a>
							{' '}ОФОРМЛЕНИЕ СДЕЛОК
						</li>
						<li>
							<a href="tel:375005557777">+ 375 (00)
								<span>{' '}555-77-77</span>
							</a>
							{' '}КОНСУЛЬТАЦИИ ЮРИСТА
						</li>
						<li>
							<a href="tel:375005557777">+ 375 (00)
								<span>{' '}555-77-77</span>
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

					<form onSubmit={handleSubmit(onSubmit)} className={styles['modal__form']}>
						<input {...register("name", { required: true })} type="text" placeholder='Ваши фамилия и имя' />
						{errors.name && <span className={styles['modal__form-error']}>error message</span>}

						<input {...register("phone")} type="number" placeholder='Телефон' />
						<input {...register("email")} type="email" placeholder='E-mail' />
						<textarea {...register("text")} cols={30} rows={10} placeholder='Текст сообщения'></textarea>

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