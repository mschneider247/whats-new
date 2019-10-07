import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

const newsData = {
  default: [{
      id: 0,
      headline: 'Loading...',
      description: 'Please Wait To',
      img: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif'}],
}

const parseData = (data) => {
  let dataKeys = Object.keys(data)
  dataKeys.forEach(key => {
    newsData[key] = data[key];
  });
};

fetch("https://whats-new-api.herokuapp.com/api/v1/news")
  .then(data => data.json())
  .then(data => parseData(data))
  .then(ReactDOM.render( <App data={newsData} /> , document.getElementById('root')))
  .catch(err => console.log(err));

