import { Request, Response } from "express";
import  userService  from "./users.service"

 class usersController {
    constructor() {}

    public async create(req: Request, res: Response) {
        const user = await new userService().create(req.body)
        return res.status(200).json(user)
    }
    
    public async list(req: Request, res: Response) {
        const user = await new userService().list()
        return res.status(200).json(user)        
    }

    public async find(req: Request, res: Response) {
        const user = await new userService().find(req.params.id)
        return res.status(200).json(user)        
    }

    public async findByName(req: Request, res: Response) {
        const user = await new userService().findByName(req.query.nome, req.query.sobrenome)
        return res.status(200).json(user)        
    }

    public async update(req: Request, res: Response){
        const user = await new userService().update(req.params.id, req.body)
        return res.status(200).json(user)
    }

    public async delete(req: Request, res: Response){
        const user = await new userService().delete(req.params.id)
        return res.status(200).json(user)
    }
}

export default new usersController()