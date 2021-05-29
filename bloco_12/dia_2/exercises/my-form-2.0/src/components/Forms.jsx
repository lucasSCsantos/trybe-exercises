import React, { Component } from 'react'
import states from '../data';

class Forms extends Component {
	constructor() {
		super();
		
		this.state = {
			name: '',
			email: '',
			cpf: '',
			adress: '',
			city: '',
			state: '',
			curriculum: '',
			role: '',
			roleDesc: '',
			selectedOption: '',
			div: []
		}

		this.handleClick = this.handleClick.bind(this);
		this.cityNumber = this.cityNumber.bind(this);
		this.specialCarachter = this.specialCarachter.bind(this);
		this.cleanAll = this.cleanAll.bind(this);
		this.createDiv = this.createDiv.bind(this);
	}

	handleClick({ target }) {
		const { name, value, type } = target;
		if(type === 'radio'){
			this.setState({
				selectedOption: value,
			})
		} else if (name === 'name'){
			this.setState({
				[name]: value.toUpperCase(),
			})
		} else {
			this.setState({
				[name]: value,
			})
		}
	}

	cityNumber({ target }) {
		const { value } = target;
		if(!isNaN(parseInt(value[0]))){
			this.setState({
				city: '',
			})
		}
	}

	specialCarachter({ target }) {
		const { value } = target;
		this.setState({
			adress: value.replace(/[^a-zA-Z 0-9]+/g,""),
		})
	}

	mouseEnterAlert() {
		window.alert('Preencha com cuidado')
	}

	createDiv() {
		const entries = Object.entries(this.state)
		const div = (
			<fieldset>
				<div>
				{entries.map(entrie => (
					<p>{entrie.join(': ')}</p>
					))}
				</div>
			</fieldset>
			
		)
		this.setState({
			div: div,
		})
	}

	cleanAll() {
		const keys = Object.keys(this.state)
		keys.map((key) => {
			key === 'div' ? this.setState({
				[key]: []
			}) : this.setState({
				[key]: ''
			})
		})
	}
	
	render() {
		return (
			<form className="form">
				<fieldset className="fieldOne">
					<label>Nome:
						<input 
						value={this.state.name}
						onChange={this.handleClick} 
						type="text" 
						name="name" 
						className="nameInput" 
						required />
					</label>
						<label>Email: 
						<input 
						value={this.state.email}
						onChange={this.handleClick}  
						type="text" 
						name="email" 
						className="emailInput" 
						required />
					</label>
							<label>CPF: 
						<input 
						value={this.state.cpf} 
						onChange={this.handleClick} 
						type="text" 
						name="cpf" 
						className="cpfInput" 
						required />
					</label>
								<label>Endereço: 
						<input 
						value={this.state.adress} 
						onChange={this.handleClick} 
						onKeyUp={this.specialCarachter}
						type="text" 
						name="adress" 
						className="adressInput" 
						maxLength={200} 
						required />
					</label>
									<label>Cidade: 
						<input 
						onBlur={this.cityNumber}
						value={this.state.city} 
						onChange={this.handleClick} 
						type="text" 
						name="city" 
						className="cityInput" 
						maxLength={28} 
						required />
					</label>
										<label>
						<select 
						value={this.state.state} 
						onChange={this.handleClick} 
						name="state" 
						className="stateInput" 
						required>
							{states.map((state, index) => (
							<option key={index}>{Object.values(state)}</option>
							))}
						</select>
					</label>
											<label>Moradia:
						<input 
						id="radioLife"
						type="radio" 
						name="house" 
						value="house"
						className="houseRadio"
						checked={this.state.selectedOption === "house"}
						onChange={this.handleClick}/>Casa
						<input 
						id="radioLife"
						type="radio" 
						name="apartment" 
						value="apartment"
						className="apRadio"
						checked={this.state.selectedOption === "apartment"}
						onChange={this.handleClick}/>Apartamento
					</label>
				</fieldset>
				<fieldset className="fieldTwo">
					<label>Currículo:
						<textarea 
						value={this.state.curriculum} 
						onChange={this.handleClick} 
						name="curriculum" 
						cols="30" rows="10" 
						maxLength={1000} 
						required></textarea>
					</label>
						<label>Cargo:
						<textarea 
						value={this.state.role} 
						onChange={this.handleClick} 
						onClick={this.mouseEnterAlert}
						name="role" 
						cols="30" rows="10" 
						maxLength={40} 
						required></textarea>
					</label>
							<label>Descrição de cargo:
						<textarea 
						value={this.state.roleDesc} 
						onChange={this.handleClick} 
						name="roleDesc" 
						cols="30" rows="10" 
						maxLength={500} 
						required></textarea>
					</label>
				</fieldset>
				<button type="submit" onClick={this.createDiv}>Submit</button>
				<button onClick={this.cleanAll}>Limpar</button>
				{this.state.div}
			</form>
		);
	}
}

export default Forms;
