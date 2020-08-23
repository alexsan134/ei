// REACT
import React, { useContext } from 'react'

// ESTILOS
import Styles from './Footer.module.scss'

// CONTEXTO
import MainContext from 'Context/MainContext'

// COMPONENTES
import Divider from 'Components/Divider/Divider'

// ICONOS
import { Phone, PhoneCall } from 'react-feather'
import WhatsappIcon from 'Assets/whatsapp.svg'

const Footer: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	return (
		<>
			<div className={Styles.top}>
				<Divider top color='#111' />
				<div>
					<h1>
						{lang.footer.title} <PhoneCall />
					</h1>
					<p>{lang.footer.text}</p>
					<ul>
						<li>
							<a
								href='https://wa.me/50257378088'
								title={lang.footer.phone_1}
								target='_blank'
								rel='noreferrer noopener'>
								<img src={WhatsappIcon} alt='whaIcon Footer' />
								{lang.footer.phone_1}
							</a>
						</li>
						<li>
							<a
								href={`tel:${lang.footer.phone_2}`}
								title={lang.footer.phone_2}
								target='_blank'
								rel='noreferrer noopener'>
								<Phone />
								{lang.footer.phone_2}
							</a>
						</li>
					</ul>
					<a href={`mailto:${lang.footer.email}`} title={lang.footer.email}>
						{lang.footer.email}
					</a>

					<iframe
						id='gmap'
						title='Mapa'
						width='100%'
						height='400'
						src='https://maps.google.com/maps?q=Electronica%20internacional%20$&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed'
						frameBorder='0'
						scrolling='yes'
					/>
				</div>
			</div>
			<footer className={Styles.footer}>
				<div>
					<span>{lang.footer.rights}</span>
					<span>{lang.footer.rights_1}</span>
				</div>
			</footer>
		</>
	)
}

export default Footer
