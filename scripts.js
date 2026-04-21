const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert'); //valor em real
    const currencyValueConverted = document.querySelector('.currency-value'); //outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.2;
    const euroToday = 6.2;

    if (currencySelect.value == 'dolar') { //se o valor selecionado for dolar, faça essa conversão
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == 'euro') { //se for euro, faça essa conversão
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);
}

function ChangeCurrency() {
    const currencyName = document.getElementById('currency-name'); //adicionamos a # para selecionar o id do elemento
    const currencyImage = document.querySelector('.currency-img'); //selecionamos a imagem para trocar a bandeira de acordo com a moeda selecionada

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano';
        currencyImage.src = './assets/logo-EUA.png';
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImage.src = './assets/logo-Euro.png';
    }

    convertValues()
}







currencySelect.addEventListener('change', ChangeCurrency)
convertButton.addEventListener('click', convertValues);


/* 
innerHTML é uma propriedade que permite acessar ou modificar o conteúdo HTML de um elemento.

Intl.NumberFormat é um objeto global em JavaScript que fornece uma maneira de formatar números de acordo com as convenções de um idioma específico. Ele é usado para formatar números como moeda, porcentagem, ou simplesmente para exibir números com separadores de milhares e casas decimais de acordo com as regras do idioma escolhido.

*/