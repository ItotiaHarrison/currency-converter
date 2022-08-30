const base = document.getElementById('icurrency').value
const input = document.querySelector('#currencies')


function fetchCurrencies() {
    input.addEventListener('submit', function (event) {
        event.preventDefault()


        fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
            .then(response => response.json())
            .then(data => {
                const amount = document.getElementById('amount-input').value;
                const counterCurrency = document.getElementById('lcurrency').value;
                const exchangeRate = data.rates[counterCurrency];
                function convert() {
                    return amount * exchangeRate
                }

                document.querySelector('.result').innerHTML = `${amount} ${base.toUpperCase()} equal to  ${convert().toFixed(2)} ${counterCurrency}`;

            })
            .catch(error => console.log(error))
    });
}




document.addEventListener('DOMContentLoaded', function () {
    fetchCurrencies();
});