// REACT
import React from 'react'

// ESTILOS
import Styles from './Alerts.module.scss'

// PROPIEDADES DE ALERTAS
interface AlertProps {
	type: 'confirm' | 'window' | 'alert' | 'error'
	onHide?: () => any
	onConfirm?: () => any
	title: string
	body: string
	confirmText?: string
	cancelText?: string
	confirmBtn?: JSX.Element
	cancelBtn?: JSX.Element
	customElements?: JSX.Element
	fixed?: boolean
}

// PROPIEDADES DEL HOC
interface HOCProps {
	confirmColor?: string
	errColor?: string
	confirmText?: string
	cancelText?: string
}

interface InternalState extends AlertProps {
	open: boolean
}

// ESTADO POR DEFECTO
const defState: InternalState = {
	type: 'alert',
	title: '',
	body: '',
	open: false,
}

// TEMPLATE
class AlertTemplate extends React.PureComponent<HOCProps, InternalState> {
	constructor(props: HOCProps) {
		super(props)

		// ESTADO
		this.state = defState

		// METODOS
		this.show = this.show.bind(this)
		this.hide = this.hide.bind(this)
		this.confirm = this.confirm.bind(this)
	}

	// ACTUALIZAR ESTADO
	public show(props: AlertProps | string) {
		if (typeof props === 'string')
			this.setState({
				type: 'alert',
				title: '',
				body: props,
				open: true,
			})
		else this.setState({ ...props, open: true })
	}

	// OCULTAR
	private hide() {
		if (!this.state.fixed) {
			if (this.state.onHide) this.state.onHide()
			this.setState({ open: false })
		}
	}

	// ACEPTAR
	private confirm() {
		if (this.state.onConfirm) this.state.onConfirm()
		this.hide()
	}

	render() {
		return (
			<div
				onClick={this.state.type === 'window' ? this.hide : undefined}
				className={`${Styles.alertContainer} ${
					this.state.open ? Styles.openAlert : Styles.closeAlert
				}`}>
				<div className={Styles.alertContent}>
					{this.state.type !== 'alert' && <h1>{this.state.title}</h1>}
					<p style={{ fontSize: this.state.type === 'alert' ? '1.2em' : '1em' }}>
						{this.state.body}
					</p>
					{this.state.customElements}

					{this.state.type !== 'window' && (
						<ul className={Styles.alertActions}>
							{!this.state.fixed && this.state.type === 'confirm' && (
								<li>
									{!this.state.cancelBtn ? (
										<button onClick={this.hide} className={Styles.cancelBtn}>
											{this.state.cancelText || this.props.cancelText || 'Cancel'}
										</button>
									) : (
										<div onClick={this.hide}>{this.state.cancelBtn}</div>
									)}
								</li>
							)}
							<li>
								{!this.state.confirmBtn ? (
									<button
										style={{
											background:
												this.state.type === 'error'
													? this.props.errColor || '#ff5252'
													: this.props.confirmColor || '#2196f3',
										}}
										onClick={this.confirm}>
										{' '}
										{this.state.confirmText || this.props.confirmText || 'Accept'}
									</button>
								) : (
									<div onClick={this.confirm}>{this.state.confirmBtn}</div>
								)}
							</li>
						</ul>
					)}
				</div>
			</div>
		)
	}
}

export const withAlerts = (el: React.FC, props?: HOCProps) => {
	// ALERTA VACIA
	const emptyAlert = () => null

	// COMPONENTE
	const wrapper: React.FC = () => (
		<>
			{React.createElement(el)}

			{<AlertTemplate {...props} ref={AlertRef => (window.Alert = AlertRef?.show || emptyAlert)} />}
		</>
	)

	// RETORNAR WRAPPER
	return wrapper
}

export const Alert = (props: AlertProps) => window.Alert(props)

declare global {
	interface Window {
		Alert: (props: AlertProps | string) => any
	}
}
