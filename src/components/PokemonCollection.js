import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  
  render() {
    const { pokemons } = this.props
    const cards = pokemons.map((pokemon, index)=> <PokemonCard key={index} pokemon={pokemon}/>)
    return (
      <Card.Group itemsPerRow={6}>
        {cards}
      </Card.Group>
    )
  }
}

export default PokemonCollection
