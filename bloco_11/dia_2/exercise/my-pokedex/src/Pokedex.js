import './Pokedex.css';
import Pokemon from './Pokemon';
import data from './data';
import React from 'react';

class Pokedex extends React.Component {
  render() {
    return (
			<main>
				{data.map((pokemon) => {
					return <Pokemon pokemon={ pokemon }/>
				})}
				
			</main>
		);
  }
}

export default Pokedex;