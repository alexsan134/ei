// REACT
import React, { useContext } from 'react'

// ESTILOS
import Styles from './Green.module.scss'

// ASSETS
import Recycle from 'Assets/recycle.png'

// CONTEXTO
import MainContext from 'Context/MainContext'

// ICONOS
import { Feather } from 'react-feather'

// PROPIEDADES
interface GreenProps {
	className?: string
}

const Green: React.FC<GreenProps> = (props: GreenProps) => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	return (
		<div className={`${Styles.container} ${props.className}`}>
			<img src={Recycle} alt='Reciclaje' />
			<div className={Styles.text}>
				<h1>{lang.green.title}</h1>
				<p>{lang.green.text}</p>
				<a
					href='https://www.facebook.com/ElectronicaEi/'
					target='_blank'
					rel='noreferrer noopener'
					className='btn'
					title={lang.green.btn}>
					<Feather />
					{lang.green.btn}
				</a>
			</div>
		</div>
	)
}

export default Green
