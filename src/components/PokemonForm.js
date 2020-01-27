import React from 'react'
import { Form } from 'semantic-ui-react'
import { pokemon } from './urls/urls'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleSubmit = (event) => {
    const { name, hp, frontUrl, backUrl } = this.state
    if(name === '' || hp === '' || frontUrl === '' || backUrl === '') return null
    event.preventDefault()
    let pokemon = {
      name: this.state.name,
      stats: [
        {
          "value": this.state.hp,
          "name": "hp"
        }
      ],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl         
      }
    
    } 
    this.props.addPokemon(pokemon)
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '' 
    })
  }
  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, hp, frontUrl, backUrl } = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.handleInput}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hp} onChange={this.handleInput}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl} onChange={this.handleInput}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl} onChange={this.handleInput}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
