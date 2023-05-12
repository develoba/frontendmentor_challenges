const btn = document.getElementById("btnShare")
const share = document.querySelector('.card__social')
const author = document.querySelector('.card__author')

btn.addEventListener('click', () => {
    share.classList.toggle('active-share')
    btn.classList.toggle('clicked')
    author.classList.toggle('inactive-author')
})