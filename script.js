const buttonContainer = document.querySelector(".buttonContainer")
const container = document.querySelector(".container")

const button = document.createElement("button")
buttonContainer.appendChild(button)
button.textContent = "Change Size"

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function createBoxes(size) {
    for (let i = 1; i <= (size*size); i++) {
        const box = document.createElement("div")
        box.classList.add("box")
        box.style.backgroundColor = "white"
        box.style.height = `${800/size}px`
        box.style.width = `${800/size}px`
        container.appendChild(box)
    }
}

createBoxes(16)

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`
})

function setGridSize() {
    let inputSize = prompt("What size would you like the grid to be? (max 100)")
    if (inputSize > 100) {
        inputSize = 100
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
    createBoxes(inputSize)
}

button.onclick = () => setGridSize()