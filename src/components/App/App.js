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
  entertainment: entertainment,
  health: health,
  local: local,
  science: science,
  technology: technology
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  filterNews = (filter) => {
    console.log(filter);
    console.log(data[filter]);
    console.log(this.state);
    // this.setState({ data[filter] })
    //this.setState({filter})
  }

  render () {
    return (
      <main className="app">
        <SearchForm />
        <Menu filterNews={this.filterNews}/>
        <section className="newsContainer">
          <NewsContainer news={this.state.local}/>
        </section>
      </main>
    );
  }
}

export default App;
