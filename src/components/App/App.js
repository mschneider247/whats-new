import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import SearchForm from '../SearchForm/SearchForm'
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'

const data = {
  default: [{title: 'Loading...'}],
  entertainment: entertainment,
  health: health,
  local: local,
  science: science,
  technology: technology
}

// Should be able to fetch data and then update the state
// data.default works for now...

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: data.default
    }
  }

  filterNews = (filter) => {
    this.setState({ news: data[filter]})
  }

  // search news...  needs to look at each key of data
  // then search that array?  hopefully
  // in the array we will check if any titles or descriptions
  // include a set of characters provided by the user
  // this will be the current state of our SearchForm class...

  render () {
    return (
      <main className="app">
        <SearchForm />
        <Menu filterNews={this.filterNews}/>
        <section className="newsContainer">
          <NewsContainer news={this.state.news}/>
        </section>
      </main>
    );
  }
}

export default App;
