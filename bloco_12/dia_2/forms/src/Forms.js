import React from 'react'
import './Forms.css'

class Forms extends React.Component {
	constructor() {
		super();
		
		this.state = {
			name: '',
			idade: 0,
			estado: '',
		}
		this.handleChange = this.handleChange.bind(this)

	}

	handleChange({ target }) {
		const { name, value } = target;
		this.setState({
			[name]: value,
		})
	}

	render() {
		return (
			<form className="forms">
				<label>Estado:
					<select name='estado'>
						<option>Bahia</option>
						<option>França</option>
						<option>Brasil</option>
					</select>
				</label>
				<label>Nome:
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
				</label>
				<label>Idade:
					<input type="number" name="idade" value={this.state.idade} onChange={this.handleChange} ></input>
				</label>
			</form>
		);
	}
}

export default Forms;