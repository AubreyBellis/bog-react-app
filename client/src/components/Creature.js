import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const CreatureStyles = styled.div`
img {
  max-height: 500px;
  width:100%;
}
`;

class Creature extends Component{
  constructor(){
    super();
    this.state = {
      creature: {}
    }
  }

  componentWillMount(){
    this._fetchCreature();
  }

  _fetchCreature = async () => {
    const id = this.props.match.params.id;
    console.log(id);
    const res = await axios.get(`/api/creatures/${id}`)
    this.setState({
      creature: res.data
    })
  }

  render(){
    return (
      <CreatureStyles>
        <div>
        <img src={this.state.creature.photo_url} />
        <h1>{this.state.creature.name}</h1>
        <h4>Description: {this.state.creature.description}</h4>
        </div>
      </CreatureStyles>
    )
  }
}

export default Creature;