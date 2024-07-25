function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert ('Favor preencher todos os campos');
    }else{
        //alert('Campos preenchidos com sucesso');
        window.location.href = 'cadastro.html';
    }
}

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    
    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById(      "nomeUser").value = "";

    }else{
        alert('Favor, informar um nome para cadastro');
    }
}