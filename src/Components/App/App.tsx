// REACT
import React from 'react'

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// STRINGS
import Strings from 'Lang/Strings.json'

// CONTEXTO
import MainContext from 'Context/MainContext'

// PAGINAS
import Index from 'Pages/Index/Index'

// COMPONENTES
import Navbar from 'Components/Navbar/Navbar'

// HOC
import { withAlerts } from 'HOCS/Alerts'

// ESTADO
interface AppState {
	langCode: string
	lang: ILangPackage
}

// ESTADO POR DEFECTO
const DefState: AppState = {
	langCode: 'ES',
	lang: Strings.es,
}

const App: React.FC = () => {
	return (
		<MainContext.Provider value={{ ...DefState }}>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Index} />
				</Switch>
			</BrowserRouter>
		</MainContext.Provider>
	)
}

export default withAlerts(App, { confirmText: 'Aceptar', cancelText: 'Cancelar' })
