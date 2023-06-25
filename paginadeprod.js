
function avaliacao() {
    document.getElementById('popup').style.display = 'block';

    setTimeout(function () {
        document.getElementById('popup').style.display = 'none';
    }, 3000);
}

function carregar() {

    let item = JSON.parse(localStorage.getItem('clique'));
   
    let itensCadastrados = new Array();

    if (localStorage.hasOwnProperty("produtosCad")) {
        itensCadastrados = JSON.parse(localStorage.getItem("produtosCad"));

    } else {
        alert("Não há nenhum item cadastrado no sistema")
    }


        document.getElementById("nome_produto").innerHTML = itensCadastrados[item].nomeProduto;
        document.getElementById("descricao_produto").innerHTML = itensCadastrados[item].descricao;
        document.getElementById("anunciante").innerHTML = "Anunciante: " + itensCadastrados[item].nome;
        document.getElementById("cidade_anunciante").innerHTML = "Cidade: " + itensCadastrados[item].cidade;
        document.getElementById("bairro_anunciante").innerHTML = "Bairro: " + itensCadastrados[item].bairro;
        document.getElementById("contato_anunciante").innerHTML = "Contato: " + itensCadastrados[item].celular;
        document.getElementById("diaria").innerHTML = "Valor diária: R$" + itensCadastrados[item].valor + ",00";
        document.getElementById("imagem_anunciante").src = itensCadastrados[item].imagem;
   

}