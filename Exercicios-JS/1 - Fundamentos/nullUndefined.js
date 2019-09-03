let valor //Não inicializada - Undefined
console.log(valor)

valor = null //Ausência de valor - Null
console.log(valor)

const produto = {}
console.log(produto.preco) //Undefined

produto.preco = undefined //Evitar utilizar
console.log(produto)

produto.preco = null //Sem preço
console.log(produto)