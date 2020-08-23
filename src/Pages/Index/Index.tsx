// REACT
import React from 'react'

// COMPONENTES
import Header from 'Components/Header/Header'
import About from 'Components/About/About'
import Services from 'Components/Services/Services'
import Gallery from 'Components/Gallery/Gallery'
import Footer from 'Components/Footer/Footer'

const Index: React.FC = () => {
	return (
		<>
			<Header />
			<About />
			<Services />
			<Gallery />
			<Footer />
		</>
	)
}

export default Index
