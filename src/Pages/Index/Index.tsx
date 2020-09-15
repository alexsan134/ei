// REACT
import React, { lazy, Suspense } from 'react'

// COMPONENTES
import Header from 'Components/Header/Header'
import About from 'Components/About/About'
import Services from 'Components/Services/Services'
import Gallery from 'Components/Gallery/Gallery'

const Footer = lazy(() => import('Components/Footer/Footer'))

const Index: React.FC = () => {
	return (
		<>
			<Header />
			<About />
			<Services />
			<Gallery />
			<Suspense fallback={<></>}><Footer /></Suspense>
		</>
	)
}

export default Index
