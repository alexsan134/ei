// REACT
import React from 'react'

// ESTILOS
import Styles from './About.module.scss'

// COMPONENTES
import Divider from 'Components/Divider/Divider'

const About: React.FC = () => {
	return (
		<section className={Styles.about}>
			<Divider top color='var(--white)' className={Styles.wave} />
		</section>
	)
}

export default About
