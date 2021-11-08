/*const MENU = document.getElementById('menu');
const BUTTON = document.*/



/*MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});*/

const SCREENTEXT = document.getElementById('screenText');
const GREETENGIMAGE = document.getElementById('greeting__image');

SCREENTEXT.addEventListener('click', () => {
    SCREENTEXT.innerHTML = "Привет передан!!!";
    GREETENGIMAGE.classList.remove('hidden');
});