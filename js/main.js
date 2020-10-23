let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
  event.preventDefault();           // отмена стандартного события по клику
  menu.classList.toggle('visible'); // присвоение нового класса
})