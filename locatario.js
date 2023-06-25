var dados = {
    data: [
        {
            "Nome": 'Mario Quintana',
            "Avaliacao": 'Gostei muito do atendimento, o Sergio foi muito solícito'
        },{
            "Nome": 'Sonia',
            "Avaliacao":'O secador que aluguei estava em muito bom estado, recomendo a ACIG rent!'
        },{
            "Nome":'Fernanda',
            "Avaliacao":'Foi super rápida e prática a locação'
        }
    ]
}

function Avaliar2(estrela)
{

    var url = window.location;
    url = url.toString()
    url = url.split("avaliacao_locatario.html");
    url = url[0];

    var r1 = document.getElementById("r1").src;
    var r2 = document.getElementById("r2").src;
    var r3 = document.getElementById("r3").src;
    var r4 = document.getElementById("r4").src;
    var r5 = document.getElementById("r5").src;

    var avaliacao = 0;

    if(estrela == 5){
        if(r5 =="https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("r1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r4").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r5").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            avaliacao = 5;
        }else {
            document.getElementById("r1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r4").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 4;
        }
    }

    if(estrela ==  4){
        if(r4 == "https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("r1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r4").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 4;
        }else {
            document.getElementById("r1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 3;
        }
    }

    if(estrela == 3){
        if(r3 == "https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("r1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r3").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 3;
        }else {
            document.getElementById("r1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 2;
        }
    }

    if(estrela == 2){
        if(r2 == "https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("r1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r2").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 2;
        }else {
            document.getElementById("r1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r2").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 1;
        }
    }

    if(estrela == 1){
        if(r1 =="https://i.postimg.cc/vm8Mmmn7/star-white.png"){
            document.getElementById("r1").src = "https://i.postimg.cc/gJB7mzy0/star-yellow.png";
            document.getElementById("r2").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 1;
        }else {
            document.getElementById("r1").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r2").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
            avaliacao = 0;
        }
    }

   
   document.getElementById('rating2').innerHTML = avaliacao;
   console.log(avaliacao);
}


function Enviar2() {
 

    let checkbox_cordialidade2 = document.getElementById('checkbox_cordialidade2')
    let checkbox_pontualidade2 = document.getElementById('checkbox_pontualidade2')
    let checkbox_honestidade2 = document.getElementById('checkbox_honestidade2')
    let checkbox_conservacao2 = document.getElementById('checkbox_conservacao2')

    let avaliacao2 = document.getElementById("rating2").value;
    let comentario2 = document.getElementById("comentario2").value;
    let usuario2 = JSON.parse(localStorage.getItem('userConectado'));
    let nome2 = usuario2.nome;
    

    if(checkbox_cordialidade2.checked){
        checkbox_cordialidade2 = "foi cordial"
        console.log(checkbox_cordialidade2)
    }else {
        checkbox_cordialidade2 = "não foi cordial"
        console.log(checkbox_cordialidade2)
    }

    if(checkbox_pontualidade2.checked){
        checkbox_pontualidade2 = "foi pontual"
        console.log(checkbox_pontualidade2)
    }else {
        checkbox_pontualidade2 = "não foi pontual"
        console.log(checkbox_pontualidade2)
    }
    if(checkbox_honestidade2.checked){
        checkbox_honestidade2 = "foi honesto"
        console.log(checkbox_honestidade2)
    }else {
        checkbox_honestidade2 = "não foi honesto"
        console.log(checkbox_honestidade2)
    }
    if(checkbox_conservacao2.checked){
        checkbox_conservacao2 = "equipamento não era conservado"
        console.log(checkbox_conservacao2)
    }else {
        checkbox_conservacao2 = "equipamento era conservado"
        console.log(checkbox_conservacao2)
    }

    let avaliacao_completa = {
        Nome: nome2,
        cordialidade: checkbox_cordialidade2,
        pontualidade: checkbox_pontualidade2,
        honestidade: checkbox_honestidade2,
        zeloso: checkbox_conservacao2,
        avaliacao: avaliacao2,
        comentario: comentario2
    };

    dados.data.push(avaliacao_completa);


    let novaAvaliacao = new Array();
    

    if (localStorage.hasOwnProperty("novaAvaliacao")) {
        novaAvaliacao = JSON.parse(localStorage.getItem("novaAvaliacao"));
        novaAvaliacao.push({
            Nome: nome2,
            cordialidade: checkbox_cordialidade2,
            pontualidade: checkbox_pontualidade2,
            honestidade: checkbox_honestidade2,
            zeloso: checkbox_conservacao2,
            avaliacao: avaliacao2,
            comentario: comentario2
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

                Nome: nome2,
                cordialidade: checkbox_cordialidade2,
                pontualidade: checkbox_pontualidade2,
                honestidade: checkbox_honestidade2,
                zeloso: checkbox_conservacao2,
                avaliacao: avaliacao2,
                comentario: comentario2
                })

                window.location.href = 'home.html';
        }

        localStorage.setItem('novaAvaliacao', JSON.stringify(novaAvaliacao));

        document.getElementById("comentario2").value = "";
        document.getElementById("checkbox_cordialidade2").checked = false;
        document.getElementById("checkbox_pontualidade2").checked = false;
        document.getElementById("checkbox_honestidade2").checked = false;
        document.getElementById("checkbox_conservacao2").checked = false;
        document.getElementById("r1").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
        document.getElementById("r2").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png"; 
        document.getElementById("r3").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
        document.getElementById("r4").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
        document.getElementById("r5").src = "https://i.postimg.cc/vm8Mmmn7/star-white.png";
        
}

function Sair2(){
    window.location = 'home.html'
}