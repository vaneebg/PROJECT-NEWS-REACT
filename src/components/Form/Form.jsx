import './Form'
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
         body: "",
         author:"",
       };
   const [data, setData] = useState({
     title: "",
     body: "",
     author:""
   });
   const [btnDisabled, setBtnDisabled] = useState(true);
   const [message, setMessage] = useState("");
   let navigate = useNavigate();

   const clearState = () => {
     setData({ ...initialState });
   };
 
   const handleInputChange = (e) => {
     if ( data.title ==="" || data.body==="" || data.author=== "") {
       // NO VAAA

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
       navigate("/");
     }, 4000);
   };
   return (
     <form onSubmit={handleSubmit}>
         <fieldset>
           <legend><h3>Crea tu propia noticia</h3></legend>
           <div className="inputs">
 
       <input
         type="text"
         placeholder="Título noticia"
         onChange={handleInputChange}
         value={data.title}
         name="title"
       /><br/>
       <textarea name="body" cols='40' rows='10'
        placeholder="Pon aquí el cuerpo de la noticia"
        onChange={handleInputChange}
        value={data.body}
      /><br/>
        <input
         type="text"
         placeholder="Autor"
         onChange={handleInputChange}
         value={data.author}
         name="author"
       /><br/>
       <button type="submit" disabled={btnDisabled}>
         Publicar noticia
       </button>
       </div>
       </fieldset>
       {message}
       
     </form>
   );
}

export default Form