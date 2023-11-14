function focus()
{
    input.focus();
}

function limpa()
{
    input.value = ("");
}

function criptografar()
{                 
    var txt = input.value;

    var img = document.getElementById("image").style.display = ("none");
    var principal = document.getElementById("msg__principal").style.display = ("none");
    var paragrafo = document.getElementById("msg__paragrafo").style.display = ("none");
    var btncopiar = document.getElementById("copia").style.display = ("block");
    var resposta = document.getElementById("teste").style.display = ("block");
    var texto = document.getElementById("teste").textContent = txt;

    var str = texto.replace(/a([^a]*)/gm,  "ai$1").replace(/e([^e]*)/gm,  "enter$1")
    .replace(/i([^]*)/gm,  "imes$1").replace(/o([^o]*)/gm,  "ober$1")
    .replace(/u([^u]*)/gm,  "ufat$1");

    var texto = document.getElementById("teste").textContent = str;

    focus();
    limpa();
}

function descriptografar()
{
    var txt = input.value;
                    
    var texto = document.getElementById("teste").textContent = txt;

    var str = texto.replace(/ai([^ai]*)/gm, "a$1").replace(/enter([^enter]*)/gm, "e$1")
    .replace(/imes([^]*)/gm, "i$1").replace(/ober([^ober]*)/gm, "o$1")
    .replace(/ufat([^ufat]*)/gm, "u$1");

    var principal = document.getElementById("msg__principal").style.display = ("none");
    var resposta = document.getElementById("teste").style.display = ("block");
    var texto = document.getElementById("teste").textContent = str;

    focus();
    limpa();
}

function copiar()
{
    var texto = document.getElementById("teste").innerHTML;
    navigator.clipboard.writeText(texto);
    var resposta = document.getElementById("teste").style.display = ("none");
    var principal = document.getElementById("msg__principal").style.display = ("block");
    input.value = texto;

    focus();
}

var input = document.querySelector("input");
focus();

var button = document.querySelector("button1");
button.onclick = criptografar;

var button = document.querySelector("button2");
button.onclick = descriptografar;

var button = document.querySelector("button3");
button.onclick = copiar;