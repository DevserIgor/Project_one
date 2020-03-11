//FAZENDO COM CLASS NORMAL
// class Todolist {
//     constructor(){
//         this.todos = [];        
//     }
    
//     //metodo adicionar todo
//     addTodo(){
//         this.todos.push('Novo todo');
//         console.log(this.todos);
//     }

// }
//FAZENDO COM EXTENDS
class List {
    constructor(){
        this.data = [];
    }

    add(nome_todo){
        this.data.push(nome_todo);
        console.log(this.data);
    }
}

class Todolist extends List{
    constructor(){
        //chama o construtor da classe pai
        super();
        //definindo as propriedades desta
        this.usuario = "Igor";
    }

    mostraUduario(){
        console.log(this.usuario);
    }
}
const MinhaLista = new Todolist()

document.getElementById('newTodo').onclick = function() {
    MinhaLista.add('Novo Todo');
}
