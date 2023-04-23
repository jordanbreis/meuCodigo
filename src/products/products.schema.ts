import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
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
        }
    },
    {
        timestamps: true
    }
)

export default model('Produtos', productSchema)