import express from 'express'
import productCtrl from '../controllers/product.controller.js' 

const router = express.Router()
  router.route('/api/products').post(productCtrl.create)
  router.route('/api/products').get(productCtrl.list)
  router.route('/api/products').delete(productCtrl.removeAll)
  
  router.route('/api/products').get(productCtrl.productByName)
  //router.get('/api/products', productCtrl.productByName);
  //router.get("/products", productCtrl.productByName);
  //router.param('productName', productCtrl.productByName)

  router.param('productId', productCtrl.productByID)
  router.route('/api/products/:productId').get(productCtrl.read)
  router.route('/api/products/:productId').put(productCtrl.update)
  router.route('/api/products/:productId').delete(productCtrl.remove)
  
  export default router