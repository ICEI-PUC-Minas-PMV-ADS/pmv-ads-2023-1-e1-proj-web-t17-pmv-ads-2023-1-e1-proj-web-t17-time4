function Check() {

    let usuario = document.querySelector('#email_login')
    let userLabel = document.querySelector('#labelEmail')

    let senha = document.querySelector('#password_login')
    let senhaLabel = document.querySelector('#labelSenha')

    let msgError = document.querySelector('#msgError')

    let listaUser = []

    let userValid = {
        nome: '',
        email: '',
        senha: ''

    }

    listaUser = JSON.parse(localStorage.getItem('userlogado'))

    listaUser.forEach((item) => {
        if(usuario.value == item.email && senha.value == item.senha){
            
            userValid = {
                nome: item.nome,
                email: item.email,
                senha: item.senha
            }
        }
    });

    if(usuario.value == userValid.email && senha.value == userValid.senha){
        
      

       let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)

       localStorage.setItem('token', token)

        localStorage.setItem('userConectado', JSON.stringify(userValid))


        window.location.href = 'home.html';

       
    
    }else {
        
        userLabel.setAttribute('style', 'color:red')
        usuario.setAttribute('style', 'border-color:red')

        senha.setAttribute('style', 'color:red')
        senhaLabel.setAttribute('style', 'color:red')

        msgError.setAttribute('style', 'display:block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
       
        
    }

    

   

       
    
}