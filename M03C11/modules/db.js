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

  // Si todo sale bien, ejecutamos esta funcion
  request.onsuccess = function () {
    const db = request.result;
    console.log("open database", db);

    const transaction = db.transaction("animes", "readwrite");
    const store = transaction.objectStore("animes");

    /* Insertamos datos con la misma estructura definida anteriormente */
    store.put({ mal_id: 0, title: "Naruto", rating: "PG-13" });
    store.put({ mal_id: 1, title: "Dragon Ball", rating: "PG-13" });
    store.put({ mal_id: 2, title: "One Piece", rating: "NC-17" });
  };
}

export { loadDB };
