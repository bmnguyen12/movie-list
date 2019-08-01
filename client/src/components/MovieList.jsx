// import React from 'react'
import React, { Component } from 'react'


export default class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let { movies } = this.props

    return (
      <ul>
        {movies.map((element, i) => {
          return <Movie key={i} movie={element.title}/>
        })}
      </ul>
    )
  }
}