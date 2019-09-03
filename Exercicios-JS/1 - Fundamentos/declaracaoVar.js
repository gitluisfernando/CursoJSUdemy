/*
* Uma variável declarada com var em JS pode ser acessada em qualquer bloco
* do código, menos se ela estiver dentro de uma função, aí ela será acessível
* apenas no escopo daquela função
* Deve-se evitar criar variáveis de escopo global pq se pode criar variáveis
* que já existam
*/

{
    {
        {
            var seraQueVai = "Será que vai?"
            console.log(seraQueVai)
        }
    }
}
console.log(seraQueVai)

function aquiNaoVai(){
    var escopoLocal = "Escopo Local"
    console.log(escopoLocal)
}

aquiNaoVai()
//console.log(escopoLocal)