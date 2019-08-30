const saudacao = "Olá!"

//Existem duas constantes saudacao, mas uma delas está no contexto da function
function saudar() {
    const saudacao = "Opa!"
    return saudacao
}

//Tem dois nomes dentro do contexto, mas existem dois contextos(blocos) dentro do objeto
const cliente = {
    nome: "Luis",
    idade: 29,
    endereco: {
        nome: "Casa",
        rua: "Rua da Represa",
        numero: 75
    }
}

console.log(saudacao)
console.log(saudar())
console.log(cliente)