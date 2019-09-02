function tratarErro(erro){
    throw new Error("Erro!")
}

function gerarErro(obj){
    try {
        console.log("Olá!")
    } catch (e) { //Se der algum problema, trata o erro
        tratarErro(e)
    } finally { //Sempre vai imprimir, com ou sem erro
        console.log("Sempre imprime")
    }
}

gerarErro()