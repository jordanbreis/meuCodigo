import productService from "../products/products.service";
import { writeFile, readFile } from 'fs/promises'

class stockService {
    constructor() {}

    public async saveStockValue() {
        const contentData = await new productService().listData()
        const valorStockData = contentData.map( produto => {
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
}

export default stockService
