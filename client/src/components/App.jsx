// This is where most of your work will be done
import React, { Component } from 'react'
import MovieList from './MovieList.jsx'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ],
      search: ''
    }
    // don't forget to bind the methods
    // createRef takes the input and creates a reference to be used
    this.videoSearch = React.createRef();
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch (e) {
    e.preventDefault();
    let { name, value } = this.videoSearch.current;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { movies, search } = this.state;
    return (
      <div>
        <h1>Movie List</h1>
        <form onSubmit={this.onSearch}>
          <label>
            Search
            <input type="text" name="search" ref={this.videoSearch} ></input>
            <input type="submit" value="Go!"></input>
          </label>
        </form>
        <ul>
          {movies.map((movie, i) => {
            return <li key={i}>{ movie.title }</li>
          })}
        </ul>
      </div>
    )
  }
}
