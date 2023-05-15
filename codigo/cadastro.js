var db = {
    dados: [

        {
            nome: 'Mariana',
            sobrenome: 'Alves',
            email: 'mariana.alves@gmail.com',
            celular: 31978495635,
            senha: 'kosj5634',
            estado: 'Rio de Janeiro',
            cidade: 'Rio das Ostras'

        },{
            nome: 'Antonio',
            sobrenome: 'José dos Santos',
            email: 'josesantos@gmail.com',
            celular: 31985631245,
            senha: 'kosj14798',
            estado: 'Ceará',
            cidade: 'Sobral'  
        },{
            nome: 'Thiago',
            sobrenome: 'Santos',
            email: 'thiago.santos@gmail.com',
            celular: 31995631472,
            senha: 'sdtf1245',
            estado: 'São Paulo',
            cidade: 'Santo André'
        }
    ]
}
function Cadastrar() {
    var nome;
     
    var sobrenome;
       
    var email;
     
    var celular;
     
    var senha;
     
    var estado;
     
    var cidade;
     

      nome = document.getElementById("firstname").value;
      sobrenome =  document.getElementById("lastname").value;
      email = document.getElementById("email").value;
      celular = document.getElementById("number").value;
      senha = document.getElementById("password").value;
      estado = document.getElementById("estados_dropdown").value;
      cidade = document.getElementById("city").value;

     localStorage.setItem("nome", nome);
     localStorage.setItem("sobrenome", sobrenome);
     localStorage.setItem("email", email);
     localStorage.setItem("celular", celular);
     localStorage.setItem("senha", senha);
     localStorage.setItem("estado", estado);
     localStorage.setItem("cidade", cidade);
     

}