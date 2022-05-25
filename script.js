'use strict'

const display = document.getElementById("displayPrincipal")
const displaySeg = document.getElementById('displaySeg')
const numero = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=Opera]')
const igual = document.getElementById('igual')

const simbolo = document.getElementById('opera')
const segNum = document.getElementById('segNum')

const limpa = document.getElementById('limparTudo')
const limpaAtual = document.getElementById('limparAtual')
const delet = document.getElementById('delet')
const ponto = document.getElementById('ponto')
const sinal = document.getElementById('mais/menos')


const atualizarDisplay = (texto) => {
    display.textContent += texto;

}

const inserirNum = (evento) => {
    atualizarDisplay(evento.target.textContent);
    /* console.log(evento.target.textContent) */

}

const inserirOperacao = (operacao) => {
    segNum.textContent = ''
    var opera = operacao.target.textContent
    var lastNum = ''

    let valor = 0


    if (opera == 'X') {
        opera = '*'
    }
    if (opera == '÷') {
        opera = '/'
    }

    var numeroDisplay = display.textContent;
    display.textContent = ''
    displaySeg.textContent = numeroDisplay
    simbolo.textContent = opera

}


const realizarOperacao = () => {
    var valor = 0
    if (simbolo.textContent == '/') {
        valor = displaySeg.textContent / display.textContent
    }
    if (simbolo.textContent == '*') {
        valor = displaySeg.textContent * display.textContent
    }
    if (simbolo.textContent == '+') {
        valor = Number(displaySeg.textContent) + Number(display.textContent)
    }
    if (simbolo.textContent == '-') {
        valor = displaySeg.textContent - display.textContent
    }
    segNum.textContent = display.textContent
    if (simbolo.textContent == '/') {
        if ((displaySeg.textContent % display.textContent) == 0) {
        display.textContent = valor
        }
        else {
            display.textContent = valor.toFixed(4)
        }
}
    else {
        display.textContent = valor
    }
}

const limpaTudo = () => {
    display.textContent = ''
    displaySeg.textContent = ''
    simbolo.textContent = ''
    segNum.textContent = ''
}
const limpaNum = () => {
    display.textContent = ''
}

const deletar = () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1)
}

const colocarPonto = () => {
    if(display.textContent.includes('.') == false){
        display.textContent += '.'
    }
}

const trocaSinal = () => {
    display.textContent *= -1
}

igual.addEventListener('click', realizarOperacao)
numero.forEach(numero =>
    numero.addEventListener('click', inserirNum))
operadores.forEach(operador => operador.addEventListener('click', inserirOperacao))
limpa.addEventListener('click', limpaTudo)
limpaAtual.addEventListener('click', limpaNum)
delet.addEventListener('click', deletar)
ponto.addEventListener('click', colocarPonto)
sinal.addEventListener('click', trocaSinal)