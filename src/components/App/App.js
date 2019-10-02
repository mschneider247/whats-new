import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import SearchForm from '../SearchForm/SearchForm'
import NewsContainer from '../NewsContainer/NewsContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <main className="app">
        <SearchForm />
        <section className="newsContainer">
          <NewsContainer news={this.state.local}/>
        </section>
      </main>
    );
  }
}

export default App;
