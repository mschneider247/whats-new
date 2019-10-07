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
    }), 1100)
  }

  filterNews = (filter) => {
    this.setState({ news: this.data[filter]})
  }

  searchNews = ( { search } ) => {
    let dataKeys = Object.keys(this.data)
    let reducedData = dataKeys.reduce((acc, key) => {
      this.data[key].forEach(newsItem => {
        let headlineSplit = newsItem.headline.split(' ');
        let descriptionSplit = newsItem.description.split(' ');
          headlineSplit.forEach(element => {
            if (element.toLowerCase() === search.toLowerCase()) {
              return acc.push(newsItem)
            }
          })
          descriptionSplit.forEach(element => {
            if (element.toLowerCase() === search.toLowerCase()) {
              return acc.push(newsItem)
            }
          })
      })
      return acc;
    }, [])
    this.setState({
      news: reducedData
    });
  }

  render () {
    return (
      <main className="app">
        <section className="header">
          <SearchForm searchNews={this.searchNews}/>
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
