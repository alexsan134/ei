// REACT
import React, { useEffect, useState, Dispatch, SetStateAction, useContext } from 'react'

// ESTILOS
import Styles from './Navbar.module.scss'

// ASSETS
import Logo from 'Assets/logo'

// HERRAMIENTAS
import { getTime } from 'Utils/Tools'

// CONTEXTO
import MainContext from 'Context/MainContext'

const Navbar: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	// ESTADO
	const open: boolean = getTime()
	const [time, setTime]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(open)

	// ACTUALIZAR TIEMPO
	useEffect(() => {
		// INTERVALO
		const clock = setInterval(() => setTime(open), 1000)

		// LIMPIAR INTERVALO
		return () => clearInterval(clock)
	})

	return (
		<nav className={Styles.nav}>
			<div className={Styles.content}>
				<div className={Styles.logo}>
					<img src={Logo} alt='Logo' />
					<span className={time ? Styles.opened : Styles.closed}>
						{time ? lang.navbar.opened : lang.navbar.closed}
					</span>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
