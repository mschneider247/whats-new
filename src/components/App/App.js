import React, { Component } from 'react';
import './App.css';
import SearchForm from '../SearchForm/SearchForm'
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'

class App extends Component {
  constructor({ data }) {
    super();
    this.data = data;
    this.state = {
      news: this.data.default
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      news: this.data.local
    }), 500) 
  }

  filterNews = (filter) => {
    this.setState({ news: this.data[filter]})
  }

  // search news...  needs to look at each key of data
  // then search that array?  hopefully
  // in the array we will check if any titles or descriptions
  // include a set of characters provided by the user
  // this will be the current state of our SearchForm class...

  render () {
    return (
      <main className="app">
        <section className="header">
          <SearchForm />
        </section>
        <section className="menu">
          <Menu filterNews={this.filterNews}/>
        </section>
        <section className="newsContainer">
          <NewsContainer news={this.state.news}/>
        </section>
      </main>
    );
  }
}

export default App;
