// This is where most of your work will be done
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      value: '',
      search: false,
      addMovie: '',
      searchMovies: []
    }
    // don't forget to bind the methods
    this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onAdd (e) {
    this.setState({
      addMovie: e.target.value
    })
  }

  onSearch (e) {
    this.setState({
      search: true
    })
    // NEVER FORGET preventDefault() to prevent refreshing
    e.preventDefault();
  }

  onChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { movies, value, search } = this.state;
    return (
      <div>
        <h1>Movie List</h1>
        <form onSubmit={this.onAdd}>
          <label>
            Add movie title here
            <input type="text" value={value} onChange={this.onChange}></input>
            <input type="submit" value="Add"></input>
          </label>
        </form>
        <form onSubmit={this.onSearch}>
          <label>
            Search
            <input type="text" value={value} onChange={this.onChange} ></input>
            <input type="submit" value="Go!"></input>
          </label>
        </form>
        <ul>
          {search === true && movies.map((movie, i) => {
            if (value === '') {
              return <li key={i}>{ movie.title }</li>
            } else if (movie.title.includes(value)) {
              return <li key={i}>{ movie.title }</li>
            }
          })}
        </ul>
      </div>
    )
  }
}
