function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`);
    } else {
        return area;
    }
}

console.log(area(2, 2))//Calcula e exibe normalmente
console.log(area(2))//NaN
console.log(area())//NaN
console.log(area(1, 2, 17, 22, 44))//Ignora depois do segundo parâmetros e calcula com os dois primeiros
console.log(area(5, 5))//Acima do permitido