/*
1 ) Criar dois formularios com 4 campos
2) Criar o CRUD (não necessario o read-leitura) com validação do objeto 
3) gerar 14 objetos de uma vez só e salvar no local storage
EXTRA
Usar o required para campos obrigatorios 
*/

class Formulario {

    constructor(){
        this.id = 1
        this.arrayCadastro = []
    }

    salvar(){
        let cadastro = this.lerDados()
        
        if(this.validarCampos(cadastro) === true){
            this.adcionar(cadastro)
        }
        
    }

    lerDados(){
        let cadastro = {}

        cadastro.id = this.id
        cadastro.nome = document.getElementById('nome').value
        cadastro.sobrenome = document.getElementById('sobrenome').value
        cadastro.telefone = document.getElementById('telefone').value
        cadastro.rg = document.getElementById('rg').value
        cadastro.cpf = document.getElementById('cpf').value

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

    adcionar(cadastro){

        if(localStorage.meuArray){
           var arrayCadastro = JSON.parse(localStorage.getItem('meuArray'))
        }

        this.arrayCadastro.push(cadastro)
        this.id++
        localStorage.meuArray = JSON.stringify(this.arrayCadastro)
    }

    cancelar(){
        document.getElementById('nome').value = ' '
        document.getElementById('sobrenome').value = ' '
        document.getElementById('telefone').value = ' '
        document.getElementById('rg').value = ' '
        document.getElementById('cpf').value = ' '
    }

    radioEscolha(){
    
        const opcao = document.getElementById('radioEscolha')
        const valor = document.querySelector('input[name="documento"]:checked').value
        opcao.innerHTML = "";

        if( valor === "RG"){
            const input = document.createElement('input')

            input.setAttribute('placeholder', "Digite seu " + valor + "...")
            input.setAttribute('type', 'number')


            opcao.appendChild(input)

        
        }else{
            const input = document.createElement('input')

            input.setAttribute('placeholder', "Digite seu " + valor + "...")
            input.setAttribute('type', 'number')
    
            opcao.appendChild(input)
        
        }

        
       
    }
}

var formulario = new Formulario ()