import React, { Component } from 'react';

class KittenButton extends Component {

  render() {
    return <span onClick={this.props.kittenButtonClicked} className="btn btn-primary kitten-button">Kittens!</span>
  }

}

export default KittenButton;
