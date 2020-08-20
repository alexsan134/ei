// REACT
import React, { memo, useContext } from 'react'

// ESTILOS
import Styles from './Header.module.scss'

// CONTEXTO
import MainContext from 'Context/MainContext'

// ICONOS
import { Info, Map } from 'react-feather'

// ASSETS
import Store from 'Assets/store.jpg'

const Header: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	return (
		<div className={Styles.head}>
			<div className={Styles.container}>
				<div className={Styles.content}>
					<h1>{lang.header.h1}</h1>
					<p>{lang.header.p}</p>
					<a
						target='_blank'
						rel='noreferrer noopener'
						className='outline'
						href='https://www.facebook.com/ElectronicaEi/'
						title={lang.header.linkTitle}>
						<Info />
						{lang.header.btn}
					</a>
				</div>

				<div className={Styles.info}>
					<div className={Styles.infoContainer}>
						<h2>{lang.header.info_1}</h2>
						<p>{lang.header.info_2}</p>
						<a
							className='btn'
							rel='noopener noreferrer'
							target='_blank'
							href='https://www.google.com/maps/dir/14.5193417,-90.580895/electronica+internacional/@14.5839245,-90.623711,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8589a218b0d76b8f:0xf965e64080119143!2m2!1d-90.5214845!2d14.6348262'
							title='GoMap'>
							<Map />
							{lang.header.info_btn}
						</a>
					</div>

					<div className={Styles.adImage}>
						<img src={Store} alt='Tienda' />
					</div>

					<div className={Styles.ad}>
						<h2>{lang.header.ad}</h2>
						<p>{lang.header.adspan}</p>
					</div>
				</div>

				<div className={Styles.ad2}>
					<h2>{lang.header.title}</h2>
					<p>{lang.header.text}</p>
				</div>
			</div>
		</div>
	)
}

export default memo(Header)
