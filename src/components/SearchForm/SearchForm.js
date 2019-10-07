import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super();
    this.state = {search: ''}
    this.props = props;
  }

  handleSearch = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <header>
        <h1>What's New?</h1>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={this.state.search}
          onChange={event => this.handleSearch(event)} 
        />
        <button onClick={() => {this.props.searchNews(this.state)}}>Search News</button>
      </header>
    )
  }
}

export default SearchForm;