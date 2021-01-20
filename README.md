<div align="center">
  <img alt="Logo" src="https://res.cloudinary.com/hlfqyyg9k/image/upload/v1611156473/logo_9abe929404.png" width="100" />
</div>
<h1 align="center">
  juanoa.com
</h1>
<p align="center">
  Blog de Juan Otálora que utiliza Gatsby para crear páginas estáticas a partir de mi API desarrollada son Strapi.
</p>

## ✂️ Respecto a hacer un *fork*

Si este repositorio es público es porque no tengo ningún problema en que lo uséis como base para vuestros propios proyectos. **Copiar está bien, pero plagiar ya no tanto**. Por este mismo motivo, atribuye al autor la creación de este proyecto 🙂.

Siéntete libre de modificarlo y adaptarlo a tus necesidades. También puedes contactar conmigo si necesitas ayuda o si tienes algún problema con el respositorio.

## 🚀 Empezar

1.  **Crea un nuevo proyecto.**

    Utiliza el CLI de Gatsby para clonar este repositorio.

    ```shell
    gatsby new blog https://github.com/juanoa/juanoa.com
    ```
    
1.  **Comienza a desarrollar.**

    Muévete a la nueva carpeta e inicia el servidor de desarrollo

    ```shell
    cd blog/
    gatsby develop
    ```

1.  **Abre el navegador.**

    El sitio estará corriendo en `localhost:8000`, donde podrás ir viendo todos los cambios que hagas en el proyecto.

## 🧩 Respecto a la API

Esta proyecto de Gatsby obtiene el contenido de una API basada en Strapi. Por esa misma razón, será necesario que **añadas la siguiente variable de entorno con la URL de tu API** para que funcione correctamente. Tampoco te olvides de cambiar las consultas GraphQL para que se adapten a tus necesidades.

Crea un fichero `.env` y añade la siguiente línea:

```
API_URL=https://url-api-strapi.com
```

## 📝 Configuración

Debes editar el fichero ´gatsby-config.js´ para personalizarlo a tu contexto:

```js
siteMetadata: {
  title: `Título de la web`,
  description: `Descripción de la web`,
  author: `@juanoa_`,
  siteUrl: `https://url-del-sitio.com`,
},
```

```js
{
  resolve: `gatsby-plugin-google-gtag`,
  options: {
  // You can add multiple tracking ids and a pageview event will be fired for all of them.
  	trackingIds: [
    	"UA-XXXXXXXXX", // Google Analytics / GA
   	],
  },
},
```

