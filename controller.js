    //  CRIA DUAS VARIAVEIS
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
    //  PRIMEIRO IF FEITO PARA NÃO DEIXAR OS CAMPOS VAZIOS E RETORNAR UMA MENSAGEM AVISANDOQUE NÃO FORAM PREENCHIDOS
 
    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }else{
        alert('Campos preenchidos com sucesso');
       
        window.location.href = 'cadastro.html';
    }
}
 
 


    //  FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES 
var dadosLista = [];
 
function salvarUser(){
        //  SEGUNDO IF FEITO PARA NÃO DEIXAR O CAMPO NOME DE USUÁRIO VAZIO
    let nomeUser = document.getElementById('nomeUser').value;
    if(nomeUser){
         
        //  O MÉTODO PUSH É UMA FUNÇÃO QUE PERMITE ADICIONAR UM ELEMENTO OU VÁRIOS AO FINAL DE UM ARRAY JÁ EXISTENTE
        dadosLista.push(nomeUser);
        //  EXISTE ESSENCIALMENTE PARA PERMITIR O ENVIO DE DADOS PARA A CONSOLA DE DEPUTAÇÃO DO NAVEGADOR.
        console.log(dadosLista);
        criarLista();
        document.getElementById('nomeUser').value = "";
    }
    else{
        alert("Favor informar o nome");
    }
}
    //  FUNÇÃO DE CRIAÇÃO DE LISTA
function criarLista(){

    //  VARIAVEL TABELA ESTA A GUARDAR O CABEÇALHO
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    //  CRIA LAÇO DE REPETIÇÃO FOR
    //  LENGTH AUMENTA O TAMANHO DA LISTA
    for(let i = 0; i <= (dadosLista.length -1); i++){
    //  TR CRIA LINHA NA TABELA
    //  TD CRIA COLUNA
    //  (+=) MANTÉM O QUE JA TEM E ADICIONA EM BAIXO
    tabela += "<tr><td>" + dadosLista[i] + "</td><td> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> </td></tr>"; // concatenar dados lista na posção i
    document.getElementById('tabela').innerHTML = tabela; // COLOCA CONTEÚDO DA PÁGINA JAVASCRIPT EM HTML
//  FUNÇÃO PARA EXCLUIR NOME DE LISTA
//  EXCLUIR UM ELEMENTO DA VARIÁVEL I
//  FUNÇÃO PARA EXCLUIR NOME DE LISTA
    }
}
function excluir(i){ // APAGA UM ELEMENTO DA POSIÇÃO I DE ARRAY
    dadosLista.splice((i - 1), 1); //   SLICE:EXTRAI UMA PARTE DE UMA STRING E A RETORNA COMO UMA NOVA STRING, SEM MODIFICAR A STRING ORIGINAL. 
    document.getElementById('tabela').deleteRow(i); //  DELETEROW = APAGAR LINHA
}
 
//  FUNÇÃO PARA EDITAR NOME DA LISTA
function editar(i){
    document.getElementById("nomeUser").value = dadosLista
    [(i - 1)];
    dadosLista.splice(dadosLista[(i -1)], 1);
}