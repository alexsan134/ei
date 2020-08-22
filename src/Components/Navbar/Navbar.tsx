// REACT
import React, {
	useEffect,
	useState,
	Dispatch,
	SetStateAction,
	useContext,
	RefObject,
	useRef,
} from 'react'

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

	// REFERENCIAS
	const navRef: RefObject<HTMLDivElement> = useRef(null)

	// ESTADO
	const open: boolean = getTime()
	const [time, setTime]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(open)

	// ACTUALIZAR TIEMPO
	useEffect(() => {
		// ANIMAR NAVBAR
		const setBackground = () => {
			if (window.scrollY > 80 && navRef.current) navRef.current.style.background = '#222'
			else if (navRef.current) navRef.current.style.background = 'transparent'
		}

		// AGREGAR EVENTO
		window.addEventListener('scroll', setBackground)

		// LIMPIAR INTERVALO
		return () => window.removeEventListener('scroll', setBackground)
	}, [])

	useEffect(() => {
		// INTERVALO
		const clock = setTimeout(() => setTime(open), 1000)

		// LIMPIAR INTERVALO
		return () => clearTimeout(clock)
	}, [open])

	return (
		<nav className={Styles.nav} ref={navRef}>
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
