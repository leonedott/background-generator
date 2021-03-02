const css = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.getElementById("gradient")
const random = document.getElementById("random")

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    css.textContent = `The current background is a gradient between ${color1.value} and ${color2.value}`
}

const randomHexa = () => Math.floor(Math.random()*16777215).toString(16);

const randomize = () => {
    randomColor1 = randomHexa()
    randomColor2 = randomHexa()
    color1.value = `#${randomColor1}`
    color2.value = `#${randomColor2}`
    setGradient()
}

window.onload = setGradient();

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
random.addEventListener("click", randomize)
