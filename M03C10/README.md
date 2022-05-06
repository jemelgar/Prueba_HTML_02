# Javascript Intermedio: Almacenamiento e Intercambio de Datos.

## Conociendo a indexDB 

En esta carpeta será tu plantilla con la que podras comenzar
el curso y resolverlo poco a poco con las clases de los diferentes modulos.

## Pasos para correr la aplicacion

1. Descargar e instalar la extensiones [Live Sass](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) y [Live Sever](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de VsCode.
2. Al terminar la instalación, podras verlas del lado inferior derecho.
3. Dar click en el boton  __Watch Sass__ para compilar nuestros estilos CSS.
4. Seleccionar el archivo `index.html` y Dar click en el boton __Go Live__ para crear un server local.
5. Listo! Asi tienes corriendo el proyecto.

## Que hay de nuevo?
1. Nuevo modulo `db.js` dentro de la carpeta /modules
2. En este modulo nos permite crear una conexión a una base de datos llamada `animeDatabase`
3. Se crea un objeto request, el cuál tendra tres funciones `onerror`, `onupgradeneed`, `onsuccess` 
4. Se crea el schema (la estructura de nuestra BD) con `store.createIndex`
