import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({ news }) => {
  return(
    news.map(article => {
      return <NewsArticle
        key={article.id}
        id={article.id}
        headline={article.headline}
        img={article.img}
        description={article.description}
        url={article.url}
      />
    })
  );
}

export default NewsContainer;