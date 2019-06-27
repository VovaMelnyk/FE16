let price = document.querySelector('#price');
let quantity = document.querySelector('#quantity');
let totalP = document.querySelector('.total');
let amount = document.querySelector('.amount');
let form = document.querySelector('.form');

function calc() {
    let total = price.value * quantity.value;
    totalP.textContent = total.toFixed(2) + 'грн';
    amount.textContent = quantity.value;
}
form.addEventListener('input', calc);
window.addEventListener('DOMContentLoaded', calc);