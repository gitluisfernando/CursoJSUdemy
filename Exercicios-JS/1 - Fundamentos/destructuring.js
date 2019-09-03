const pessoa = {
    nome: "Bianca",
    idade: 24,
    endereco: {
        logradouro: "Rua da Represa",
        numero: 75
    }
}

//Tira os atributos de dentro do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)