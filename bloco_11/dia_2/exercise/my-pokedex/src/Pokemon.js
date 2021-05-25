import './Pokemon.css'
import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <section>
				<div className="pokemonLeft" style={{width: '100%'}}>
					<p>
						{this.props.pokemon.name}
					</p>
					<p>
						{this.props.pokemon.type}
					</p>
					<p>
						Average Weight:{this.props.pokemon.averageWeight.value}{this.props.pokemon.averageWeight.measurementUnit}
					</p>
				</div>
				<div className="pokemonRight">
					<img src={this.props.pokemon.image} alt={this.props.pokemon.name}></img>
				</div>
			</section>
    );
  }
}

export default Pokemon;