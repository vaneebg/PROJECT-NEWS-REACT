import './Home'
import './Home.scss'
import groot from '../../assets/groot.gif'
import lines from '../../assets/lines.gif'

const Home=()=>{

const newsBack = JSON.parse(localStorage.getItem("NEWS"));

const listNews=newsBack.map((notice, indice) => {
return (
  <div key={indice} className="noticeInvent">
      <h2>{notice.title}</h2>
      <span>{notice.section}</span>
      <p className="author">{notice.author}</p>
      <span>{notice.date}</span>
    <div className="content">

       <p>{notice.body}</p>
    </div>
  </div>
)})

  return (<>
    <span className='titleHome'>Noticias creadas por nuestros usuarios:</span>
    <div className='home'>
      <div className="image">
        <img className='groot' src={groot} alt="" />
      </div>
      <div className="print">
          {listNews}
      </div>
      <div className="image">
      <img className='groot' src={groot} alt="" />
      </div>
    </div>
    <div className="finalimg">
        <div className="image">
          <img src={lines} className='left' alt="" />
        </div>
        <div className="image">
          <img src={lines} className='right' alt="" />
      </div>
    </div>
    </>
  )
}

export default Home

