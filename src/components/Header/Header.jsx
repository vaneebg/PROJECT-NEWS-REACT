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
    <h1>Noticiario casero made in VB</h1>
   
        </>
  )
}

export default Header