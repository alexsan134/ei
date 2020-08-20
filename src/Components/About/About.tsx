// REACT
import React, { useContext } from 'react'

// ESTILOS
import Styles from './About.module.scss'

// COMPONENTES
import Divider from 'Components/Divider/Divider'

// CONTEXTO
import MainContext from 'Context/MainContext'
import Brands from 'Components/Brands/Brands'

const About: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	return (
		<section className={Styles.about}>
			<Divider top color='var(--white)' className={Styles.wave} />

			<div className={Styles.text}>
				<h1>{lang.about.title}</h1>
				<p>{lang.about.text}</p>
				<Brands />
			</div>
		</section>
	)
}

export default About
