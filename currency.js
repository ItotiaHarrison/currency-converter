const base = document.getElementById('icurrency')
const input = document.querySelector('#currencies')
input.addEventListener('submit', function(event) {
    event.preventDefault()
    
})


function fetchCurrencies(){
    fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
    .then(response => response.json())
    .then()
}





document.addEventListener('DOMContentLoaded', function(){
   fetchCurrencies();
})