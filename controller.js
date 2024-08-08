function acessar(){
    // CRIA DUAS VARIAVEIS
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    // Primeiro if feito para não deixar os campos vazios e retornar uma mensagem avisando que não foram preenchidos
    if(!loginEmail || !loginSenha){
        alert ('Favor preencher todos os campos');
    }else{
    //alert('Campos preenchidos com sucesso');
        window.location.href = 'cadastro.html';
    }
}
    // FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES
    var dadosLista = [];
    //
    function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    
    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById("nomeUser").value = "";

    }else{
        alert('Favor, informar um nome para cadastro');
    }
}
    //  FUNÇÃO DE CRIAÇÃO DE LISTA
    function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i=0; i <= (dadosLista.length -1); i++){

    }
}