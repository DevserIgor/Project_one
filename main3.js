const usuario = [
    { nome: 'Igor', idade: 24, empresa: 'Exponencial Marketing'},
    { nome: 'Jerônimo', idade: 34, empresa: 'Exponencial Marketing'},
    { nome: 'Anilo', idade: 28, empresa: 'Ouro Loja'},
]

const idades = usuario.map(function(item){
    return item.idade;
})

console.log(idades);