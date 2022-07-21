//Vetores e Arrays

//como declarar um array o array pode guarda varios dados de diversos tipos incluseve outros array
    let array = ["string", 1, true,["array2", 2], ["array3", 3]];
    //console.log(array);

//forEach executa uma função para cada indece do array
    //array.forEach(function(index, item){console.log(item, index)});


//Pusch adiciona um novo item no final do array
    //array.push("novo");


//pop remove item no final do array
    /*array.pop();
    console.log(array);*/


//shift remove item no inicio do array
    /*array.shift();
    console.log(array);*/


//Unshift adiciona um novo item no inicio do array
    /*array.unshift("novo inicio");
    console.log(array);*/


//indexOf retorna o indice de um valor
    //console.log(array.indexOf(true));


//splice remove ou substitui um item pelo indice
    /*array.splice(0, 3);
    console.log(array);*/


//slice retorna uma parte de um array existente
    /*var novoarray = array.slice(0, 3);
    console.log(novoarray);*/


//----------Objeto----------//
    let objeto = {
        string: "hello word",
        number: 1,
        boolean: true,
        array: ["array"],
        objectInterno:  {objectInterno: "Object interno"}
    };
    console.log(objeto);


//desestruração
    var string = objeto.string;
    console.log(string);