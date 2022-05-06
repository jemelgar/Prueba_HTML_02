const btnToggle = document.querySelector("#data-theme-toggle");

function handleChangeColor() {
  btnToggle.addEventListener("click", (e) => {
    const checked = e.currentTarget.checked;
  });
}

function checkColorMode() {}

export { handleChangeColor, checkColorMode };
