let dropdown = document.querySelector(".dropdown");
let lesson = document.querySelector(".lesson");

dropdown.addEventListener('click', ()=> {
    lesson.classList.toggle('hide')
});

