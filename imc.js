function CalculaIMC() {
    let nome = String (document.getElementById('inome').value);
    let select = (document.getElementById('isexo'));
    let sexo = select.option;
    let idade = parseInt(document.getElementById('iidade').value);
    let altura = parseFloat(document.getElementById('ialtura').value);
    let peso = parseFloat(document.getElementById('ipeso').value);
    let resultado = '';
    let resultadoCalculo = parseFloat;

    resultadoCalculo = peso / (altura*altura);
    
    if (resultadoCalculo < 18.50) {
        resultado += nome + ' você está abaixo do peso, seu IMC é ' + resultadoCalculo.toFixed(2);
    }

    else if (resultadoCalculo >= 18.50 && resultadoCalculo <= 24.99) {
        resultado += nome + ' você está com o peso normal, seu IMC é ' + resultadoCalculo.toFixed(2);
    }

    else if (resultadoCalculo >= 25.50 && resultadoCalculo <= 29.99) {
        resultado += nome + ' Resultado do IMC é pré obesidade, seu IMC é ' + resultadoCalculo.toFixed(2);
    }

    else if (resultadoCalculo >= 30.00 && resultadoCalculo <= 34.99) {
        resultado += nome + ' Resultado do IMC é obesidade grau 1, seu IMC é ' + resultadoCalculo.toFixed(2);
    }

    else if (resultadoCalculo >= 35.00 && resultadoCalculo <= 39.99) {
        resultado += nome + ' Resultado do IMC é obesidade grau 2, seu IMC é ' + resultadoCalculo.toFixed(2);
    }

    else if (resultadoCalculo >= 40) {
        resultado += nome + ' Resultado do IMC é obesidade grau 3, seu IMC é ' + resultadoCalculo.toFixed(2);
    }

    document.getElementById('dresultado').innerHTML = resultado;
}


function DesabilitaExemplo() {
    document.getElementById('TextoExemplo').remove()
}


function DesabilitaExemplo1() {
    document.getElementById('TextoExemplo1').remove()
}