function carregar_produtos(){

    let produtosCadastrados = new Array();

    let avaliacoes = new Array();

    let listaUser = [];

    listaUser = JSON.parse(localStorage.getItem('userConectado'))

    
    let nome_cliente ;    

    nome_cliente = listaUser.nome;

    if(nome_cliente != ""){

        alert("Olá "+ nome_cliente + " seja bem-vindo a ACIG Rent!");

    }

    if (localStorage.hasOwnProperty("produtosCad")) {

     produtosCadastrados = JSON.parse(localStorage.getItem("produtosCad"));
        
    }
    console.log(produtosCadastrados)


for(i=0; i<produtosCadastrados.length;i++){

    document.getElementById("produto_nome_"+(i+1)).innerHTML = produtosCadastrados[i].nomeProduto;
    document.getElementById("valor_diaria_"+(i+1)).innerHTML = produtosCadastrados[i].valor + " R$ dia";

}
 
let j = produtosCadastrados.length;

    document.getElementById("produto_nome_recente4").innerHTML = produtosCadastrados[j-1].nomeProduto;
    document.getElementById("valor_diaria_recente4").innerHTML = produtosCadastrados[j-1].valor + " R$ dia";
    document.getElementById("produto_nome_recente3").innerHTML = produtosCadastrados[j-2].nomeProduto;
    document.getElementById("valor_diaria_recente3").innerHTML = produtosCadastrados[j-2].valor + " R$ dia";
    document.getElementById("produto_nome_recente2").innerHTML = produtosCadastrados[j-3].nomeProduto;
    document.getElementById("valor_diaria_recente2").innerHTML = produtosCadastrados[j-3].valor + " R$ dia";
    document.getElementById("produto_nome_recente1").innerHTML = produtosCadastrados[j-4].nomeProduto;
    document.getElementById("valor_diaria_recente1").innerHTML = produtosCadastrados[j-4].valor + " R$ dia";



    
    if (localStorage.hasOwnProperty("novaAvaliacao")) {

        avaliacoes = JSON.parse(localStorage.getItem("novaAvaliacao"));
           
       }

       for(k=0; k<avaliacoes.length;k++){

        document.getElementById("anunciante"+(k+1)).innerHTML= avaliacoes[k].Nome;
        document.getElementById("avaliacao-an"+(k+1)).innerHTML= "Avaliação: " + avaliacoes[k].Avaliacao;
        document.getElementById("comentarioan"+(k+1)).innerHTML = avaliacoes[k].Comentario;
    }


}
function produto(item){
    
    var clique = item;

    localStorage.setItem("clique", clique);

    window.location = 'paginaprodindv.html';

    localStorage.setItem("indice", "");
}

function anunciar(){

    let listaUser = [];

    listaUser = JSON.parse(localStorage.getItem('userConectado'));

    let usuario_conectado ;    

    usuario_conectado = listaUser.nome;

    if(usuario_conectado != ""){

            window.location.href = 'NovoCadastroProd.html';

    }else{

        alert("Para anunciar, você deve estar logado!");

    }

}

