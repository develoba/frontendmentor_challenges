const email = document.getElementById("email");
const btn = document.getElementById("btnSubmit");
const errorImg = document.getElementById("error");
const errorText = document.getElementById("errorText");

btn.addEventListener('click', () => {
    if(email.value != "elenaeslin@gmail.com") {
        errorImg.classList.add('active');
        errorText.classList.add('active');
    }
});