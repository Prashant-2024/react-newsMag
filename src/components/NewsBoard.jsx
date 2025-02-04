import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);

  // here i can't use `&category=${category}` as param in url, since the API does not allow it, but it works if checked independently
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
}

export default NewsBoard;
