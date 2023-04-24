import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import cors from 'cors'

class App {
    public express: express.Application
    constructor() {
        this.express = express()
        this.middleware()
        this.routes()
        this.database()        
    }
    
    public middleware(): void {
        this.express.use(express.json())    
        //this.express.use(cors())           
    }

    public routes(): void {
        this.express.use(routes)
        
    }

    public async database() {
        mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb+srv://jordan:teste123@cluster0.nrk6gm2.mongodb.net/?retryWrites=true&w=majority')
        console.log('Banco de dados conectado')
    }


}

export default new App().express