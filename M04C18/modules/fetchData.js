async function getAnimeData() {
  const response = await fetch("data.json");
  const json = await response.text();
  console.log(JSON.stringify(json));
}

export { getAnimeData };
