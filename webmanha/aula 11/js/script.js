const usuario = document.getElementById("usuario")
const senha = document.getElementById("senha")
const show = document.getElementById("show")

function showHide() {
    if( senha.type == "password" ) {
        senha.type = "text"
        show.innerHTML = "🌺"
        show.title = "Esconder senha"
    } else {
        senha.type = "password"
        show.innerHTML = "🍀"
        show.title = "Mostrar senha"
    }
}