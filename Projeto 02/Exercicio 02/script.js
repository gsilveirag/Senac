var array = []


class Produto {
    constructor (){
        this.nome = document.getElementById('nome').value
        this.codigo = document.getElementById('codigo').value
    }

    adicionar(){
        
        let novoItem = {
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
    
            document.getElementById('nome').value = '' // limpa os dados
            document.getElementById('codigo').value = '' // limpa os dados
    
            localStorage.meuArray = JSON.stringify(array) // converte em String e armazena no meuArray)

        }   
    }

    recuperar(){
        let dados = document.getElementById('dados')
        dados.innerHTML = '' // limpa a div para mostrar os dados

        if(localStorage.meuArray){
            array = JSON.parse(localStorage.getItem('meuArray'))
        }
        
        for (let i = 0; i < array.length; i++){
            let trNome = document.createElement('li')
            trNome.innerText = "Nome: " +array[i].nome + " Codigo: " +array[i].codigo
            dados.appendChild(trNome)
            
        }
    }

    limpar(){
        array = []
        localStorage.meuArray = JSON.stringify(array)
        dados.innerHTML = ''
    }
}

const produto = new Produto()

