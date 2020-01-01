import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false,
  }

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
      })
  }
  render(props) {
    const { clicked } = this.state
    const { name, sprites, stats } = this.props.pokemon
    const hp = stats.filter(stat => stat.name === 'hp')[0]
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={clicked ? sprites.back : sprites.front }alt={`${name}`} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
