let colorPaletteEl = document.getElementById("colorPalette");
let refreshBtnEl = document.getElementById("refreshBtn")

const generatePalette = () => {
    colorPaletteEl.innerHTML = ""
    for (let i = 0 ; i < 28 ; i++ ) {
    let randomHexNumber = Math.ceil(Math.random()*0xffffff).toString(16);
    let randomHexCode = `#${randomHexNumber}`;
    
    let liEl = document.createElement("li");
    colorPaletteEl.appendChild(liEl);
    liEl.classList.add('color-container')
    
    let colorContainerEl = document.createElement("div");
    liEl.appendChild(colorContainerEl);
    colorContainerEl.style.backgroundColor = randomHexCode;
    colorContainerEl.classList.add('color')
    
    let hexCodeEl = document.createElement("p");
    hexCodeEl.textContent = `${randomHexCode}`;
    hexCodeEl.classList.add('hex-code')
    liEl.appendChild(hexCodeEl);
    }
}

refreshBtnEl.addEventListener("click", generatePalette);