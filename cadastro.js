

var dados_inicial = {
    data: [

        {
            "id": 1,
            "nome": 'Mariana',
            "sobrenome": 'Alves',
            "email": 'mariana.alves@gmail.com',
            "celular": 31978495635,
            "senha": 'kosj5634',
            "estado": 'Rio de Janeiro',
            "cidade": 'Rio das Ostras'

        },
        {
            "id": 2,
            "nome": 'Antonio',
            "sobrenome": 'José dos Santos',
            "email": 'josesantos@gmail.com',
            "celular": 31985631245,
            "senha": 'kosj14798',
            "estado": 'Ceará',
            "cidade": 'Sobral'
        },
        {
            "id": 3,
            "nome": 'Thiago',
            "sobrenome": 'Santos',
            "email": 'thiago.santos@gmail.com',
            "celular": 31995631472,
            "senha": 'sdtf1245',
            "estado": 'São Paulo',
            "cidade": 'Santo André'
        },
        {
            "id": 4,
            "nome": 'Bárbara',
            "sobrenome": 'Brescia',
            "email": 'barbara.brescia@gmail.com',
            "celular": 31975842635,
            "senha": 'dsa8549673',
            "estado": 'Minas Gerais',
            "cidade": 'Belo Horizonte'

        },
        {
            "id": 5,
            "nome": 'Lucio',
            "sobrenome": 'Matrak',
            "email": 'lucio.matrak@gmail.com',
            "celular": 31985764928,
            "senha": 'grs7542685',
            "estado": 'Minas Gerais',
            "cidade": 'Betim'

        }
    ]
}




function Cadastrar() {

    let campoNome = document.getElementById("firstname").value;
    let campoSobrenome = document.getElementById("lastname").value;
    let campoTelefone = document.getElementById("number").value;
    let campoEmail = document.getElementById("email").value;
    let campoEstado = document.getElementById("estados_dropdown").value;
    let campoCidade = document.getElementById("city").value;
    let campoSenha = document.getElementById("password").value;

    let contato = {
        nome: campoNome,
        sobrenome: campoSobrenome,
        telefone: campoTelefone,
        email: campoEmail,
        estado: campoEstado,
        cidade: campoCidade,
        senha: campoSenha
    };

    let novoId = 1;

    if (dados_inicial.data.length != 0) {
        // novoId = dados_inicial.data[dados_inicial.data.length - 1].id + 1;
        novoId = dados_inicial.data.length + 1;
        console.log(novoId);
    }


    let novoContato = {
        usuario: [
            {
                id: novoId,
                nome: contato.nome,
                sobrenome: contato.sobrenome,
                email: contato.email,
                telefone: contato.telefone,
                estado: contato.estado,
                cidade: contato.cidade,
                senha: contato.senha
            }
        ]
    };

    dados_inicial.data.push(novoContato);

    let userlogado = new Array();


    if (localStorage.hasOwnProperty("userlogado")) {
        userlogado = JSON.parse(localStorage.getItem("userlogado"));
        userlogado.push({
            id: novoId,
            nome: contato.nome,
            sobrenome: contato.sobrenome,
            email: contato.email,
            telefone: contato.telefone,
            estado: contato.estado,
            cidade: contato.cidade,
            senha: contato.senha
        })
    }else{
        userlogado.push({
            id: novoId,
            nome: contato.nome,
            sobrenome: contato.sobrenome,
            email: contato.email,
            telefone: contato.telefone,
            estado: contato.estado,
            cidade: contato.cidade,
            senha: contato.senha
        },
    
        {
            "id": 1,
            "nome": 'Mariana',
            "sobrenome": 'Alves',
            "email": 'mariana.alves@gmail.com',
            "celular": 31978495635,
            "senha": 'kosj5634',
            "estado": 'Rio de Janeiro',
            "cidade": 'Rio das Ostras'
    
        },
        {
            "id": 2,
            "nome": 'Antonio',
            "sobrenome": 'José dos Santos',
            "email": 'josesantos@gmail.com',
            "celular": 31985631245,
            "senha": 'kosj14798',
            "estado": 'Ceará',
            "cidade": 'Sobral'
        },
        {
            "id": 3,
            "nome": 'Thiago',
            "sobrenome": 'Santos',
            "email": 'thiago.santos@gmail.com',
            "celular": 31995631472,
            "senha": 'sdtf1245',
            "estado": 'São Paulo',
            "cidade": 'Santo André'
        },
        {
            "id": 4,
            "nome": 'Bárbara',
            "sobrenome": 'Brescia',
            "email": 'barbara.brescia@gmail.com',
            "celular": 31975842635,
            "senha": 'dsa8549673',
            "estado": 'Minas Gerais',
            "cidade": 'Belo Horizonte'
    
        },
        {
            "id": 5,
            "nome": 'Lucio',
            "sobrenome": 'Matrak',
            "email": 'lucio.matrak@gmail.com',
            "celular": 31985764928,
            "senha": 'grs7542685',
            "estado": 'Minas Gerais',
            "cidade": 'Betim'
    
        })
    }



    localStorage.setItem('userlogado', JSON.stringify(userlogado));



    document.getElementById("firstname").innerHTML = "";
    document.getElementById("lastname").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("number").innerHTML = "";
    document.getElementById("password").innerHTML = "";
    document.getElementById("estados_dropdown").innerHTML = "";
    document.getElementById("city").innerHTML = "";

}

