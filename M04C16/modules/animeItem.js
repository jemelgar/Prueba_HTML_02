import { addAnimeToDB, getStoredAnimes } from "./db.js";

const contentGrid = document.querySelector("#anime-grid");
const watchedBtns = document.querySelectorAll("#watched-button");

function handleSaveItem() {
  watchedBtns.forEach((button, key) => {
    const animeItem = document.querySelector(`#anime-item-${key}`);
    const animeTitle = animeItem.querySelector("#anime-item-title").innerText;
    const rating = animeItem
      .querySelector("#anime-item-rating")
      .innerText.split("Rating: ")[1];

    button.addEventListener("click", function () {
      addAnimeToDB({ mal_id: key, title: animeTitle, rating: rating });
      contentGrid.removeChild(animeItem);
    });
  });
}

async function removeSavedItems() {
  const storedAnimes = await getStoredAnimes();
  const childrenNodes = [...contentGrid.children];

  const savedAnimes = childrenNodes.filter((presentItem) => {
    return storedAnimes.find((storedItem) => {
      const presentItemTitle =
        presentItem.querySelector("#anime-item-title").innerText;
      return presentItemTitle === storedItem.title;
    });
  });

  savedAnimes.forEach((anime) => {
    contentGrid.removeChild(anime);
  });
}

async function showSavedItems() {
  const storedAnimes = await getStoredAnimes();
  const childrenNodes = [...contentGrid.children];

  const notSavedAnimes = childrenNodes.filter((presentItem) => {
    return !storedAnimes.find((storedItem) => {
      const presentItemTitle =
        presentItem.querySelector("#anime-item-title").innerText;
      return presentItemTitle === storedItem.title;
    });
  });

  notSavedAnimes.forEach((anime) => {
    contentGrid.removeChild(anime);
  });
}

export { handleSaveItem, removeSavedItems, showSavedItems };
