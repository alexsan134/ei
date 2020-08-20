// REACT
import React, { useContext } from 'react'

// ESTILOS
import Styles from './Services.module.scss'

// CONTEXTO
import MainContext from 'Context/MainContext'

// COMPONENTES
import Divider from 'Components/Divider/Divider'

// ICONOS
import { Grid } from 'react-feather'

// COMPONENTES
import Categories from 'Components/Categories/Categories'

const Services: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	return (
		<section className={Styles.container}>
			<Divider top reverse color='#333' />

			<div className={Styles.content}>
				<h1>
					{lang.services.title} <Grid />
				</h1>
				<p>{lang.services.text}</p>

				<Categories />
			</div>
		</section>
	)
}

export default Services
