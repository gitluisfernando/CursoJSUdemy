/*
* Quando nenhum parâmetro é definido para a função, ainda assim é possível lhe atribuir valores aos parâmetros pelo arguments,
* que armazena internamente todos os parâmetros de uma função
*/

function soma(){
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 2, 5, 10))