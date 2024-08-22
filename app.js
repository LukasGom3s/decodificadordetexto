const texto = document.querySelector(".campodetexto");
const mensagem = document.querySelector(".mensagem");
var hidden = document.querySelector('.hidden');
var hidden2 = document.querySelector('.hidden2');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function validarCaracteres(entrada) {
    const regex = /^[a-z0-9 .,!?'-]*$/;
    return regex.test(entrada);
}

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

function botaocriptografar() {

    if (texto.value != 0) {
        if (validarCaracteres(texto.value) == true) {
            hidden.style.display = 'none';
            hidden2.style.display = 'block';
            const textoCriptografado=criptografia(texto.value);
            mensagem.value=textoCriptografado;
            texto.value="";
        } else {
            document.getElementById("titulocampodesaida").innerHTML = "Caracteres não aceitas.";
            document.getElementById("paragrafocampodesaida").innerHTML = "Apenas letras minúsculas e sem acento são aceitas.";
            hidden.style.display = 'block';
            hidden2.style.display = 'none';
        }
    } else {
        hidden.style.display = 'block';
        hidden2.style.display = 'none';
    }
}


function botaodescriptografar() {
    if (texto.value != 0) {
        if (validarCaracteres(texto.value) == true) {
            hidden.style.display = 'none';
            hidden2.style.display = 'block';
            const textoDescriptografado=descriptografia(texto.value);
            mensagem.value=textoDescriptografado;
            texto.value="";
        } else {
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

function copiartexto(){
    navigator.clipboard.writeText(mensagem.value);
}