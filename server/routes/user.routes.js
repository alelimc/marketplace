import express from 'express'
import productCtrl from '../controllers/user.controller.js' 


const router = express.Router()
  router.route('/api/products').post(productCtrl.create)
  router.route('/api/products').get(productCtrl.list)
  router.route('/api/products').delete(productCtrl.removeAll)
  router.param('/api/products', productCtrl.productByName);
  router.param('productId', productCtrl.productByID)
  router.route('/api/products/:productId').get(productCtrl.read)
  router.route('/api/products/:productId').put(productCtrl.update)
  router.route('/api/products/:productId').delete(productCtrl.remove)
  
 
  export default router







// import express from 'express'
//   import userCtrl from '../controllers/user.controller.js' 
//   const router = express.Router()
//   router.route('/api/users').post(userCtrl.create)
//   router.route('/api/users').get(userCtrl.list)
//   router.param('userId', userCtrl.userByID)
//   router.route('/api/users/:userId').get(userCtrl.read)
//   router.route('/api/users/:userId').put(userCtrl.update)
//   router.route('/api/users/:userId').delete(userCtrl.remove)
//   export default router

