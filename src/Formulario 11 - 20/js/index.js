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


// ----------------------- CARRUSEL -----------------------------------

const sectionsContainer = document.querySelector('.contenedorSection');
const sections = document.querySelectorAll('.pagina');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    const translateValue = `-${currentIndex * 100}%`;
    sectionsContainer.style.transform = `translateX(${translateValue})`;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < sections.length - 1) {
    currentIndex++;
    const translateValue = `-${currentIndex * 100}%`;
    sectionsContainer.style.transform = `translateX(${translateValue})`;
  }
});

// ------------------------ PRINT ------------------------------------

document.getElementById("print").addEventListener('click', function(){
  window.print();
})