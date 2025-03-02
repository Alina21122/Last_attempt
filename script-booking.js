
(function(){
  var animationInput = document.createElement('input');
  animationInput.setAttribute('name', 'animation');
  animationInput.setAttribute('type', 'hidden');
  document.body.append(animationInput);
})();


document.addEventListener("DOMContentLoaded", function () {
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("booking-modal");
const form = document.getElementById("booking-form");

// Открыть модальное окно
openModalBtn.addEventListener("click", function (e) {
e.preventDefault();
modal.style.display = "block";
});

// Закрыть модальное окно
closeModalBtn.addEventListener("click", function () {
modal.style.display = "none";
});

// Закрытие окна при клике вне формы
window.addEventListener("click", function (e) {
if (e.target === modal) {
  modal.style.display = "none";
}
});

// Обработчик отправки формы
form.addEventListener("submit", function (e) {
e.preventDefault();

// Проверка доступности столиков
const date = document.getElementById("booking-date").value;
const time = document.getElementById("booking-time").value;
const guests = document.getElementById("guests").value;
const tableType = document.getElementById("table-type").value;

alert(
  `Ваше бронирование подтверждено!\nДата: ${date}\nВремя: ${time}\nГостей: ${guests}\nТип стола: ${tableType}`
);

// Закрыть модальное окно
modal.style.display = "none";
});
});
