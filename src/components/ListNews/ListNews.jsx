import './ListNews'
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);
  console.log(news)
  const notice = news.map((notice) => {
    return (
      <div key={notice.id}>
        <h1>{notice.abstract}</h1>
      </div>
    );
  });
  return <div>{notice}</div>;
};



export default ListNews