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
// class List {
//     constructor(){
//         this.data = [];
//     }

//     add(nome_todo){
//         this.data.push(nome_todo);
//         console.log(this.data);
//     }
// }

// class Todolist extends List{
//     constructor(){
//         //chama o construtor da classe pai
//         super();
//         //definindo as propriedades desta
//         this.usuario = "Igor";
//     }

//     mostraUduario(){
//         console.log(this.usuario);
//     }
// }
// const MinhaLista = new Todolist()

// document.getElementById('newTodo').onclick = function() {
//     MinhaLista.add('Novo Todo');
// }

// ARRAY
const arr  = [1,3,4,5,8,9];

const newArr = arr.map(function(item){
    return item * 2;
});
console.log(newArr);

const soma = arr.reduce(function(total, next){
    return total + next;
});

const filter = arr.filter(function(item){
    return item % 2 === 0 ;
});
console.log(filter);

const find = arr.find(function(item){
    return item ===3;
});
console.log(find);

//ARROW FUCTIONS

const newArr1 = arr.map(item => item * 2);
console.log(newArr1);

const teste = () => 'teste';


console.log(teste());


// Desestruturação

const usuario = {
    nome: 'Igor',
    idade: '24',
    endereco: {
        cidade: 'rio do Sul',
        estado: 'SC',
    }
}

// const {nome,idade, endereco:{cidade, estado}} = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);


// function mostraNome({nome,idade}){
//     console.log(nome,idade);
// }

// mostraNome(usuario)

//REST
const { nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

const array = [1,2,3,4];

const [a,b, ...c]=  array;
console.log(a);
console.log(b);
console.log(c);

// function soma(...params){
//     return params.reduce((total,next) => total + next);
// }

// esta funcao a cima faz isto que esta abaixo, só que de forma dinâmica e infinita não importado quantos parâmetros eu passe
// function soma(a,b,c){
//     return a + b + c;
// }

// console.log(soma(1,2,3));

// SPRED

const array1_spred = [1,2,3];
const array2_spred = [4,5,6];

const array3_spred  = [...array1_spred, ...array2_spred];

console.log(array3_spred);

const usuario1 = {
    nome: 'Igor',
    idade: '24',
    endereco: {
        cidade: 'rio do Sul',
        estado: 'SC',
    }
}

const  usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2);


const nome_lit = "Igor";
const idade = 24;

console.log(`Meu nome é ${nome} e tenho ${idade}`);


























