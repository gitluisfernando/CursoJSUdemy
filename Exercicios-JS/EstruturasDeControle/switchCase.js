const contaDinheiro = function (nota) {
    switch (nota) {
        case 2: console.log("Dois Reais")
            break
        case 5: console.log("Cinco Reais")
            break
        case 10: console.log("Dez Reais")
            break
        case 20: console.log("Vinte Reais")
            break
        case 50: console.log("Cinquenta Reais")
            break
        case 100: console.log("Cem Reais")
            break
        default: console.log("Nota inválida")
    }
}

contaDinheiro(5)
contaDinheiro(10)
contaDinheiro(100)
contaDinheiro(33)