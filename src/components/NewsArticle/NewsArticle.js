import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return(
    <div className="newsCard">
      <h3>{props.headline}</h3>
      <img src={props.img} alt="News"/>
      <p>{props.description}</p>
      <a href={props.url}>Read Article</a>
    </div>
  )
}

export default NewsArticle;