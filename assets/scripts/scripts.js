/*
abaixo de 17 --> Muito abaixo do peso
Entre 17 e 18.49 --> Abaixo do peso
Entre 18.5 e 24.99 --> Peso normal
Entre 25 e 29.99 --> Acima do peso
*/

// peso / (altura * altura);

let imcQuebrado;
let imc;
let pesoIdeal;
let resultado = document.getElementById('resultado');

function calcular(event) {
    event.preventDefault();

    let peso = document.getElementById('peso').value.replace(',', '.');
    let altura = document.getElementById('altura').value.replace(',', '.');

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = '<p>Por favor, insira valores válidos para peso e altura</p>';
        return;
    }

    imcQuebrado = peso / (altura * altura);
    imc = imcQuebrado.toFixed(2);

    if (imc < 17) {
        pesoIdeal = ((altura * altura) * 18.5);
        resultado.innerHTML = '<p>Seu resultado foi: ' + imc + '</p> <p>Cuidado você está muito abaixo do peso!</p> <p>Seu peso ideal seria: ' + pesoIdeal.toFixed(2)  + 'kg</p>';
    } else if ((imc >= 17) && (imc <= 18.49)) {
        pesoIdeal = ((altura * altura) * 18.5);
        resultado.innerHTML = '<p>Seu resultado foi: ' + imc + '</p> <p>Você está abaixo do peso!</p> <p>Seu peso ideal seria: ' + pesoIdeal.toFixed(2)  + 'kg</p>';
    } else if ((imc > 18.49) && (imc <= 25)) {
        resultado.innerHTML = '<p>Seu resultado foi: ' + imc + '</p> <p>Você está no peso ideal!</p>';
    } else if ((imc > 25) && (imc <= 29.99)) {
        pesoIdeal = ((altura * altura) * 25);
        resultado.innerHTML = '<p>Seu resultado foi: ' + imc + '</p> <p>Você está acima do peso!</p> <p>Seu peso ideal seria: ' + pesoIdeal.toFixed(2)  + 'kg</p>';
    } else if (imc > 29.99) {
        pesoIdeal = ((altura * altura) * 25);
        resultado.innerHTML = '<p>Seu resultado foi: ' + imc + '</p> <p>Cuidado, obesidade!</p> <p>Seu peso ideal seria: ' + pesoIdeal.toFixed(2)  + 'kg</p>';
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}
