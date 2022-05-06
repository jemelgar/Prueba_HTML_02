async function getAnimeData() {
  const response = await fetch("data.json");
  const json = await response.text();
  console.log(json);
}

export { getAnimeData };
