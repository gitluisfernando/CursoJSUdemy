const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])//undefined

valores[4] = 10//Atribui 10 a posição 4 da array e agora imprime normalmente
console.log(valores[4])

console.log(valores.length)//Tamanho da Array

valores.push(true, "Eita", 500, null, "Baita")//Insere valores na array
console.log(valores)

console.log(valores.pop())//Exclui o último elemento da array
delete valores[0]//Exclui o elemento da posição 0 da array
console.log(valores)

console.log(typeof valores)//Array é do tipo objeto