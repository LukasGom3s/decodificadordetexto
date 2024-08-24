const texto = document.querySelector(".campodetexto"); /*Variavel para armazenar o texto inserido pelo usuário*/
const mensagem = document.querySelector(".mensagem");  /*Variavel para armazenar o texto de saída criptografado/descriptografado*/
var hidden = document.querySelector('.hidden');
var hidden2 = document.querySelector('.hidden2');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

/*Função que analisa se o texto tem os tiops caracteres aceitas----*/
function validarCaracteres(entrada) {
    const regex = /^[a-z0-9 .,!?'-]*$/;
    return regex.test(entrada);
}
/*-----------------------------------------------------------------*/

/*Função para criptografar o texto inserido----*/
function criptografia(string){
    let matrizCriptografia = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    string=string.toLowerCase();

    for(let i =0; i<matrizCriptografia.length; i++)
    {
        if(string.includes(matrizCriptografia[i][0]))
        {
            string = string.replaceAll(matrizCriptografia[i][0],matrizCriptografia[i][1]);
        }
    }
return string;
}
/*---------------------------------------------*/

/*Função para descriptografar o texto inserido */
function descriptografia(string){
    let matrizCriptografia = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    string=string.toLowerCase();

    for(let i =0; i<matrizCriptografia.length; i++)
    {
        if(string.includes(matrizCriptografia[i][1]))
        {
            string = string.replaceAll(matrizCriptografia[i][1],matrizCriptografia[i][0]);
        }
    }
return string;
}
/*---------------------------------------------*/

/*Função chamada pelo botão criptografar-------*/
function botaocriptografar() {
    if (texto.value != 0) { /*Primeiro vê se o usuário inseriu algum texto*/
        if (validarCaracteres(texto.value) == true) { /*Chama a função que analisa as caracteres, se forem caracteres aceitas realiza a criptografia*/
            hidden.style.display = 'none';
            hidden2.style.display = 'block';
            const textoCriptografado=criptografia(texto.value);
            mensagem.value=textoCriptografado;
            texto.value="";
        } else { /*Se as caracteres não forem aceitas, indica ao usuário pelo campo de saída.*/
            document.getElementById("titulocampodesaida").innerHTML = "Caracteres não aceitas.";
            document.getElementById("paragrafocampodesaida").innerHTML = "Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.";
            hidden.style.display = 'block';
            hidden2.style.display = 'none';
        }
    }
     else 
    { 
        hidden.style.display = 'block';
        hidden2.style.display = 'none';
    }
}
/*---------------------------------------------*/

/*Função chamada pelo botão descriptografar----*/
function botaodescriptografar() {
    if (texto.value != 0) { /*Primeiro vê se o usuário inseriu algum texto*/
        if (validarCaracteres(texto.value) == true) { /*Chama a função que analisa as caracteres, se forem caracteres aceitas realiza a descriptografia*/
            hidden.style.display = 'none';
            hidden2.style.display = 'block';
            const textoDescriptografado=descriptografia(texto.value);
            mensagem.value=textoDescriptografado;
            texto.value="";
        } else { /*Se as caracteres não forem aceitas, indica ao usuário pelo campo de saída.*/
            document.getElementById("titulocampodesaida").innerHTML = "Caracteres não aceitas.";
            document.getElementById("paragrafocampodesaida").innerHTML = "Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.";
            hidden.style.display = 'block';
            hidden2.style.display = 'none';
        }
    } 
    else 
    {
        hidden.style.display = 'block';
        hidden2.style.display = 'none';
    }
}
/*---------------------------------------------*/

/*Função para copiar o texto no campo de saída-*/
function copiartexto(){
    navigator.clipboard.writeText(mensagem.value);
}
/*---------------------------------------------*/