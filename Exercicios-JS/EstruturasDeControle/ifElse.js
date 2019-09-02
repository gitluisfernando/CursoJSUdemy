const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log("Aprovado com nota " + nota)
    } else {
        console.log("Reprovado com nota " + nota)
    }
}

imprimirResultado(7.5)
imprimirResultado(2.5)

//Tomar cuidado pois JS é fracamente tipado. Ao invés de causar erro a seguinte situação, ela cai no else:
imprimirResultado("Eita!")