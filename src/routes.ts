import { Router } from "express";
import  usersController from "./users/users.controller"
import productsController from "./products/products.controller"

const routes = Router()

routes.post('/createUsers', usersController.create)
routes.get('/listUsers', usersController.list)
routes.get('/findUsers/:id', usersController.find)
routes.get('/findByName', usersController.findByName)
routes.put('/changeUser/:id', usersController.update)
routes.delete('/deleteUser/:id', usersController.delete)
routes.post('/createProducts', productsController.create)
routes.get('/getListServer', productsController.listServer)
routes.get('/getListData', productsController.listData)
routes.get('/getStockServer', productsController.getStockServer)
routes.get('/getStockData', productsController.getStockData)
routes.get('/getStockReduceServer', productsController.getStockReduceServer)
routes.get('/getStockReduceData', productsController.getStockReduceData)
routes.get('/saveStockServer', productsController.saveServer)
routes.get('/randomProducts', productsController.randomProducts)
routes.get("/saveStockValue", productsController.saveStockValue)

export default routes