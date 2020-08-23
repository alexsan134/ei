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
import Green from 'Components/Green/Green'

const Services: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	return (
		<section className={Styles.container}>
			<Divider top color='#eee' />

			<div className={Styles.content}>
				<Green className={Styles.green} />

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
