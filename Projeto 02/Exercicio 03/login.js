class Login {
    constructor (){
        this.id = 1
        this.arrayLogin = []
    }
    salvar(){
        let cadastro = this.lerDados()

        if(this.validarCampos(cadastro) === true){
            this.adicionar(cadastro)
        }
    }

    lerDados(){
        let cadastro = {}

        cadastro.id = this.id
        cadastro.email = document.getElementById('email').value
        cadastro.password = document.getElementById('password').value
        cadastro.passwordConfirm = document.getElementById('passwordConfirm').value

        return cadastro

    }

    validarCampos (cadastro){
        let eVazio = !Object.values(cadastro).every(x => x !== null && x !== '')


        if(eVazio || password !== passwordConfirm ){
            alert("Atenção ! Faltam dados, ou senha diferente.")
            return false
            
        }
        
        return true
    }

    adicionar(cadastro){
        if(localStorage.meuArrayLogin){
            arrayLogin = JSON.parse(localStorage.getItem('meuArrayLogin'))
        }

        this.arrayLogin.push(cadastro)
        this.id++
        localStorage.meuArrayLogin = JSON.stringify(this.arrayLogin)
    }

    cancelar(){
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
        document.getElementById('passwordConfirm').value = ''
    }
}

var login = new Login ()