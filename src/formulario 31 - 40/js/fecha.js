fecha = new Date;

const hours = fecha.getHours();
const minutes = fecha.getMinutes();
const dia = fecha.getDate()
const mes = fecha.getMonth() + 1;
const año = fecha.getFullYear();

const ampm = hours >= 12 ? 'PM' : 'AM';
const formattedHours = hours % 12 || 12;

const formattedTime = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;

const fechaElements = document.querySelectorAll(".fecha");

fechaElements.forEach(element => {
  element.textContent = `${dia}/${mes}/${año} ${formattedTime}`;
});