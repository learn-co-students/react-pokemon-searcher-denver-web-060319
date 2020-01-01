import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { pokemon } from './urls/urls.js'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemons: []
    }
  }

  componentDidMount(){
    fetch(pokemon)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.setState({ 
          pokemons: [...result]
        })
      })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={() => console.log('🤔')} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
