import './Header'
import './Header.scss'
import { Link } from 'react-router-dom'


const Header=()=>{
  return (<>
   <div className="nav">
      <Link to="/form">Crea tu noticia</Link>
      <Link to="/">Home</Link>
      <Link to="/listNews">Ver noticias</Link>
  </div>
  <div className="title">
    <h1>Noticiario casero </h1>
    <span>made in VB</span>
  </div>
   </>
  )
}

export default Header