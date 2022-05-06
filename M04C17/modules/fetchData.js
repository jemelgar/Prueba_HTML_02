async function getAnimeData() {
  const response = await fetch("data.json");
  const json = await response.text();
  console.log(JSON.parse(json));
}

export { getAnimeData };
