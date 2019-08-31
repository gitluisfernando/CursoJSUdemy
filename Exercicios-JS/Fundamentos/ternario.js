/*
* Operador ternário atribui para a função nota se a nota for maior ou igual a 7 é aprovado e se for menor, é reprovado. Melhor usar o IF, apenas um exemplo
*/
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"

console.log(resultado(7.1))
console.log(resultado(6.5))