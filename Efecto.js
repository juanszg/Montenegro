const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDown = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropDown.classList.toggle('open')

    const isOpen = dropDown.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
var contador = document.getElementById("contador");

function animacion() {
    var numero = 0;
    var intervalo = setInterval(function () {
        contador.textContent = numero; // Actualiza el contenido del contador con el nuevo número
        numero++; // Incrementa el número
        if (numero > 120000) {
            clearInterval(intervalo); // Detiene la animación cuando llega a 10
        }
    }, 1); // Cambia este valor para ajustar la velocidad de la animación
}

animacion();