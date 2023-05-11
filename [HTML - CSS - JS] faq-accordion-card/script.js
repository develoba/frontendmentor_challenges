const btns = document.querySelectorAll('.arrowBtn');
const arrows = document.querySelectorAll('.question__arrow');
const titles = document.querySelectorAll('.question__title');
const texts = document.querySelectorAll('.question__text');

btns.forEach(btn => btn.addEventListener('click', () => {
    // Remove rotate
    //arrows.forEach(arrow => arrow.classList.remove('rotate'));

    // Get img id and add rotate to it
    const id = btn.children[1].id
    const arrow = document.getElementById(id)
    const title = btn.children[0]
    // Get text and add active to it
    const text = btn.parentElement.children[1]

    // Remove classes from arrow title and text that are not the one clicked
    arrows.forEach(a => {
        if (a.id !== id) {
            a.classList.remove('rotate')
        }
    })
    titles.forEach(t => {
        if (t != title) {
            t.classList.remove('bold')
        }
    })
    texts.forEach(t => {
        if (t != text) {
            t.classList.remove('active')
        }
    })


    arrow.classList.toggle('rotate')
    title.classList.toggle('bold')
    text.classList.toggle('active')

}));