var array = []


class Produto {
    constructor (){
        this.id = 1
        this.nome = document.getElementById('nome').value
        this.codigo = document.getElementById('codigo').value
    }

    adicionar(){
        
        let novoItem = {
            id : this.id,
            nome : nome.value,
            codigo : codigo.value
        }
        
        let eVazio = !Object.values(novoItem).every(x => x !== null && x !== '')

        if (eVazio) {
        alert("Faltam dados.")
        return;
        }else{

            if(localStorage.meuArray){ // verifica se ja existe
                array = JSON.parse(localStorage.getItem('meuArray')) // ele puxa e converte
            }
            array.push(novoItem) // adiciona as info no array

            this.id++
            localStorage.meuArray = JSON.stringify(array) // converte em String e armazena no meuArray)

            this.recuperar() // chama o metodo para mostrar os elementos
            this.limpar() // limpa a tela apos enviar
        }   
    }

    recuperar(){
        let dados = document.getElementById('dados')
        dados.innerText = ''

        if(localStorage.meuArray){
            array = JSON.parse(localStorage.getItem('meuArray'))
        }
        
        for (let i = 0; i < array.length; i++){ // funcao para imprimir na tela tudo salvo
            let tr = dados.insertRow()

            let tdId = tr.insertCell()
            let tdNome = tr.insertCell()
            let tdCodigo = tr.insertCell()
            let tdAcao = tr.insertCell()
            
            tdId.innerText = array[i].id
            tdNome.innerText = array[i].nome
            tdCodigo.innerText = array[i].codigo
            
            let iconEdit = document.createElement('img')
            iconEdit.src = 'img/edit_icon.png'
            iconEdit.setAttribute("onclick", "produto.editar(" + array[i].id  +")")

            let iconDelete = document.createElement('img')
            iconDelete.src = 'img/delete_icon.png'
            iconDelete.setAttribute("onclick", "produto.apagar("+  array[i].id +")")


            tdAcao.appendChild(iconEdit)
            tdAcao.appendChild(iconDelete)
        }
    }

    limpar(){
        document.getElementById('nome').value = '' // limpa os dados
        document.getElementById('codigo').value = '' // limpa os dados
    }

    remove(){

        if(localStorage.meuArray){ // verifica se ja existe
            array = JSON.parse(localStorage.getItem('meuArray')) // ele puxa e converte
        }
        array = []
        this.id = 1
        array.push() // adiciona as info no array
        
        localStorage.meuArray = JSON.stringify(array) // converte em String e armazena no meuArray)
        dados.innerText = ''
    }    
    

    apagar(id){
        let dados = document.getElementById('dados')

        for(let i= 0; i < array.length; i++){
            if(array[i].id === id){
                array.splice(i, 1)
                dados.deleteRow(i)
            }
        }
    }

    editar(id){
        if(localStorage.meuArray){
            array = JSON.parse(localStorage.getItem('meuArray'))
        }
        
        for(let i= 0; i < array.length; i++){
            if(array[i].id === id){
                document.getElementById('nome').value = array[i].nome
                document.getElementById('codigo').value = array[i].codigo
        }
        }
    }
}

const produto = new Produto()

