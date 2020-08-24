import React from 'react'

import { render, hydrate } from 'react-dom'

// COMPONENTES
import App from 'Components/App/App'

// ESTILOS
import './index.scss'

// SERVICE WORKER
import * as sw from './serviceWorker'

// RENDER
const root: HTMLDivElement | null = document.getElementById('root') as HTMLDivElement
const app: JSX.Element = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// RECARGAR
if (root.hasChildNodes()) hydrate(app, root)
else render(app, root)

// REGISTRAR
sw.register()
