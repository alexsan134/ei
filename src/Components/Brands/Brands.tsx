// REACT
import React, { useContext } from 'react'

// ESTILOS
import Styles from './Brands.module.scss'

// IMAGENES
import b1 from 'Assets/brands/hisense.png'
import b2 from 'Assets/brands/philips.png'
import b3 from 'Assets/brands/samsung.png'
import b4 from 'Assets/brands/sharp.png'
import b5 from 'Assets/brands/sony.png'
import b6 from 'Assets/brands/tcl.png'
import b7 from 'Assets/brands/toshiba.png'
import b8 from 'Assets/brands/lg.png'

// CONTEXTO
import MainContext from 'Context/MainContext'

const Brands: React.FC = () => {
	// CONTEXTO
	const { lang } = useContext(MainContext)

	return (
		<div className={Styles.container}>
			<span>{lang.about.span}</span>
			<ul>
				<li>
					<img loading='lazy' width='70' src={b3} alt='Brand1' />
				</li>
				<li>
					<img loading='lazy' width='70' src={b8} alt='Brand2' />
				</li>
				<li>
					<img loading='lazy' width='70' src={b5} alt='Brand3' />
				</li>
				<li>
					<img loading='lazy' width='70' src={b6} alt='Brand4' />
				</li>
				<li>
					<img loading='lazy' width='70' src={b2} alt='Brand5' />
				</li>
				<li>
					<img loading='lazy' width='70' src={b7} alt='Brand6' />
				</li>
				<li>
					<img loading='lazy' width='70' src={b4} alt='Brand7' />
				</li>
				<li>
					<img loading='lazy' width='70' src={b1} alt='Brand8' />
				</li>
			</ul>
		</div>
	)
}

export default Brands
