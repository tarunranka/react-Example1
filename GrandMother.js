import React from 'react';

export default class GrandMother extends React.Component {
  state = {
    lastName: "Sanchez"
  }
  
  render() {
    return <Mother lastName={this.state.lastName} />
  }
}

const Mother = ({ lastName }) => {
  return <Child lastName={lastName} />
}

const Child = ({ lastName }) => {
  return <p>{lastName}</p>
}

