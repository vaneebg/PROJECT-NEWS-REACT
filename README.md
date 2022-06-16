#  <center> :european_castle: Proyecto React: Web de noticias :european_castle: </center> 
``
 ## :clipboard: Índice :clipboard:

 - [Sobre el proyecto](#bookmarktabs-sobre-el-proyecto-bookmarktabs)

    - [Instalación y despliegue](#nutandbolt-instalación-y-despliegue)

    - [Tecnologías utilizadas](#wrench-tecnologiaspackages-utilizados)

    - [Origen](#dart-origen)

    - [Objetivos](#pushpin-objetivos)

    - [Inspiración](#cinema-inspiración)


- [Retos presentados](#dart-retos-presentados-dart)

    - [Borrar en cascada](#borrar-en-cascada)

    - [Manejo de relación de documentos](#manejo-de-relación-de-documentos)
    
    - [Validaciones](#validaciones)

    - [Uso de heroku](#uso-de-heroku)

    - [Nodemailer](#uso-de-nodemailer)

    - [Swagger](#uso-de-swagger)


- [Agradecimientos](#agradecimientos)

- [Futuras implementaciones](#blacknib-futuras-implementaciones-blacknib)

- [Autor](#raisedhands-autor-raisedhands)

# :bookmark_tabs: Sobre el proyecto :bookmark_tabs:


## :nut_and_bolt: Instalación y despliegue 
Para el desarrollo de esta API se ha utilizado MongoDB junto con su ODM Mongoose mediante express en NodeJS.
El proyecto se subirá a un repositorio público de GitHub.
Para instalar este proyecto debes hacer lo siguiente: primero acceder desde github al repositorio y proceder a clonártelo con el siguiente comando:

git clone https://github.com/vaneebg/BACKEND_MONGODB_RED_SOCIAL

Una vez clonado el respositorio es muy importante que en tu consola instales todos los npm que necesita el proyecto con el siguiente comando: 
````
npm i
````

Seguidamente, hay que crear un archivo .env que lleve lo siguiente:
```

PORT = el puerto que utilizarás

MONGO_URI = tu link para conectar con la base de datos MongoBD

JWT_SECRET = tu secreto

USER = el correo que utilizarás para enviar email con nodemailer
PASS = tu contraseña del correo

```

Por último, procede a levantar el servidor con este comando:
```
npm start
```

## :wrench: Tecnologias/packages utilizados 
- Javascript
- MongoDB
- Node
- Express
- Mongoose
- Nodemailer
- Bcrypt
- Jsonwebtoken
- Multer
- Postman

## :dart: Origen 
Es un proyecto de backend de la academia The Brigde para asentar conocimientos en todo el terreno de base de datos no relacionales con MongoDB conjuntamente con Node+Express y el ODM que utilizaremos: Mongoose. Ha consistido en desarrollar la base de datos de una red social conjuntamente con sus funcionalidades: tener seguidores, dar likes a posts o comentarios, etc.


Además de la utilización de estas tecnologías, se ha trabajado en diversas ramas de Git para continuar con el proceso de aprendizaje de esta herramienta y fomentar las buenas prácticas. Primeramente se ha creado la rama develop y, como en este caso ha sido un trabajo invididual, se ha trabajado desde esa misma rama.   Finalmente, cuando se prueba el proyecto entero desde develop, se comprueba que todo funciona y. si es el caso, se acaba añadiendo a la rama main.


Para organizar el trabajo, se ha hecho uso de Trello para dividir las tareas y tener un planteamiento más tangible de las diferentes fases del proyecto:
![foto](/uploadsreadme/Sin%20trello.png)

 
## :pushpin: Objetivos 


Vamos a englobar todo lo visto estos días con un miniproyecto con React utilizando News API vista principal de la página
- [X] Implementa React Router en tu página
    - [X] /home. Home de la app
    - [X] /form. Formulario para crear noticia
    - [X] /list. Lista detallada de noticias

- [X]Componentes mínimos
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

1.2. Extra
- [ ] Que sea responsive

-------------------

# :dart: Retos presentados :dart:
 ## Borrar en cascada
 Fue importante un buen entendimiento de los parámetros y qué se necesitaba para que cuando un usuario se borrase, todo su contenido fuese igual. Lo mismo sucede al borrar un post, todos sus comentarios se borran también de la base de datos.

 ## Manejo de relación de documentos
Al utilizar ahora una base de datos no relacional, había que adaptar los conocimientos que teníamos de sequelize con include, para ponerlos aquí mediante el método de populate. Además, rellenar cada modelo con un array de elementos, en el caso por ejemplo de que un usuario puede tener varios post, al igual que un post solo podría pertenecer a un usuario, por lo que en esta relación no había array, sino un objeto solamente.

## Validaciones
Tener en cuenta qué acciones te permite realizar una red social y cuáles no. Por ejemplo, un usuario sí puede darle like a su propio post, sin embargo no se puede seguir a sí mismo. Además, restringir los likes a uno solo, con el objetivo de evitar que un mismo usuario pueda llenar del mismo like a un post.

## Uso de heroku
Aprender a desplegar una API mediante el uso de Heroku como herramienta nueva. La API está desplegada en: https://red-social-vaneebg.herokuapp.com/

## Uso de nodemailer
En este caso, pese a que lo habíamos utilizado ya antes, las nuevas restricciones de google para las cuentas de gmail, han hecho que tngamos varios problemas. Finalmente, se cambió la configuración de nodemailer para que acepte correos de outlook y poder trabajar desde ahí.


## Uso de Swagger
Aprender a documentar los endpoints dentro de esta nueva herramienta, cerrando correctamente cada endpoint. Hecho el CRUD de comentarios entero: http://localhost:8080/api-docs/#/Comments

------------------------------

# :purple_heart: Agradecimientos :purple_heart:
A la lead instructor [Sofía](https://github.com/SofiaPinilla), y los dos TA [Germán](https://github.com/GeerDev), [Iván](https://github.com/ivanpuebla10) por ayudarme a ponerme al día en clase cuando he tenido algún asunto de salud, y por solucionar algunos bugs y explicármelos.
A [Xavi](https://github.com/xavi-mat) y a [Ger](https://github.com/Molerog) compi por su gran manejo de Swagger :smile: .

----------------

# :black_nib: Futuras implementaciones :black_nib:

- [ ] Implementación de frontend

- [ ] Ampliar las funciones del admin en la red social, por ejemplo, borrar cualquier post.

- [ ] Sistema de testing con Jest.

- [ ] Borrado en cascada para comentarios hechos en otros posts.

----------------------

# :raised_hands: Autor :raised_hands:


- :smiling_imp: [Vanesa Beltrán](https://github.com/vaneebg)




