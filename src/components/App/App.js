import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import SearchForm from '../SearchForm/SearchForm'

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
      </main>
    );
  }
}

export default App;
