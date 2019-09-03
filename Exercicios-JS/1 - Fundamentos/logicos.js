function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //Só compra sorvete se um dos trabalhos der certo
    const comprarTv50 = trabalho1 && trabalho2 //Só compra Tv50 se os dois trabalhos derem certo
    const comprarTv32 = trabalho1 != trabalho2 //Se apenas 1 dos trabalhos der certo, compra Tv32
    const naoComprarNada = !comprarSorvete //Se nenhum trabalho der certo, não compra nada

    //Cria um objeto para apresentar todas as constantes no return
    return { comprarSorvete, comprarTv50, comprarTv32, naoComprarNada }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))