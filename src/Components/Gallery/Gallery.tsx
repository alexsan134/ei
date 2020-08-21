// REACT
import React from 'react'

// ESTILOS
import Styles from './Gallery.module.scss'

// COMPONENTES
import Divider from 'Components/Divider/Divider'

const Gallery: React.FC = () => {
	return (
		<section className={Styles.container}>
			<Divider top color='var(--blue)' />
		</section>
	)
}

export default Gallery
