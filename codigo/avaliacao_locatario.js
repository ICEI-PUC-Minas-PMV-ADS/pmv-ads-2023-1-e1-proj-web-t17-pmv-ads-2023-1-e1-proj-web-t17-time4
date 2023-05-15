function Avaliar(estrela)
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

    if(estrela==5){
        if(r5==url + "star2.png"){
            document.getElementById("r1").src = "star.png";
            document.getElementById("r2").src = "star.png";
            document.getElementById("r3").src = "star.png";
            document.getElementById("r4").src = "star.png";
            document.getElementById("r5").src = "star.png";
            avaliacao = 5;
        }else {
            document.getElementById("r1").src = "star.png";
            document.getElementById("r2").src = "star.png";
            document.getElementById("r3").src = "star.png";
            document.getElementById("r4").src = "star.png";
            document.getElementById("r5").src = "star2.png";
            avaliacao = 4;
        }
    }

    if(estrela==4){
        if(r4==url + "star2.png"){
            document.getElementById("r1").src = "star.png";
            document.getElementById("r2").src = "star.png";
            document.getElementById("r3").src = "star.png";
            document.getElementById("r4").src = "star.png";
            document.getElementById("r5").src = "star2.png";
            avaliacao = 4;
        }else {
            document.getElementById("r1").src = "star.png";
            document.getElementById("r2").src = "star.png";
            document.getElementById("r3").src = "star.png";
            document.getElementById("r4").src = "star2.png";
            document.getElementById("r5").src = "star2.png";
            avaliacao = 3;
        }
    }

    if(estrela==3){
        if(r3==url + "star2.png"){
            document.getElementById("r1").src = "star.png";
            document.getElementById("r2").src = "star.png";
            document.getElementById("r3").src = "star.png";
            document.getElementById("r4").src = "star2.png";
            document.getElementById("r5").src = "star2.png";
            avaliacao = 3;
        }else {
            document.getElementById("r1").src = "star.png";
            document.getElementById("r2").src = "star.png";
            document.getElementById("r3").src = "star2.png";
            document.getElementById("r4").src = "star2.png";
            document.getElementById("r5").src = "star2.png";
            avaliacao = 2;
        }
    }

    if(estrela==2){
        if(r2==url + "star2.png"){
            document.getElementById("r1").src = "star.png";
            document.getElementById("r2").src = "star.png";
            document.getElementById("r3").src = "star2.png";
            document.getElementById("r4").src = "star2.png";
            document.getElementById("r5").src = "star2.png";
            avaliacao = 2;
        }else {
            document.getElementById("r1").src = "star.png";
            document.getElementById("r2").src = "star2.png";
            document.getElementById("r3").src = "star2.png";
            document.getElementById("r4").src = "star2.png";
            document.getElementById("r5").src = "star2.png";
            avaliacao = 1;
        }
    }

    if(estrela==1){
        if(r1==url + "star2.png"){
            docum0ent.getElementById("r1").src = "star.png";
            document.getElementById("r2").src = "star2.png";
            document.getElementById("r3").src = "star2.png";
            document.getElementById("r4").src = "star2.png";
            document.getElementById("r5").src = "star2.png";
            avaliacao = 1;
        }else {
            document.getElementById("r1").src = "star2.png";
            document.getElementById("r2").src = "star2.png";
            document.getElementById("r3").src = "star2.png";
            document.getElementById("r4").src = "star2.png";
            document.getElementById("r5").src = "star2.png";
            avaliacao = 0;
        }
    }

   
   document.getElementById("rating2").innerHTML = avaliacao;
   console.log(avaliacao);
}

function Enviar2() {
 

    var av = document.getElementById("rating").value;
    var coment = document.getElementById("comentario").value;
    localStorage.setItem("resultadoAv", av);
    localStorage.setItem("resultadoComent",coment); 

}