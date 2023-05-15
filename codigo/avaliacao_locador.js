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
    var s5 = document.getElementById("s5").src;

    var avaliacao = 0;

    if(estrela==5){
        if(s5==url + "star2.png"){
            document.getElementById("s1").src = "star.png";
            document.getElementById("s2").src = "star.png";
            document.getElementById("s3").src = "star.png";
            document.getElementById("s4").src = "star.png";
            document.getElementById("s5").src = "star.png";
            avaliacao = 5;
        }else {
            document.getElementById("s1").src = "star.png";
            document.getElementById("s2").src = "star.png";
            document.getElementById("s3").src = "star.png";
            document.getElementById("s4").src = "star.png";
            document.getElementById("s5").src = "star2.png";
            avaliacao = 4;
        }
    }

    if(estrela==4){
        if(s4==url + "star2.png"){
            document.getElementById("s1").src = "star.png";
            document.getElementById("s2").src = "star.png";
            document.getElementById("s3").src = "star.png";
            document.getElementById("s4").src = "star.png";
            document.getElementById("s5").src = "star2.png";
            avaliacao = 4;
        }else {
            document.getElementById("s1").src = "star.png";
            document.getElementById("s2").src = "star.png";
            document.getElementById("s3").src = "star.png";
            document.getElementById("s4").src = "star2.png";
            document.getElementById("s5").src = "star2.png";
            avaliacao = 3;
        }
    }

    if(estrela==3){
        if(s3==url + "star2.png"){
            document.getElementById("s1").src = "star.png";
            document.getElementById("s2").src = "star.png";
            document.getElementById("s3").src = "star.png";
            document.getElementById("s4").src = "star2.png";
            document.getElementById("s5").src = "star2.png";
            avaliacao = 3;
        }else {
            document.getElementById("s1").src = "star.png";
            document.getElementById("s2").src = "star.png";
            document.getElementById("s3").src = "star2.png";
            document.getElementById("s4").src = "star2.png";
            document.getElementById("s5").src = "star2.png";
            avaliacao = 2;
        }
    }

    if(estrela==2){
        if(s2==url + "star2.png"){
            document.getElementById("s1").src = "star.png";
            document.getElementById("s2").src = "star.png";
            document.getElementById("s3").src = "star2.png";
            document.getElementById("s4").src = "star2.png";
            document.getElementById("s5").src = "star2.png";
            avaliacao = 2;
        }else {
            document.getElementById("s1").src = "star.png";
            document.getElementById("s2").src = "star2.png";
            document.getElementById("s3").src = "star2.png";
            document.getElementById("s4").src = "star2.png";
            document.getElementById("s5").src = "star2.png";
            avaliacao = 1;
        }
    }

    if(estrela==1){
        if(s1==url + "star2.png"){
            docum0ent.getElementById("s1").src = "star.png";
            document.getElementById("s2").src = "star2.png";
            document.getElementById("s3").src = "star2.png";
            document.getElementById("s4").src = "star2.png";
            document.getElementById("s5").src = "star2.png";
            avaliacao = 1;
        }else {
            document.getElementById("s1").src = "star2.png";
            document.getElementById("s2").src = "star2.png";
            document.getElementById("s3").src = "star2.png";
            document.getElementById("s4").src = "star2.png";
            document.getElementById("s5").src = "star2.png";
            avaliacao = 0;
        }
    }

   
   document.getElementById('rating').innerHTML = avaliacao;
   console.log(avaliacao);
}


function Enviar() {
 

    var av = document.getElementById("rating").value;
    var coment = document.getElementById("comentario").value;
    localStorage.setItem("resultadoAv", av);
    localStorage.setItem("resultadoComent", coment); 

}