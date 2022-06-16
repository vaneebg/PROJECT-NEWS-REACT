#  <center> :card_index: Proyecto React: Web de noticias :card_index: </center> 

 ## :clipboard: Índice :clipboard:

 - [Sobre el proyecto](#bookmarktabs-sobre-el-proyecto-bookmarktabs)

    - [Instalación y despliegue](#nutandbolt-instalación-y-despliegue)

    - [Tecnologías utilizadas](#wrench-tecnologiaspackages-utilizados)

    - [Origen](#dart-origen)

    - [Objetivos](#pushpin-objetivos)

    - [Inspiración](#cinema-inspiración)

- [Descripción del proyecto](#greenbook-descripción-del-proyecto-greenbook)

- [Retos presentados](#dart-retos-presentados-dart)

    - [Imágenes noticias](#imágenes-noticias)

    - [Formularios con input file](#formularios-con-input-file)
    
    - [Documentación API](#documentación-api)


- [Agradecimientos](#agradecimientos)

- [Futuras implementaciones](#blacknib-futuras-implementaciones-blacknib)

- [Autor](#raisedhands-autor-raisedhands)

------------------

# :bookmark_tabs: Sobre el proyecto :bookmark_tabs:


## :nut_and_bolt: Instalación y despliegue 
Para el desarrollo de este mini-proyecto se ha utilizado React principalmente.
El proyecto se subirá a un repositorio público de GitHub.
Además, cuenta con el registro en la siguiente API: [Nytimes](https://developer.nytimes.com/apis).
Para instalar este proyecto debes hacer lo siguiente: primero acceder desde github al repositorio y proceder a clonártelo con el siguiente comando:

git clone https://github.com/vaneebg/PROJECT-NEWS-REACT

Una vez clonado el respositorio es muy importante que en tu consola instales todos los npm que necesita el proyecto con el siguiente comando: 
````
npm i
````

Seguidamente, hay que crear un archivo .env que lleve lo siguiente:
```

REACT_APP_APIKEY = que es la key que te proporciona la API una vez te has registrado

```

Por último, procede a levantar el servidor con este comando una vez estés dentro de la carpeta project-news:
```
npm start
```

## :wrench: Tecnologias/packages utilizados 
- Javascript
- React
- JSX
- SASS
- Context
- UseReducer
- React Router
- Axios
- Dotenv

## :dart: Origen 
Es un proyecto de frontend de la academia The Brigde para asentar conocimientos sobre la utilización de React conjuntamente con context y useReducer. Aparte de esto, se trabajan aptitudes anteriores, como el uso de Axios para llamar a una API. Además, cobra más importancia el diseño con la utilización de SASS.


Se ha trabajado en diversas ramas de Git para continuar con el proceso de aprendizaje de esta herramienta y fomentar las buenas prácticas. Primeramente se ha creado la rama develop y, como en este caso ha sido un trabajo invididual, se ha trabajado desde esa misma rama.   Finalmente, cuando se prueba el proyecto entero desde develop, se comprueba que todo funciona y, si es el caso, se acaba añadiendo a la rama main.


 
## :pushpin: Objetivos 

1.1. Página de noticias
- [X] Implementa React Router en tu página
    - [X] /home. Home de la app
    - [X] /form. Formulario para crear noticia
    - [X] /list. Lista detallada de noticias

- [X] Componentes mínimos
    - [X] Header
    - [X] Home.
    - [X] Form.
        - [X] Formulario de alta de nueva noticia. 
        - [X] Guardar formulario en el local storage
        - [X] Tras dar de alta debes redirigir a ListNews
    - [X] ListNews. Pinta las noticias
    - [X] Footer

- [X] Importante el diseño
- [X] Utilizar context
- [X] Utilizar SASS
- [X] Readme Excelente!!!

## 1.2. Extras
- [ ] Que sea responsive

-------------------
## :cinema: Inspiración 
La idea principal con la que he construido este proyecto es intentar emular la apariencia de un periódico real. Para ello, he utilizado principalmente una paleta de diversos grises y también transparencias para la barra de navegación del header, que he guardado dentro de colors.scss en forma de variables:
![foto](/project-news/toReadme/paleta.png)

Para el fondo general de la página, he escogido una imagen con efecto blur para que no entorpezca la lectura de las noticias:
![foto](/project-news/src/assets/background3.jpg)

En cuanto al diseño en general, tiene un diseño basado en tarjetas que están levemente pintadas con transparencia. Además tienen un efecto hover que les pone un blanco más resaltado por si hay algún problema de lectura con el fondo semitransparente:
![foto](/project-news/toReadme/noticias.png)


El componente Home presenta el mismo diseño, solo que se han añadido algunos gif al principio y final de la página:
![foto](/project-news/toReadme/home.png)

Componente formulario:
![foto](/project-news/toReadme/form.png)

----------
# :green_book: Descripción del proyecto :green_book:
## 1. Componentes
Son un total de 5 componentes, cada uno de ellos enlazado a su fichero scss:


Dos de ellos se encuentran fijados para aparecer siempre independientemente del componente al que te hayas dirigido:
- Header: consta de 2 partes: por un lado, una barra de navegación con posición sticky semitransparente que te lleva a los apartados de la web. Por otro lado, está el título principal de la página "Noticiario casero made in VB".
- Footer: consta del nombre del autor junto con el año de creación. A mano derecha hay una serie de links dispuestos como iconos que redireccionan a las diferentes redes sociales (solo en funcionamiento real github y linkedin).
    Finalmente hay una serie de links no funcionales para simular el pie de página de varias webs.

- Form: Un formulario con diversos input, tanto tipo texto, como un select para asignar la sección de tu noticia y un input type:file para poder subir una imagen. Además, dentro del mismo está la siguiente función con el objetivo de guardar en el localStorage la información introducida en el formulario:
````
let writeNew = JSON.parse(localStorage.getItem("NEWS")) || [];
  const saveData=() =>{
       writeNew.push(data);
       localStorage.setItem("NEWS", JSON.stringify(writeNew));
     }
````

- ListNews: Se encarga principalmente de pintar las noticias que ha recibido de la API.

- Home: se encarga de pintar las noticias que se han ido almacenando en el localStorage mediante la siguiente función:
````
const newsBack = JSON.parse(localStorage.getItem("NEWS"));
````

## 2.Context
La parte fundamental sobre la que se sustenta el trabajo. Con el objetivo de globalizar la información (en este caso la API) para poderla utilizar luego en cualquier de nuestros componentes gracias a GlobalProvider. En este caso, solo hacemos una llamada a la API para conseguir las noticias, mediante esta función:
`````
const getNews = async () => {
   
    let url=`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${APIKEY}`
    const result = await axios.get(url);
    dispatch({
      type: "GET_NEWS",
      payload: result.data.results 
    });
  };
  ``````
  --------------------

# :dart: Retos presentados :dart:
 ## Imágenes noticias
 Algunos problemas al pintar las noticias en html ya que algunas iban sin una imagen, por tanto al hacer el método map, presentaban 'undefined'. Con este condicional se soluciona el problema:
 ``````
 {
          notice.media.length !== 0 ? <img src={notice.media[0]["media-metadata"][0].url} alt='img'/> : null
        }
``````

 ## Formularios con input file
Pese a que el input type=file sube las imágenes, al no estar usando una base de datos, sino que se están guardando en LocalStorage con un path, es complejo traerlas de nuevo al html.


## Documentación API
Cada API cuenta con un procedimiento diferente, por lo que hay que informarse previamente de cómo funciona y qué necesitas para traer los datos que quieres.


------------------------------

# :purple_heart: Agradecimientos :purple_heart:
A los profes [Sofía](https://github.com/SofiaPinilla) e [Iván](https://github.com/ivanpuebla10) por ayudarme a las validaciones y a [Germán](https://github.com/GeerDev) por la ayuda para las variables de entorno en React.
Y a todos mis compis de promoción por compartir momentos de risas y apoyo entre nosotros :smile: .
Especial mención a [Imanol](https://github.com/Imi21) por darnos suuuper peluchitos de compitruenos para la programación.

----------------

# :black_nib: Futuras implementaciones :black_nib:

- [ ] Responsive

- [ ] Creación de componentes hijos que dividan las funciones del componente padre.

- [ ] Pintar en html la imagen guardada en LocalStorage.



----------------------

# :raised_hands: Autor :raised_hands:


- :smiling_imp: [Vanesa Beltrán](https://github.com/vaneebg)




