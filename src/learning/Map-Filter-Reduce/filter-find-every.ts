const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const objetos = [
    { teste: "aaa", testeArray: [0, 1] },
    { teste: "bbb", testeArray: [1, 2] },
    { teste: "ccc", testeArray: [2, 3] },
    { teste: "ddd", testeArray: [3, 4] }
]

const filtrado = objetos.filter(obj => obj.testeArray.includes(1))

let acc: number = 0
let qtde: number = 2

function acumulado(acc: number): number {
    acc++
    return acc
}


const meuFiltro = carrinho.filter(obj => obj.preco < 500).map(obj => {
    let objeto = {
        nome: obj.nome
    }
    if (acc < qtde) {
        acc = acumulado(acc)
        return objeto
    }

}).filter(obj => obj !== undefined)

const meuFiltroGpt = carrinho.filter(obj => obj.preco < 500)
    .slice(0, 2)
    .map(obj => obj.nome );


const meuFind = carrinho.find(obj => obj.qtde < 4 && obj.preco < 500)

const getProdutosEmEstoque = carrinho.filter(item => item.qtde > 1).map(item => item.nome)

const getProdutoEspecifico = carrinho.find(item => item.qtde < 3)

const temEstoque = carrinho.every(item => item.qtde > 1)


console.log(meuFiltroGpt)

console.log(meuFiltro)
