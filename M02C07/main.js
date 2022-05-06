import { addCookieToButton, checkCookies } from "./modules/cookies.js";

function onLoad() {
  /* Agregamos la funcionalidad de crear cookies en el modal */
  addCookieToButton();
  /* Verficamos que la cookie se encuentre activa */
  checkCookies();
  /* Guardando un string con sessionStorage. Nota: Solo demostrativo */
  /*setSessionItems(); */

  /* Guardando items dentro del localStorage */
  localStorage.setItem("tema", "dark");
  localStorage.setItem("config", "saved");

  /* Accediendo al un valor guardadno dentro del localStorage */
  console.log(localStorage.getItem("tema"));
}

onLoad();
