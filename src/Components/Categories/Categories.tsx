// REACT
import React, { useContext } from 'react'

// ESTILOS
import Styles from './Categories.module.scss'

// CONTEXT
import MainContext from 'Context/MainContext'
import { ShoppingCart, Zap, Tv, Monitor } from 'react-feather'

const Categories: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	// ICONOS
	const icons = [<ShoppingCart key={0} />, <Zap key={1} />, <Tv key={2} />, <Monitor key={3} />]

	// ALERT
	const showNumber = (title: string) => () => {
		window.Alert(title)
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
