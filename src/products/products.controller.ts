import { Request, Response } from "express"
import productService from "./products.service"
import stockService from "../stock/stock.service"

class productsController {
    constructor() { }

    public async create(req: Request, res: Response) {
        const product = await new productService().create(req.body)
        return res.status(200).json(product)
    }

    public async listServer(req: Request, res: Response) {
        const product = await new productService().listServer()
        return res.status(200).json(product)
    }

    public async listData(req: Request, res: Response) {
        const product = await new productService().listData()
        return res.status(200).json(product)
    }

    public async getStock(req: Request, res: Response) {
        const product = await new productService().getStock()
        return res.status(200).json(product)
    }

    public async getStockReduce(req: Request, res: Response) {
        const product = await new productService().getStockReduce()
        return res.status(200).json(product)
    }

    public async saveServer(req: Request, res: Response) {
        const product = await new productService().saveServer()
        return res.status(200).json(product)
    }

    public async randomProducts(req: Request, res: Response) {
        const product = await new productService().randomProducts()
        return res.status(200).json(product)
    }

    public async saveStockValue(req: Request, res: Response) {
        const product = await new stockService().saveStockValue()
        return res.status(200).json(product)
    }

}

export default new productsController()