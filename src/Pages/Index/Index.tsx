// REACT
import React from 'react'

// COMPONENTES
import Header from 'Components/Header/Header'
import About from 'Components/About/About'
import Services from 'Components/Services/Services'

const Index: React.FC = () => {
	return (
		<>
			<Header />
			<About />
			<Services />
		</>
	)
}

export default Index
