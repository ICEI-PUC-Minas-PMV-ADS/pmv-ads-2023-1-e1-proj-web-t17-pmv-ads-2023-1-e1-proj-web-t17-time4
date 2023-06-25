var dados = {
    data: [
        {
            "Nome": 'Mario Quintana',
            "Avaliacao": '5',
            "Cordialidade": 'foi cordial',
            "Pontualidade": 'foi pontual',
            "Honestidade": 'foi honesto',
            "Zeloso": 'foi zeloso',
            "Comentario": 'Gostei muito do atendimento, o Sergio foi muito solícito'
        },{
            "Nome": 'Sonia',
            "Avaliacao":'4',
            "Cordialidade": 'foi cordial',
            "Pontualidade": 'foi pontual',
            "Honestidade": 'foi honesto',
            "Zeloso": 'foi zeloso',
            "Comentario": 'O secador que aluguei estava em muito bom estado, recomendo a ACIG rent!'
        },{
            "Nome":'Fernanda',
            "Avaliacao":'4',
            "Cordialidade": 'não foi cordial',
            "Pontualidade": 'foi pontual',
            "Honestidade": 'foi honesto',
            "Zeloso": 'foi zeloso',
            "Comentario": 'Foi super rápida e prática a locação'
        }
    ]
}

function Avaliar(estrela)
{

    var url = window.location;
    url = url.toString()
    url = url.split("avaliacao_locador.html");
    url = url[0];

    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s6 = document.getElementById("s6").src;

    var avaliacao = 0;

    if(estrela == 5){
        if(s6 =="https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("s1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s4").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s6").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            avaliacao = 5;
        }else {
            document.getElementById("s1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s4").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s6").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 4;
        }
    }

    if(estrela ==  4){
        if(s4 == "https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("s1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s4").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s6").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 4;
        }else {
            document.getElementById("s1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s6").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 3;
        }
    }

    if(estrela == 3){
        if(s3 == "https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("s1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s6").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 3;
        }else {
            document.getElementById("s1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s6").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 2;
        }
    }

    if(estrela == 2){
        if(s2 == "https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("s1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s6").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 2;
        }else {
            document.getElementById("s1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s2").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s6").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 1;
        }
    }

    if(estrela == 1){
        if(s1 =="https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("s1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("s2").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s6").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 1;
        }else {
            document.getElementById("s1").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s2").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("s6").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 0;
        }
    }

   
   document.getElementById('rating').innerHTML = avaliacao;
   console.log(avaliacao);
}


function Enviar() {
     
    let checkbox_cordialidade = document.getElementById('checkbox_cordialidade')
    let checkbox_pontualidade = document.getElementById('checkbox_pontualidade')
    let checkbox_honestidade = document.getElementById('checkbox_honestidade')
    let checkbox_zeloso = document.getElementById('checkbox_zeloso')


    let avaliacao = document.getElementById("rating").value;
    let comentario = document.getElementById("comentario").value;
    let usuario = JSON.parse(localStorage.getItem('userConectado'));
    let nome = usuario.nome;


    if(checkbox_cordialidade.checked){
        checkbox_cordialidade = "foi cordial"
        console.log(checkbox_cordialidade)
    }else {
        checkbox_cordialidade = "não foi cordial"
        console.log(checkbox_cordialidade)
    }

    if(checkbox_pontualidade.checked){
        checkbox_pontualidade = "foi pontual"
        console.log(checkbox_pontualidade)
    }else {
        checkbox_pontualidade = "não foi pontual"
        console.log(checkbox_pontualidade)
    }
    if(checkbox_honestidade.checked){
        checkbox_honestidade = "foi honesto"
        console.log(checkbox_honestidade)
    }else {
        checkbox_honestidade = "não foi honesto"
        console.log(checkbox_honestidade)
    }
    if(checkbox_zeloso.checked){
        checkbox_zeloso = "foi zeloso com o equipamento"
        console.log(checkbox_zeloso)
    }else {
        checkbox_zeloso = "não foi zeloso com o equipamento"
        console.log(checkbox_zeloso)
    }

    let avaliacao_completa = {
        Nome: nome,
        cordialidade: checkbox_cordialidade,
        pontualidade: checkbox_pontualidade,
        honestidade: checkbox_honestidade,
        zeloso: checkbox_zeloso,
        avaliacao: avaliacao,
        Comentario: comentario
    };

    dados.data.push(avaliacao_completa);


    let novaAvaliacao = new Array();
    

    if (localStorage.hasOwnProperty("novaAvaliacao")) {
        novaAvaliacao = JSON.parse(localStorage.getItem("novaAvaliacao"));
        novaAvaliacao.push({
            Nome: nome,
            cordialidade: checkbox_cordialidade,
            pontualidade: checkbox_pontualidade,
            honestidade: checkbox_honestidade,
            zeloso: checkbox_zeloso,
            avaliacao: avaliacao,
            Comentario: comentario
        }) 

        window.location.href = 'home.html';
    }else{novaAvaliacao.push(
            
            {
                "Nome": 'Mario Quintana',
                "Avaliacao": '5',
                "Cordialidade": 'foi cordial',
                "Pontualidade": 'foi pontual',
                "Honestidade": 'foi honesto',
                "Zeloso": 'foi zeloso',
                "Comentario": 'Gostei muito do atendimento, o Sergio foi muito solícito'
            },{
                "Nome": 'Sonia',
                "Avaliacao":'4',
                "Cordialidade": 'foi cordial',
                "Pontualidade": 'foi pontual',
                "Honestidade": 'foi honesto',
                "Zeloso": 'foi zeloso',
                "Comentario": 'O secador que aluguei estava em muito bom estado, recomendo a ACIG rent!'
            },{
                "Nome":'Fernanda',
                "Avaliacao":'4',
                "Cordialidade": 'não foi cordial',
                "Pontualidade": 'foi pontual',
                "Honestidade": 'foi honesto',
                "Zeloso": 'foi zeloso',
                "Comentario": 'Foi super rápida e prática a locação'
            }, 
            {

                Nome: nome,
                cordialidade: checkbox_cordialidade,
                pontualidade: checkbox_pontualidade,
                honestidade: checkbox_honestidade,
                zeloso: checkbox_zeloso,
                avaliacao: avaliacao,
                Comentario: comentario
                })

                window.location.href = 'home.html';
        }

        localStorage.setItem('novaAvaliacao', JSON.stringify(novaAvaliacao));

        document.getElementById("comentario").value = "";
        document.getElementById("checkbox_cordialidade").checked = false;
        document.getElementById("checkbox_pontualidade").checked = false;
        document.getElementById("checkbox_honestidade").checked = false;
        document.getElementById("checkbox_zeloso").checked = false;
        document.getElementById("s1").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
        document.getElementById("s2").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png"; 
        document.getElementById("s3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
        document.getElementById("s4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
        document.getElementById("s5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
        

}

function Sair(){
    window.location = 'home.html'
}


