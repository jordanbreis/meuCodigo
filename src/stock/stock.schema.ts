import { Schema, model } from "mongoose";

const stockSchema = new Schema({
    nome: {
        required: true,
        type: String
    },
    quantidade: {
        required: true,
        type: Number
    },
    valor: {
        required: true,
        type: Number
    },
    valorTotal: {
        required: true,
        type: Number
    }
}, { timestamps: true })

export default model('productStock', stockSchema)