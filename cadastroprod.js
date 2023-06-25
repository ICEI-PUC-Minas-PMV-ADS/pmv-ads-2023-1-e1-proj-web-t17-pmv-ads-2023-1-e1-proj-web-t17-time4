var produtos = {
  data: [

    {
      "nome": 'Mariana',
      "nomeProduto": 'furadeira',
      "celular": 31978495635,
      "descricao": 'furadeira bosch em bom estado',
      "bairro": 'coração eucaristico',
      "cidade": 'Belo Horizonte',
      "valor": 35,
      "imagem": "https://i.postimg.cc/wBxJfPnD/furadeira-1.png"
    },
    {
      "nome": 'Eduardo',
      "nomeProduto": 'aparador de grama',
      "celular": 31987269263,
      "descricao": 'aparador de grama Tramontina muito novo',
      "bairro": 'centro',
      "cidade": 'Belo Horizonte',
      "valor": 40,
      "imagem": "https://i.postimg.cc/w3KTCyvS/aparador.png"
    },
    {

      "nome": 'Alice',
      "nomeProduto": 'secador',
      "celular": 31987269274,
      "descricao": ' secador taiff em bom estado, tem muita potência',
      "bairro": 'centro',
      "cidade": 'Belo Horizonte',
      "valor": 30,
      "imagem": "https://i.postimg.cc/KzzzBhws/secador.png"

    },
    {
      "nome": 'Rosana',
      "nomeProduto": 'Compressor Média Potência',
      "celular": 31987269274,
      "descricao": ' Compressor em bom estado, tem muita potência',
      "bairro": 'centro',
      "cidade": 'Belo Horizonte',
      "valor": 70,
      "imagem": "https://i.postimg.cc/1RJ561VZ/compressor.jpg"
    },
    {
      "nome": 'Elias',
      "nomeProduto": 'forno elétrico',
      "celular": 31987269274,
      "descricao": ' Forno excelente, estou alugando porque não uso',
      "bairro": 'Sagrada Família',
      "cidade": 'Belo Horizonte',
      "valor": 35,
      "imagem": "https://i.postimg.cc/PJrXc2cc/forno-eletrico.jpg"
    },
    {
      "nome": 'Adriano',
      "nomeProduto": 'airfryer',
      "celular": 31987269274,
      "descricao": ' airfryer muito conservada, estou alugando porque não me adaptei ao uso',
      "bairro": 'Cachoeirinha',
      "cidade": 'Belo Horizonte',
      "valor": 20,
      "imagem": "https://i.postimg.cc/CxWK1CBB/airfryer.jpg"
    },
    {
      "nome": 'Adrielle',
      "nomeProduto": 'teclado',
      "celular": 31987269274,
      "descricao": ' teclado Yamaha, foi usado apenas 4 vezes, minha filha não se adaptou ao instrumento, por isso alugo',
      "bairro": 'Floresta',
      "cidade": 'Belo Horizonte',
      "valor": 46,
      "imagem": "https://postimg.cc/BLV4cfBF"
    }

  ]
}



function Cadastrar() {
  // Função para cadastrar o produto
  let nomeProduto = document.getElementById("nome-produto").value;
  let descricaoProduto = document.getElementById("descricao-produto").value;
  let cidadeProduto = document.getElementById("cidade-produto").value;
  let celular = document.getElementById("number").value;
  let bairroProduto = document.getElementById("Bairro-produto").value;
  let valor = document.getElementById("valor").value;
  let imagem = document.getElementById("imagem-produto").value;
  // Criar um objeto com os dados do produto
  let novoProduto = {
    nomeProduto: nomeProduto,
    descricao: descricaoProduto,
    cidade: cidadeProduto,
    celular: celular,
    bairro: bairroProduto,
    valor: valor,
    imagem: imagem
  };
  // Adicionar o produto à lista de items

  produtos.data.push(novoProduto);

  let produtosCad = new Array();
  let nome;
  let listaUser = [];


  listaUser = JSON.parse(localStorage.getItem('userConectado'));


  nome = listaUser.nome;

  if (localStorage.hasOwnProperty("produtosCad")) {
    produtosCad = JSON.parse(localStorage.getItem("produtosCad"));
    produtosCad.push({
      nome: nome,
      nomeProduto: nomeProduto,
      descricao: descricaoProduto,
      cidade: cidadeProduto,
      celular: celular,
      bairro: bairroProduto,
      valor: valor,
      imagem: imagem
    })
  } else {
    produtosCad.push(

      
      {
        "nome": 'Mariana',
        "nomeProduto": 'furadeira',
        "celular": 31978495635,
        "descricao": 'furadeira bosch em bom estado',
        "bairro": 'coração eucaristico',
        "cidade": 'Belo Horizonte',
        "valor": 35,
        "imagem": "https://i.postimg.cc/wBxJfPnD/furadeira-1.png"
      },
      {
        "nome": 'Eduardo',
        "nomeProduto": 'aparador de grama',
        "celular": 31987269263,
        "descricao": 'aparador de grama Tramontina muito novo',
        "bairro": 'centro',
        "cidade": 'Belo Horizonte',
        "valor": 40,
        "imagem": "https://i.postimg.cc/w3KTCyvS/aparador.png"
      },
      {

        "nome": 'Alice',
        "nomeProduto": 'secador',
        "celular": 31987269274,
        "descricao": ' secador taiff em bom estado, tem muita potência',
        "bairro": 'centro',
        "cidade": 'Belo Horizonte',
        "valor": 30,
        "imagem": "https://i.postimg.cc/KzzzBhws/secador.png"
      },
      {
        "nome": 'Rosana',
        "nomeProduto": 'Compressor Média Potência',
        "celular": 31987269274,
        "descricao": ' Compressor em bom estado, tem muita potência',
        "bairro": 'centro',
        "cidade": 'Belo Horizonte',
        "valor": 70,
        "imagem": "https://i.postimg.cc/1RJ561VZ/compressor.jpg"
      },
      {
        "nome": 'Elias',
        "nomeProduto": 'forno elétrico',
        "celular": 31987269274,
        "descricao": ' Forno excelente, estou alugando porque não uso',
        "bairro": 'Sagrada Família',
        "cidade": 'Belo Horizonte',
        "valor": 35,
        "imagem": "https://i.postimg.cc/PJrXc2cc/forno-eletrico.jpg"
      },
      {
        "nome": 'Adriano',
        "nomeProduto": 'airfryer',
        "celular": 31987269274,
        "descricao": ' airfryer muito conservada, estou alugando porque não me adaptei ao uso',
        "bairro": 'Cachoeirinha',
        "cidade": 'Belo Horizonte',
        "valor": 20,
        "imagem": "https://i.postimg.cc/CxWK1CBB/airfryer.jpg"
      },
      {
        "nome": 'Adrielle',
        "nomeProduto": 'teclado',
        "celular": 31987269274,
        "descricao": ' teclado Yamaha, foi usado apenas 4 vezes, minha filha não se adaptou ao instrumento, por isso alugo',
        "bairro": 'Floresta',
        "cidade": 'Belo Horizonte',
        "valor": 46,
        "imagem": "https://postimg.cc/BLV4cfBF"
      },
      {
        nome: nome,
        nomeProduto: nomeProduto,
        descricao: descricaoProduto,
        cidade: cidadeProduto,
        celular: celular,
        bairro: bairroProduto,
        valor: valor,
        imagem: imagem
      },
    )
  }

  localStorage.setItem('produtosCad', JSON.stringify(produtosCad));

  // Redirecionar para outra página
  window.location.href = "home.html";
}
