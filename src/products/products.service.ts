import { productType } from "./types/products.type"
import productSchema from "./products.schema"
import { writeFile, readFile } from "fs/promises"


class productService {
    constructor() { }

    public async create(body: productType) {

        const createProducts = await productSchema.create(body)

        let content: productType[]
        try {
            content = await this.listData()
        } catch (error) {
            content = []
        }
        content.push(body)

        await writeFile('./src/products/list/products.json', JSON.stringify(content, null, 2))

        return createProducts
    }

    public async listServer() {
        const listServer = await productSchema.find()
        return listServer
    }

    public async listData():Promise<productType[]> {
        const listData = await readFile("./src/products/list/products.json", "utf-8")
        return JSON.parse(listData)
    }

    public async getStock() {

        const contentData = await this.listData()
        const valorStockData = await contentData.map( produto => {
            let novoProduto = {
                nome: produto.nome,
                quantidade: produto.quantidade,
                valor: produto.valor,
                valorTotal: produto.valor * produto.quantidade
            }
            return novoProduto
        })

        const contentServer = await this.listServer()
        const valorStockServer = await contentServer.map(produto => {
            let novoProduto = {
                nome: produto.nome,
                quantidade: produto.quantidade,
                valor: produto.valor,
                valorTotal: produto.valor * produto.quantidade
            }
            return novoProduto
        })

        return valorStockServer
    }
    

    public async getStockReduce() {
        const stock = await this.getStock()
        const stockValor = await stock.reduce((acumulado: any, atual: any) => {
            acumulado = acumulado + atual.valorTotal
            return acumulado
        }, 0)
        return stockValor
    }

    public async saveServer() {
        const productSave = await this.listServer()
        await writeFile("./src/products/list/productServer.json", JSON.stringify(productSave, null, 2))
        return productSave
    }

    public async randomProducts() {
        const productsList = await this.listData()
        let fourRandomProducts: productType[] = []
        while(fourRandomProducts.length < 4){
            let indexList:number = Math.floor(Math.random() * productsList.length)
            let randomObject: productType = productsList[indexList]
            if(!fourRandomProducts.includes(randomObject)){
                fourRandomProducts.push(randomObject)
            }
        }
        console.log(fourRandomProducts)
        return fourRandomProducts
    }

}

export default productService