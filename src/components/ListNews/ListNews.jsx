import './ListNews'
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const ListNews = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);
  const notice = news.map((notice) => {
   
    console.log(notice.media.length !== 0)
    return (
      <div className='notice' key={notice.id}>
        <h1>{notice.title}</h1>
        <span>{notice.section}</span>
       
        <span>{notice.updated}</span>
        <div className="content">
        {
          notice.media.length !== 0 ? <img src={notice.media[0]["media-metadata"][0].url} alt='img'/> : null
        }
        <p>{notice.abstract}</p>
        </div>
        <span>{notice.url}</span>
        
      </div>
    );
  });
  return <div>{notice}</div>;
};



export default ListNews