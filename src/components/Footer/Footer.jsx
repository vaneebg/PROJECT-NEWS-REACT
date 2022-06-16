import './Footer'
import './Footer.scss'
import img1 from '../../assets/iconface.png'
import img2 from '../../assets/icontwitter.png'
import img3 from '../../assets/iconlinked.png'
import img4 from '../../assets/iconoig.png'
import img5 from '../../assets/icongit.png'

const Footer=({info,copy,links})=>{

  const listLinks=links.map((link,indice)=>{return(<a key={indice} href="">{link}</a>)})
  
  return (
<div className='footer'>
  <div className="contentInfo">
    <div className="info">
      <span>{info}. </span>
      <span>{copy}</span>
    </div>
    <div className="social">
        <a href="http://"><img className='circle' src={img1} alt="iconface" /></a>
        <a href="http://"><img src={img2} alt="icontwitter" /></a>
        <a href="https://www.linkedin.com/in/vanesa-b-a59b6a230/"><img className='circle' src={img3} alt="iconlinked" /></a>
        <a href="http://"><img src={img4} alt="iconig" /></a>
        <a href="https://github.com/vaneebg"><img className='circle' src={img5} alt="icongit" /></a>
    </div>
  </div>
  <div className="links">
   {listLinks}
   </div>
</div>
  )
}

export default Footer