// MOSTRAR ALERTAS
interface AlertProps {
	type: 'confirm' | 'window' | 'alert' | 'input' | 'error'
	onHide?: () => any
	onConfirm?: () => any
	title: string
	body: string
	confirmBtn?: string
	cancelBtn?: string
	customElements?: string
	fixed?: boolean
}

export const showAlert = (props: AlertProps) => {
	console.log(props)
}
