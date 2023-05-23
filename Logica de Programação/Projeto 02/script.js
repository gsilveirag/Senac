class Cliente {
    constructor(){
        this.nome = ''
        this.sobrenome = ''
        this.email = ''
    }
    salvar(){
        localStorage.nome = document.getElementById('nome').value
        localStorage.sobrenome = document.getElementById('sobrenome').value
        localStorage.email = document.getElementById('email').value
    }

    recuperar(){
        document.getElementById('nome').value = localStorage.nome
        document.getElementById('sobrenome').value = localStorage.sobrenome
        document.getElementById('email').value = localStorage.email
    }

}


const cliente = new Cliente()
