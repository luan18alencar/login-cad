function acessar(){
    // CRIA DUAS VARIAVEIS
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    // PRIMEIRO IF FEITO PARA NÃO DEIXAR OS CAMPOS VAZIOS E RETORNAR UMA MENSAGEM AVISANDOQUE NÃO FORAM PREENCHIDOS
    if(!loginEmail || !loginSenha){
        alert ('Favor preencher todos os campos');
    }else{
    //alert('Campos preenchidos com sucesso');
    //CONECTA O HTML AO JAVASCRIPT
        window.location.href = 'cadastro.html';
    }
}
    // FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES
    var dadosLista = [];
    // CRIA UMA FUNÇÃO PARA SALVAR USUÁRIO
    function salvarUser(){
    // CRIA UMA VARIÁVEL CHAMADA NOME DE USUÁRIO PARA SALVAR O NOME DE USUÁRIO
    let nomeUser = document.getElementById('nomeUser').value;
    // SEGUNDO IF FEITO PARA NÃO DEIXAR O CAMPO NOME DE USUÁRIO VAZIO 
    if(nomeUser){
    // O MÉTODO PUSH É UMA FUNÇÃO QUE PERMITE ADICIONAR UM ELEMENTO OU VÁRIOS AO FINAL DE UM ARRAY JÁ EXISTENTE
        dadosLista.push(nomeUser);
    // EXISTE ESSENCIALMENTE PARA PERMITIR O ENVIO DE DADOS PARA A CONSOLA DE DEPUTAÇÃO DO NAVEGADOR.
    
        console.log(dadosLista);
        document.getElementById("nomeUser").value = "";

    }else{
        alert('Favor, informar um nome para cadastro');
    }
}
    //  FUNÇÃO DE CRIAÇÃO DE LISTA
    function criaLista(){
    // VARIAVEL TABELA ESTA A GUARDAR O CABEÇALHO
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    // CRIA LAÇO DE REPETIÇÃO FOR
    // LENGTH AUMENTA O TAMANHO DA LISTA
    for(let i=0; i <= (dadosLista.length -1); i++){
    // TR CRIA LINHA NA TABELA
    // TD CRIA COLUNA
    // (+=) MANTÉM O QUE JA TEM E ADICIONA EM BAIXO
        tabela += "<tr><td>" + dadosLista[I] + "</td><td></tr><tr>";
        document.getElementById('tabela').innerHTML=
        tabela;
    }
}



//