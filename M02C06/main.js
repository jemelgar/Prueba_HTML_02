import {
  addCookieToButton,
  checkCookies,
  setSessionItems,
} from "./modules/cookies.js";

function onLoad() {
  /* Agregamos la funcionalidad de crear cookies en el modal */
  addCookieToButton();
  /* Verficamos que la cookie se encuentre activa */
  checkCookies();
}

onLoad();
