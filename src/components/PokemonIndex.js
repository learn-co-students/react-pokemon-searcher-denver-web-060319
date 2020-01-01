import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { pokemonUrl } from './urls/urls.js'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemonForm: {},
      pokemons: [],
      searchPrase: ''
    }
  }
  componentDidMount(){
    fetch(pokemonUrl)
      .then(response => response.json())
      .then(result => {
        this.setState({ 
          pokemons: [...result]
        })
      })
  }
  updateSearch = event => {
    return this.setState({
      searchPrase: event.target.value
    })
  }
  filterPokemons = (pokemons, searchPrase) => {
    return pokemons
      .sort((a, b) => a.id - b.id)
      .filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchPrase.toLowerCase())
    })
  }
  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
    fetch(pokemonUrl, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemon)
    })
  }
  
  render() {
    const { pokemons, searchPrase } = this.state

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search value={searchPrase} updateSearch={this.updateSearch} />
        <br />
        <PokemonCollection pokemons={ this.filterPokemons(pokemons, searchPrase) }/>
      </Container>
    )
  }
}

export default PokemonPage
