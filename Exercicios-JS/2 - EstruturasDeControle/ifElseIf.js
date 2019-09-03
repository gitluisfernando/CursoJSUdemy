const imprimirResultado = function (nota) {
    if (nota >= 9 && nota <= 10) {
        console.log("Ótimo. Nota " + nota)
    } else if (nota >= 7 && nota < 9) {
        console.log("Bom. Nota " + nota)
    } else if (nota < 7) {
        console.log("Melhorar. Nota " + nota)
    } else {
        console.log("Nota Inválida")
    }
}

imprimirResultado(7.5)
imprimirResultado(2.1)
imprimirResultado(9)
imprimirResultado(14)

//Outra alternativa

Number.prototype.entre = function (menor, maior) {
    return this >= menor && this <= maior
}

const imprimeResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log("Ótimo. Nota " + nota)
    } else if (nota.entre(7, 8.99)) {
        console.log("Bom. Nota " + nota)
    } else if (nota.entre(0, 6.99)) {
        console.log("Melhorar. Nota " + nota)
    } else {
        console.log("Nota Inválida")
    }
}

imprimeResultado(7)
imprimeResultado(4.4)
imprimeResultado(10)
imprimeResultado(100)