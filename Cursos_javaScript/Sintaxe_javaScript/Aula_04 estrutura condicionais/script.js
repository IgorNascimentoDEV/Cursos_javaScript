//Estrutura de condição "IF" e "ELSE" e "ELSE IF"
//IF ternario faz a verificação em uma unica linha.
   /* var jogador1 = 0;
    var jogador2= 1;
    var placar; */

//Exemplo de If ternario
/*jogador1 != -1 && jogador2 != -1 ? console.log("começa o jogo") : console.log("invalido");

    if(jogador1 != -1){
        if(jogador1 > 2){
            console.log("o jogador 1 marcou um gol");
            placar = jogador1 > jogador2;
        }else if(jogador2 > jogador1){
            console.log("o jogador 2 esta vencendo");
            placar = jogador2 > jogador1;
        }else{
            console.log("Deu empate!!");
        }
    }else{
        console.log("Deu Errado kkk");
    }
*/
//O Switch/Case funciona como uma estrutura condicional tambem
    /*switch(placar){
        case placar = jogador1 > jogador2:
        console.log("O jogador 1 ganhou");
        break;
        case placar = jogador2 > jogador1:
            console.log("O jogador 2 ganhou");
    default:
        console.log("Ninguem ganhou");
    }
    */


// **********Estrutura de repetição********** //
    let array = ["valor1", "valor2", "valor3", "valor4", "valor5"]
    let object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3",}

//For funciona como uma repetição de instrução até a condição seja falsa
   /*for(let indice = 0; indice < array.length; indice++){
        console.log(indice);
    }*/


//For/in funciona como uma repetição a partir de uma propriedade
 //com array
   /* for (let i in array){
        console.log(i);
    }*/

 //com object
   /* for (i in object){
        console.log(i);
    }*/


//for/of funciona como uma repetição a partir de um valor
  //com array
    /*for(i of array){
        console.log(i);
    }*/

//while executa uma instrução enquanto determinada condição for verdadeira
    var a = 0;
    var b = 0;
    while(a < 10){
        a++
        console.log(a);
    }
// do while executa uma instrução ate que determinada condição seja falsa
    do{
        b++
        console.log(b);
    }while(b < 20)
