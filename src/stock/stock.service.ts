import productService from "../products/products.service";
import { writeFile, readFile } from 'fs/promises'

class stockService {
    constructor() { }

    public async saveStockValue() {
        const contentData = await new productService().listData()
        const valorStockData = contentData.map(produto => {
            let novoProduto = {
                nome: produto.nome,
                quantidade: produto.quantidade,
                valor: produto.valor,
                valorTotal: produto.valor * produto.quantidade
            }
            return novoProduto
        })
        await writeFile("./src/stock/productStok.json", JSON.stringify(valorStockData, null, 2))
        return valorStockData
    }

    /* ja tenho essa função implementada na producst.service

    public async getStockReduce() {
        const stock = await new productService().getStock()
        const stockValor = await stock.reduce((acumulado: any, atual: any) => {
            acumulado = acumulado + atual.valorTotal
            return acumulado
        }, 0)
        return stockValor
    }

    7 - Para os Produtos, crie uma rota que dispare uma função que lê o arquivo de 
produtos e retorna seus valores. // já feito na products.service a função é listData()

    */


}


export default stockService
