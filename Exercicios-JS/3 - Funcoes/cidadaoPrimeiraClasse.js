//Criar uma função literal
function funcao1() { }

//Armazenar função em uma variável
const funcao2 = function () { }

//Armazenar função em um array
const array = [function (a, b) { return a + b }, funcao1, funcao2]
console.log(array[0](1, 2))

//Armazenar função em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar função como parâmetro
function run(fun) {
    fun()
}

run(function() {console.log("Executando...")})