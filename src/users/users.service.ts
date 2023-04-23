import userSchema from './users.schema'
import userType from './types/users.types'

class userService {
    constructor() {}

    public async create(body: userType) {
        const userCreate = await userSchema.create(body)
        return userCreate
    }
    
    public async list() {
        const usersList = await userSchema.find()
        return usersList        
    }

    public async find(id: any){
        const usersFind = await userSchema.findById(id)
        return usersFind
    }

    public async findByName(name: any, lastname: any){
        const usersFindByName = await userSchema.find({
            nome: name,
            sobrenome: lastname
        })
        return usersFindByName
    }

    public async update(id: any, body: userType){
        const userUpdate = await userSchema.findByIdAndUpdate({_id : id},{
            email: body.email,
            nome: body.nome,
            sobrenome: body.sobrenome,
            idade: body.idade
        },{new: true})
        return userUpdate
    }

    public async delete(id: any){
        const deleteUser = userSchema.findByIdAndDelete(id)
        return deleteUser
    }
}

export default userService