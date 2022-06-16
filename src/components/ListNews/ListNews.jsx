import './ListNews.scss'
import './ListNews'
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);
  
  const notice = news.map((notice) => {
       return (
      <div className='notice' key={notice.id}>
        <h2>{notice.title}</h2>
        <span>{notice.section}</span>
        <span>{notice.updated}</span>
        <div className="content">
            <p>{notice.abstract}</p>
        </div>
        <a href={notice.url}>Link a la noticia original</a>        
      </div>
    );
  });
  return (
  <div className="notices">
    {notice}
  </div>);
};

export default ListNews