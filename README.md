# Creamos nuestro proyecto con el siguiente comando

### `npx create-react-app my_galery_react`


## Para desplegar nuestro proyecto con el siguiente comando

Se despliega en el navegador que este por default:

### `npm start`

Corre en el puerto 3000 mode.\
Open [http://localhost:3000](http://localhost:3000) en la url de tu navegador.

### `Ctrl + C`  
Nos sirve para detener la ejecución y salir del programa, lo ejecutamos directamente en la consola.


## Para trabajar con el preprosesador como SASS debemos instalar el mode en el siguiente comando

### `npm i node-sass`

Nos permite utilizar los archivos de estilos con las extenciones **`.sass`** o **`.scss`**
Para su instalacion nos dirigimos a [npm-sass](https://www.npmjs.com/package/node-sass) para más información.


## Para trabajar con la libreria de react-image-gallery 

### `npm i react-image-gallery`

Nos permite utilizar un componente ya predeterminado de una galeria de imagenes con un slider automatico y un carrusel de imagenes muy comodo, ademas de que sus opciones podemos utilizarlas a la necesidad del proyecto.
En nuestra `App.js` principarl importamos la libreria, `import Nombre-que-Quiera from 'react-image-gallery'` y listo.

Ya con esta indicación podemos empezar a organizar nuestra galeria.

Para su instalacion nos dirigimos a [npm-react-image-gallery](https://facebook.github.io/create-react-app/docs/deployment) para más información.

**Note: Tambien podemos importar los estilos de la libreria, tanto Sass como Css, con el siguiente comando**

# SCSS
`import "react-image-gallery/styles/scss/image-gallery.scss";`

# CSS
`import "react-image-gallery/styles/css/image-gallery.css";`

Los estilos le dan el orden y tamaño a las imagenes de una galeria de imagenes.

**Note: No olvidar de exportar las imagenes con el componente app para utilizarlas en el Objeto de galery, `import img_1 from './assets/01.jpg';`**
