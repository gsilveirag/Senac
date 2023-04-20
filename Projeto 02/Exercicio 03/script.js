/*

1 ) Criar dois formularios com 4 campos

2) Criar o CRUD (não necessario o read-leitura) com validação do objeto 

3) gerar 14 objetos de uma vez só e salvar no local storage

EXTRA

Usar o required para campos obrigatorios 
*/

class Formulario {

    constructor(){
        this.id = 0
        this.arrayCadastro = []
    }

    salvar(){
        let cadastro = this.lerDados()

        if(this.validarCampos(cadastro) === true){
            alert("Salvo !")
        }
        
    }

    lerDados(){
        let cadastro = {}

        cadastro.id = this.id
        cadastro.nome = document.getElementById('nome').value
        cadastro.sobrenome = document.getElementById('sobrenome').value
        cadastro.telefone = document.getElementById('telefone').value
        cadastro.email = document.getElementById('email').value
        cadastro.password = document.getElementById('password').value

        return cadastro
    }

    validarCampos(cadastro){
        let eVazio = !Object.values(cadastro).every(x => x !== null && x !== '')


        if(eVazio){
            alert("Atenção ! Faltam dados.")
            return false
    
        }
        
        return true
        
    }

    cancelar(){
       
    }

}

var formulario = new Formulario ()