function calculadora(){
    const operacao = Number(prompt("Qual operação deseja realizar: \n 1 - Adição(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Divisão inteira(%)\n 6 - Potencia(**)"));
    console.log(operacao);

        if(!operacao || operacao >= 7){
            alert("erro digite um valor valido!");
            calculadora();
         }else{
            let n1 = Number(prompt("insira o primeiro valor"))
            let n2 = Number(prompt("Insira o segundo valor"))
            let resultado;
                if(!n1 || !n2){
                    alert("erro parâmetros invalidos");
                    calculadora();
                }else{
                    function adicao(){
                        resultado = n1 + n2;
                        alert(`${n1} + ${n2} = ${resultado}`);
                        novaop();
                        }
            
                        function subtracao(){
                        resultado = n1 - n2;
                        alert(`${n1} - ${n2} = ${resultado}`);
                        novaop();
                        }
            
                        function multiplicacao(){
                            resultado = n1 * n2;
                            alert(`${n1} * ${n2} = ${resultado}`);
                            novaop();
                        }
            
            
                        function diviReal(){
                            resultado = n1 / n2;
                            alert(`${n1} / ${n2} = ${resultado}`);
                            novaop();
                        }
            
            
                        function diviInteira(){
                            resultado = n1 % n2;
                            alert(`O resto da divisão Inteira entre ${n1} e ${n2} é ${resultado}`);
                            novaop();
                        }
            
                        function potencia(){
                            resultado = n1 ** n2;
                            alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
                            novaop();
                        }
            
                        function novaop(){
                            let opcao = prompt("Deseja realizar outra operação?\n 1 - Sim\n 2 - Não");
                            if(opcao == 1){
                                calculadora();
                            }else if (opcao == 2){
                                alert("Até logo!!");
                            }else{
                                alert("digite uma opção valida");
                                novaop();
                            }
                        }
            
                        /*if (operacao == 1){
                            adicao();
                        }else if (operacao == 2){
                            subtracao();
                        }else if (operacao == 3){
                            multiplicacao();
                        }else if (operacao == 4){
                            diviReal();
                        }else if (operacao == 5){
                            diviInteira();
                        }else if (operacao == 6){
                            potencia();
                        }else{
                            console.log("algo deu errado")
                        }*/
                        switch(operacao){
                            case 1:
                                adicao();
                                break;
                             case 2:
                                subtracao();
                                break;
                            case 3:
                                multiplicacao();
                                break;
                             case 4: 
                                diviReal();
                                break;
                             case 5:
                                diviInteira();
                                break;
                             case 6:
                                potencia();
                                break;      
                        }
                }
         }
}

    
calculadora();

