var nome = prompt("Digite seu nome: ");
var conversor = prompt("Olá " + nome + " o que deseja converter [1 - Moedas , 2 - Medidas , 3 - Temperatura] ? ");

if(conversor == "1"){
    var valor = prompt("Qual o valor que deseja converter ?");
    var moedaQueEsta = prompt("Em qual moeda está seu valor [1 - Real, 2 - Dolar , 3 - Euro , 4 - Libra ou 5 - Bitcoin] ? ")
    var moedaQueDeseja = prompt("Para qual moeda deseja converte [1 - Real, 2 - Dolar , 3 - Euro , 4 - Libra ou 5 - Bitcoin] ? ");
    
    var cotacaoDoDolar = 5.32;
    var cotacaoDoEuro = 5.56;
    var cotacaoDaLibra = 6.32;
    var cotacaoDoBitcoin = 117774.31;
    
    if (moedaQueEsta == "1"){
        if(moedaQueDeseja == "2"){
            var realEmDolar = valor / cotacaoDoDolar
            realEmDolar = realEmDolar.toFixed(2);

            alert(valor + " Reais são " + realEmDolar + " Dólares")
        }
        else if(moedaQueDeseja == "3"){
            var realEmEuro = valor / cotacaoDoEuro
            realEmEuro = realEmEuro.toFixed(2)

            alert(valor + " Reais são " + realEmEuro + " Euros")
        }
        else if(moedaQueDeseja == "4"){
            var realEmLibra = valor / cotacaoDaLibra
            realEmLibra = realEmLibra.toFixed(2)

            alert(valor + " Reais são " + realEmLibra + " Libras")
        }
        else if(moedaQueDeseja == "5"){ 
            var realEmBitcoin = valor / cotacaoDoBitcoin
            realEmBitcoin = realEmBitcoin.toFixed(5)

            alert(valor + " Reais são " + realEmBitcoin + " Bitcoins")
        }
    }

    else if (moedaQueEsta == "2"){
        if(moedaQueDeseja == "1"){
            var dolarEmReal = valor * cotacaoDoDolar
            dolarEmReal = dolarEmReal.toFixed(2)

            alert(valor + " Dólares são " + dolarEmReal + " Reais")
        }
        else if(moedaQueDeseja == "3"){
            var dolarEmEuro = (valor * cotacaoDoDolar) / cotacaoDoEuro
            dolarEmEuro = dolarEmEuro.toFixed(2)

            alert(valor + " Dólares são " + dolarEmEuro + " Euros")
        }
        else if(moedaQueDeseja == "4"){
            var dolarEmLibra = (valor * cotacaoDoDolar) / cotacaoDaLibra
            dolarEmLibra = dolarEmLibra.toFixed(2)

            alert(valor + " Dólares são " + dolarEmLibra + " Libras")
        }
        else if(moedaQueDeseja == "5"){
            var dolarEmBitcoin = (valor * cotacaoDoDolar) / cotacaoDoBitcoin
            dolarEmBitcoin = dolarEmBitcoin.toFixed(2)

            alert(valor + " Dólares são " + dolarEmBitcoin + " Bitcoin")
        }
    }

    else if (moedaQueEsta == "3"){
        if(moedaQueDeseja == "1"){
            var euroEmReal = valor * cotacaoDoEuro
            euroEmReal = euroEmReal.toFixed(2)

            alert(valor + " Euros são " + euroEmReal + " Reais")
        }  
        else if(moedaQueDeseja == "2"){
            var euroEmDolar = (valor * cotacaoDoEuro) / cotacaoDoDolar
            euroEmDolar = euroEmDolar.toFixed(2)

            alert(valor + " Euros são " + euroEmDolar + " Dólares")
        }
        else if(moedaQueDeseja == "4"){
            var euroEmLibra = (valor * cotacaoDoEuro) / cotacaoDaLibra
            euroEmLibra = euroEmLibra.toFixed(2)

            alert(valor + " Euros são " + euroEmLibra + " Libras")
        }
        else if(moedaQueDeseja == "5"){
            var euroEmBitcoin = (valor * cotacaoDoEuro) / cotacaoDoBitcoin
            euroEmBitcoin = euroEmBitcoin.toFixed(2)

            alert(valor + " Euros são " + euroEmBitcoin + " Bitcoins")
        }
    }

    else if (moedaQueEsta == "4"){
        if(moedaQueDeseja == "1"){
            var libraEmReal = valor * cotacaoDaLibra
            libraEmReal = libraEmReal.toFixed(2)

            alert(valor + " Libras são " + libraEmReal + " Reais")
        }  
        else if(moedaQueDeseja == "2"){
            var libraEmDolar = (valor * cotacaoDaLibra) / cotacaoDoDolar
            libraEmDolar = libraEmDolar.toFixed(2)

            alert(valor + " Libras são " + libraEmDolar + " Dólares")
        }
        else if(moedaQueDeseja == "3"){
            var libraEmEuro = (valor * cotacaoDaLibra) / cotacaoDoEuro
            libraEmEuro = libraEmEuro.toFixed(2)

            alert(valor + " Libras são " + libraEmEuro + " Euros")
        }
        else if(moedaQueDeseja == "5"){
            var libraEmBitcoin = (valor * cotacaoDaLibra) / cotacaoDoBitcoin
            libraEmBitcoin = libraEmBitcoin.toFixed(2)

            alert(valor + " Libras são " + libraEmBitcoin + " Bitcoins")
        }
    }
}   

else if(conversor == "2"){
    var anosLuz = 9460000000000 // km
    var velocidadeLuz = 299792  // km/s

    var nomeEstrelaA = prompt("Qual o nome da estrela de partida ?")
    var nomeEstrelaB = prompt("Qual o nome da estrela de chegada ?")
    var distancia = prompt("Qual a distância delas em Km ?")

    var kmParaAnoLuz = distancia * 10000000000000 / anosLuz
    kmParaAnoLuz = kmParaAnoLuz.toFixed(2)

    var tempoEmSegundos = distancia * 10000000000000 / velocidadeLuz
    tempoEmSegundos = tempoEmSegundos.toFixed(2)

    alert(nome + ', a distância de ' + distancia + ' trilhões de Km da estrela'+ nomeEstrelaA + ' a ' + nomeEstrelaB + ' equivale a ' + kmParaAnoLuz + ' Anos Luz. Cerca de ' + tempoEmSegundos + ' segundos')
}

else if(conversor == "3"){
    var temperatura = prompt("Qual a temperatura ?");
    var escalaQueEsta = prompt("Em qua escala está sua temperatura [1 - celsius, 2 - fahrenheit ou 3 - kelvin] ? ")
    var escalaQueDeseja = prompt("Em qual escala deseja descobrir [1 - celsius, 2 - fahrenheit ou 3 - kelvin] ? ");
    
    if (escalaQueEsta == "1"){
        if (escalaQueDeseja == "2"){
            var  tempEmfahrenheit =  ((9 * temperatura) + 160) / 5;
            tempEmfahrenheit = tempEmfahrenheit.toFixed(2);
    
            alert(tempEmfahrenheit + " F");
        }
        else if (escalaQueDeseja == "3"){
            var  tempEmKelvin =  parseInt(temperatura) + 273;
            tempEmKelvin = tempEmKelvin.toFixed(2);
    
            alert(tempEmKelvin + " K");
        }
    
    }
    else if (escalaQueEsta == "2"){
        if (escalaQueDeseja == "1"){
            var tempEmCelsius = ((5 * temperatura) - 160) / 9;
            tempEmCelsius = tempEmCelsius.toFixed(2);
    
            alert(tempEmCelsius + " ºC");
        }
        else if(escalaQueDeseja == "3"){
            var tempEmKelvin = ((5 * temperatura) + 2297) / 9;
            tempEmKelvin = tempEmKelvin.toFixed(2);
    
            alert(tempEmKelvin + " K")
        }
    }
    else if (escalaQueEsta == "3"){
        if(escalaQueDeseja == "1"){
            var tempEmCelsius = parseInt(temperatura) - 273;
            tempEmCelsius = tempEmCelsius.toFixed(2);
    
            alert(tempEmCelsius + " ºC");
        }  
        else if(escalaQueDeseja == "2"){
            var tempEmfahrenheit = ((9 * temperatura) - 2297) / 5;
            tempEmfahrenheit = tempEmfahrenheit.toFixed(2);
    
            alert(tempEmfahrenheit + " F");
        }
    }
}
else{
    alert("Conversor não disponível")
}
