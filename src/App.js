import React, { useEffect } from "react";
import "./App.css";
import InshortsNav from "./components/InshortsNav";
import { useState } from "react";
import axios from "axios";
import { apikey } from "./.data/config";
import NewsContent from "./components/NewsContent/NewsContent";
import { useRef } from "react";

const App = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [category, setCategory] = useState("general");
  const [loadMore, setLoadMore] = useState(10);
  const fetchNews = async () => {
    try {
      const newsData = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`
      );
      console.log(newsData.data.articles);
      setNewsArray(newsData.data.articles);
      setNewsResults(newsData.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  const hasFetched = useRef(false);
  useEffect(() => {
    // if (hasFetched.current) return;
    // hasFetched.current = true;
    fetchNews();
  }, [newsResults, loadMore, category]);

  return (
    <div>
      <InshortsNav setCategory={setCategory} setLoadMore={setLoadMore} />
      <NewsContent
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
    </div>
  );
};

export default App;
