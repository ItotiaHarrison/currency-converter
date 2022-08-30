const base = document.getElementById('icurrency').value
const input = document.querySelector('#currencies')
input.addEventListener('submit', function(event) {
    event.preventDefault()
    
})


function fetchCurrencies(){
    fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
    .then(response => response.json())
    .then(data => {
        const amount = document.getElementById('amount-input').value;
        const counterCurrency = document.getElementById('lcurrency').value;
        const exchangeRate = data.rates[counterCurrency];
    })
    .catch(error => console.log(error)) 
}





document.addEventListener('DOMContentLoaded', function(){
   fetchCurrencies();
})