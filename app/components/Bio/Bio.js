// jshint ignore: start
import React from 'react'
import _ from 'lodash'

class Bio extends React.Component {
  render () {
    return (
      <div className='Bio'>
        <p>
          This is {this.props.name} and he is {this.props.age}.
        </p>
        <p>{_.capitalize(this.props.pronoun.nominative)} likes {this.props.favoriteActivity}.</p>
        <br />
        <img src={this.props.img} alt={this.props.imgAlt} />
      </div>
    )
  }
}

export default Bio

Bio.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  pronoun: React.PropTypes.object,
  favoriteActivity: React.PropTypes.string
}
