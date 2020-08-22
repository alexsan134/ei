// REACT
import React, { useContext } from 'react'

// ESTILOS
import Styles from './Categories.module.scss'

// CONTEXT
import MainContext from 'Context/MainContext'

// ICONOS
import { ShoppingCart, Zap, Tv, Monitor } from 'react-feather'
import WhatsappIcon from 'Assets/whatsapp.svg'

const Categories: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	// ICONOS
	const icons = [<ShoppingCart key={0} />, <Zap key={1} />, <Tv key={2} />, <Monitor key={3} />]

	// ALERT
	const showNumber = (title: string) => () => {
		window.Alert({
			title,
			body:
				'Si te gustaria realizar una consulta, envianos los datos del equipo a nuestro WhatsApp:',
			confirmBtn: (
				<button className={Styles.whaBtn}>
					<img src={WhatsappIcon} alt='whaIcon' /> Enviar mensaje
				</button>
			),
			type: 'confirm',
		})
	}

	return (
		<ul className={Styles.list}>
			{lang.services.list.map((cat, key: number) => (
				<li key={key} onClick={showNumber(cat.title)}>
					<div className={Styles.item}>
						<div className={Styles.iconContainer}>{icons[key]}</div>
						<div>
							<h2>{cat.title}</h2>
							<p>{cat.text}</p>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}

export default Categories
