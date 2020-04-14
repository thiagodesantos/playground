
const nome = 'thiago'
const usuIdade = 30

const user = {
    nome,
    idade : usuIdade,
    localizacao : "Rio de janeiro"
}

console.log(user)


// Object Destructuring

const produto = {
    label: 'Notebook vermelho',
    preco: 5,
    estoque: 200,
    precoPromocao: undefined,
    avaliacao: 4.2
}

// const label = produto.label
// const estoque = produto.estoque

// const {label:labelProduto, estoque, avaliacao = 5} = produto
// console.log(labelProduto)
// console.log(estoque)
// console.log(avaliacao)

const transaction = (texto, {label, estoque}) => {
   console.log(texto, label, estoque)
}

transaction('ordem', produto)