import './Home'
import './Home.scss'
const Home=()=>{

const newsBack = JSON.parse(localStorage.getItem("NEWS"));
const listNews=newsBack.map((notice) => { return ( <div className="noticeInvent">
      <h2>{notice.title}</h2>
      <span>{notice.section}</span>
      <p>{notice.author}</p>
      <span>{notice.date}</span>
      <div className="content">
      <p>{notice.body}</p>
      </div>
      </div>
      )
      })

  return (
    <div className='home'>
      <div className="image">

      </div>
      <div className="print">
          {listNews}
      </div>
      <div className="image">
        
      </div>
    </div>
  )
}

export default Home