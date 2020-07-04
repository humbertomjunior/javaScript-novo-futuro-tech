var nome = document.getElementById("campoNome");
var email = document.getElementById("campoEmail");
var mensagem = document.getElementById("campoMensagem");
var labelNome = document.getElementById("labelNome");
var labelEmail = document.getElementById("labelEmail");
var labelMensagem = document.getElementById("labelMensagem");
var informacoes = document.getElementById("informacoes");

function toggle(){
    if(informacoes.style.display == 'none'){
        informacoes.style.display = 'block';
    }else{
        informacoes.style.display = 'none';
    }
}


function clicado(){
    labelNome.innerText = '';
    labelEmail.innerText = '';
    labelMensagem.innerText = '';
    if(validarMensagem(nome, email, mensagem)){
        labelNome.innerText = nome.value;
        labelEmail.innerText = email.value;
        labelMensagem.innerText = mensagem.value;
        labelMensagem.style.color = 'black';
    } else {
        labelMensagem.innerText = ("Campo(s) incompleto(s).");
        labelMensagem.style.color = 'red';
    }
}

function validarMensagem(nome, email, mensagem){
    if ((nome.value !== '') && (email.value !== '') && (mensagem.value !== '')){
        return true;
    }else{
        return false;
    }
}
