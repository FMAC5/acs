let searchInput = document.getElementById('search-tutorial');
let tutorials = document.querySelectorAll('.tutorial');
let tutorial = document.querySelectorAll('h2');

searchInput.addEventListener('input', (e)=>{
    value = e.target.value.toLowerCase();
   
    tutorial.forEach(tutorialName => {
        const isVisible = tutorialName.textContent.includes(value);
        tutorialName.parentElement.classList.toggle('hide',!isVisible);
    });
});

