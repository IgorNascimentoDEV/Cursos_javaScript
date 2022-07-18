function clicou(){
      document.getElementById("agredecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar");
};

function redirecionar(){
    window.open("https://www.dio.me/en/sign-in");
   // window.location.href("https://www.dio.me/en/sign-in");
};

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigador por passar o mouse";
    elemento.innerHTML = "Obrigador por passar o mouse";
    //alert("troca texto");
};

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada!!");
};

function change(elemento){
    console.log(elemento.value);

}

// **********Aula 04 Funções********** //


/*
function soma(n1, n2){
    return n1 + n2
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
*/

/*
function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
*/


//var idade = prompt("Qual é sua idade?");
//console.log(validaIdade(idade));

//alert(soma(9, 60));
//alert(setReplace("vai Argentina", "Argentina", "Brasil"));


// **********Aula 03 estrutura de repetição********** //


/*
var data = new Date;
alert(data.getDay());
alert(data.getHours());
alert(data.getMinutes());
*/

/*
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/


/*
var count = 0;
while(count <= 5){
    console.log(count);
    count = count + 1;
};
*/


/*
var idade = prompt("Qual a sua Idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de Idade");
};
*/

// **********Aula 02 array**********//


/*var frutas = [{nome:"uva", cor:"roxo"}, {nome:"macã", cor:"vermelho"}];
console.log(frutas);
alert(frutas[1].nome);*/


/*var fruta = {nome:"uva", cor:"roxo"};
console.log(fruta.cor);
alert(fruta.nome);*/


//var lista = ["macã", "perá", "banana"];
//lista.push("laranja");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));
//alert(lista[0]);



// **********Aula 01 variaveis********** //


//var nome = "Igor Nascimento";
//var idade = 21;    
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " Tem " + idade + " Anos ");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());