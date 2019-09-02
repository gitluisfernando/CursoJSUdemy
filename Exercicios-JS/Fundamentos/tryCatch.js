function tratarErro(erro){
    throw new Error("Erro!")
}

function gerarErro(obj){
    try {
        console.log("Olá!")
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log("Sempre imprime")
    }
}

gerarErro()