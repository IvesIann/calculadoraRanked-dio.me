let saldoJogador = saldoPartidas(200, 30)
let nivelJogador = " "

function saldoPartidas(quantidadeVitoria, quantidadeDerrota){
    let winRate = quantidadeVitoria - quantidadeDerrota
    return winRate
}

switch(true){
    case saldoJogador <10:
        nivelJogador = "Ferro"
        console.log("O Herói tem o saldo total de : " + saldoJogador +  " vitorias e está no nível : " + nivelJogador)
    break

    case saldoJogador >11 && saldoJogador <=20:
        nivelJogador = "Bronze" 
        console.log("O Herói tem o saldo total de : " + saldoJogador +  " vitorias e está no nível : " + nivelJogador)
    break
    
    case saldoJogador >21 && saldoJogador <=50:
        nivelJogador = "Prata" 
        console.log("O Herói tem o saldo total de : " + saldoJogador +  " vitorias e está no nível : " + nivelJogador)
    break

    case saldoJogador >51 && saldoJogador <=80:
        nivelJogador = "Ouro" 
        console.log("O Herói tem o saldo total de : " + saldoJogador +  " vitorias e está no nível : " + nivelJogador)
    break

    case saldoJogador >81 && saldoJogador <=90:
        nivelJogador = "Diamante" 
        console.log("O Herói tem o saldo total de : " + saldoJogador +  " vitorias e está no nível : " + nivelJogador)
    break

    case saldoJogador >91 && saldoJogador <=100:
        nivelJogador = "Bronze" 
        console.log("O Herói tem o saldo total de : " + saldoJogador +  " vitorias e está no nível : " + nivelJogador)
    break

    case saldoJogador >=101:
        nivelJogador = "Imortal" 
        console.log("O Herói tem o saldo total de: " + saldoJogador +  " vitorias e está no nível : " + nivelJogador)
    break
}




