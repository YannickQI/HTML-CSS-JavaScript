//MAPEAMENTO DE ELEMENTOS HTML
const menos = document.getElementById("menos")
const mais = document.getElementById("mais")
const range = document.getElementById("range")
const contador = document.getElementById("contador")
const img = document.getElementById("img")

menos.addEventListener("click", function(){
    range.value = Number(range.value) - 10
    contador.innerHTML = Number (range.value)
    img.style.rotate = range.value + "deg"
})

mais.addEventListener("click", function(){
    range.value = Number(range.value) + 10
    contador.innerHTML = Number (range.value)
    img.style.rotate = range.value + "deg"
})

range.addEventListener("input", function(){
    console.log( Number (range.value))
    contador.innerHTML = Number (range.value)
    img.style.rotate = range.value + "deg"
})