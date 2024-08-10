const container = document.querySelector(".container")

function createBoxes() {
    for (let i = 1; i <= 256; i++) {
        const box = document.createElement("div")
        box.classList.add("box")
        box.style.backgroundColor = "white"
        container.appendChild(box)
    }
}

createBoxes()

container.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "orange"
})