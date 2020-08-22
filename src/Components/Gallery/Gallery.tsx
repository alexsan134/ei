// REACT
import React from 'react'

// ESTILOS
import Styles from './Gallery.module.scss'

// COMPONENTES
import Divider from 'Components/Divider/Divider'

const Gallery: React.FC = () => {
	return (
		<section className={Styles.container}>
			<Divider top color='#333' />

			<div className={Styles.content}>
				<ul>
					{new Array(10).fill(0).map((_image, key: number) => (
						<li key={key}>
							<img src={require(`Assets/gallery/pic${key}.jpg`)} alt={`Gallery ${key}`} />
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Gallery
