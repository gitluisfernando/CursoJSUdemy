function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com nota " + nota)
    }
}

soBoaNoticia(8.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log("É verdade... " + valor)
    }
}

//São elementos verdadeiros ou falsos para boolean
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo("Luis")