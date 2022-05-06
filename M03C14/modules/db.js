/* Agregamos compatiblidad con varias navegadores */

const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

let request;

function loadDB() {
  /* Abrimos o creamos la base de datos. Si no la encuentra, la crea */
  request = indexedDB.open("animeDatabase", 1);

  request.onerror = function (event) {
    console.error("database error", event);
  };

  /* Se declara la estructura general de la BD */
  request.onupgradeneeded = function (event) {
    const db = request.result;
    const store = db.createObjectStore("animes", { keyPath: "mal_id" }); // Creamos un "store" con un atributo unico
    store.createIndex("title", ["title"], { unique: true }); // Propiedad de titulo, es único ya que no hay animes llamados igual
    store.createIndex("rating", ["rating"], { unique: false }); // Propiedad de rating, no es único ya que pueden existir animes con la misma clasificación de edad
  };

  return new Promise((resolve) => {
    // Si todo sale bien, ejecutamos esta funcion
    request.onsuccess = function () {
      const db = request.result;
      resolve(db);
    };
  });
}

function addAnimeToDB(anime) {}

function getStoredAnimes() {}

export { loadDB, addAnimeToDB, getStoredAnimes };
