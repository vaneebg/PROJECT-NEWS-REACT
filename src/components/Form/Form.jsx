import './Form'
import './Form.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form=()=>{
  let writeNew = JSON.parse(localStorage.getItem("NEWS")) || [];
  const saveData=() =>{
       writeNew.push(data);
       localStorage.setItem("NEWS", JSON.stringify(writeNew));
     }
 
 const initialState = {
         title: "",
         section:"",
         body: "",
         author:"",
         img:"",
         date:new Date()
       };
   const [data, setData] = useState(initialState);
   const [btnDisabled, setBtnDisabled] = useState(true);
   const [message, setMessage] = useState("");
   let navigate = useNavigate();

   const clearState = () => {
     setData({ ...initialState });
   };
 
   const handleInputChange = (e) => {
     if ( data.title ==="" || data.body==="" || data.author=== "") {

       setMessage("Debes rellenar los tres campos");
       setBtnDisabled(true);
 
     } else {
       setMessage(null);
       setBtnDisabled(false);
     }
 
     setData({
       ...data,
       [e.target.name]: e.target.value,
     });
   };
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log("se lanza el formulario", data);
     saveData()
     clearState();
     setMessage("noticia creada con éxito");
     setTimeout(() => {
       navigate("/listNews");
     }, 4000);
   };
   return (
    <div className="form">
     <form onSubmit={handleSubmit}>
         <fieldset>
           <legend><h2>Crea tu propia noticia</h2></legend>
           <div className="inputs">
            <label htmlFor="title">Título de la noticia:</label><br/>
            <input id='title'className='input'
         type="text"
         placeholder="Ej:Delfines asesinos"
         onChange={handleInputChange}
         value={data.title}
         name="title"
            /><br/>
             <label htmlFor="section">Escoja la sección a la que pertenecerá:</label><br/>
            <select id='section'className='input section'
              value={data.section}
              onChange={handleInputChange}
              name="section"
            >
              <option>Salud</option>
              <option>Deportes</option>
              <option>Política</option>
              <option>Ocio</option>
              <option>Tecnología</option>
              <option>Ciencia</option>
            </select><br/>
            <label htmlFor="body">Cuerpo de la noticia:</label><br/>
       <textarea id='body'name="body" cols='70' rows='10'
        placeholder="Ej:Ayer en playa paraíso una manada de tiburones asestó un duro golpe..."
        onChange={handleInputChange}
        className='input'
        value={data.body}
      /><br/>
        <label htmlFor="author">Nombre:</label><br/>
        <input id='author'
         type="text"
         placeholder="Ej:Pepito Perez"
         className='input'
         onChange={handleInputChange}
         value={data.author}
         name="author"
       /><br/>
        <label htmlFor="img">Sube una imagen(opcional):</label><br/>
       <input type="file" name='img'value={data.img} onChange={handleInputChange}/><br/>
       <button type="submit" disabled={btnDisabled}>
         Publicar noticia
       </button>
       </div>
       </fieldset>
       {message}
       
     </form>
     </div>
   );
}

export default Form