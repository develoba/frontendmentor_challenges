

let btn = document.querySelector(".btn");
let rates = document.getElementsByName("rate");
const result = document.querySelector("#rate-result");
const rateCard = document.querySelector("#rateCard");
const resultCard = document.querySelector("#resultCard");

console.log(rates);
console.log(btn);
console.log(result.innerHTML)

btn.addEventListener('click', () => {
    for(let i = 0; i < rates.length; i++) {
        if(rates[i].checked) {
            rateCard.classList.add('inactive');
            resultCard.classList.remove('inactive');
            result.innerHTML = rates[i].value;
        }
    }
});

