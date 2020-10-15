let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')
let resultado = document.querySelector('.resultado');


function calcularIMC(peso, altura){
    return peso / (altura * altura)
}

function limparFormulario(){
    peso.value = ''
    altura.value = ''
    peso.focus()
}

document.querySelector('#btnCalcularIMC').addEventListener('click', (event) => {
    event.preventDefault()
    let imc = parseFloat(calcularIMC(peso.value, altura.value).toFixed(2))
    resultado.innerHTML = '<h3 class="txtResultado">Seu IMC é: ' + imc.toString() + '<h3>'
    let tabela = document.querySelector("table")
    tabela.classList.remove("invisivel")
    let row = ""
    if (imc < 18.5) {
        row = "magreza"
    } else if (imc >= 18.5 && imc <= 24.9) {
        row = "normal"
    } else if (imc >= 18.5 && imc <= 24.9) {
        row = "sobrepeso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        row = "obesidade"
    } else {
        row = "obesidadeGrave"
    }
    document.getElementById(row).classList.add("combinaResultado")
    limparFormulario()
})
