import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render(props) {
    const { name, sprites, stats } = this.props.pokemon
    const hp = stats.filter(stat => stat.name === 'hp')[0]
    return (
      <Card>
        <div>
          <div className="image">
            <img src={sprites.front}alt="oh no!" />
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
