import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
        email: {
            required: true,
            type: String
        },
        nome: {
            required: true,
            type: String
        },
        sobrenome: {
            required: true,
            type: String
        },
        idade: {
            required: true,
            type: Number
        }
    },
    {
        timestamps: true
    }
)

export default model('Usuarios', userSchema)