// REACT
import React, { useContext, useState, Dispatch, SetStateAction } from 'react'

// ESTILOS
import Styles from './Gallery.module.scss'

// COMPONENTES
import Divider from 'Components/Divider/Divider'

// CONTEXTO
import MainContext from 'Context/MainContext'

// ICONOS
import { Image, Eye } from 'react-feather'

const Gallery: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	// ESTADO
	const [galleryImage, setImage]: [number, Dispatch<SetStateAction<number>>] = useState<number>(0)

	// ACTUALIZAR ESTADO
	const setGalleryImage = (key: number) => () => setImage(key)

	return (
		<section className={Styles.container}>
			<Divider top color='#333' />
			<input className={Styles.showViewer} id='showViewer' type='checkbox' />

			<div className={Styles.content}>
				<div className={Styles.text}>
					<h1>
						{lang.gallery.title} <Image />
					</h1>
					<p>{lang.gallery.text}</p>
					<a
						href='https://www.facebook.com/media/set/?vanity=ElectronicaEi&set=a.249527788547200'
						title={lang.gallery.btn}
						target='_blank'
						rel='noreferrer noopener'
						className='btn'>
						<Eye /> {lang.gallery.btn}
					</a>
				</div>
				<ul>
					{new Array(10).fill(0).map((_image, key: number) => (
						<li key={key} onClick={setGalleryImage(key)}>
							<label htmlFor='showViewer'>
								<img src={require(`Assets/gallery/pic${key}.jpg`)} alt={`Gallery ${key}`} />
							</label>
						</li>
					))}
				</ul>
			</div>

			<label htmlFor='showViewer' className={Styles.viewer}>
				<img src={require(`Assets/gallery/pic${galleryImage}.jpg`)} alt='Gallery' />
			</label>
		</section>
	)
}

export default Gallery
