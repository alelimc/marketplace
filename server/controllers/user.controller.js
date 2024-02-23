import Product from '../models/user.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'
//import { Op } from 'sequelize';

const create = async (req, res) => { 
const product = new Product(req.body) 
try {
await product.save()
return res.status(200).json({ 
message: "Successfully signed up!"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

const list = async (req, res) => { 
try {
//let users = await User.find().select('name email updated created') 
let products = await Product.find().select('name description price quantity category') 
res.json(products)
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
//Fetch data that contain 'kw' in name
const productByName = async (req, res) => {
    const { name } = req.query;
    try {
        const products = await Product.find({ name: { $regex: name, $options: 'i' } });
        res.json(products);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving products."
        });
    }
};

const productByID = async (req, res, next, id) => { 
try {
let product = await Product.findById(id) 
if (!product)
return res.status(400).json({ 
error: "Product not found"
})
req.profile = product 
next()
} catch (err) {
return res.status(400).json({ 
error: "Could not retrieve product"
}) 
}
}
   
const read = (req, res) => {
return res.json(req.profile) 
}

const update = async (req, res) => { 
try {
let product = req.profile
product = extend(product, req.body) 
product.updated = Date.now() 
await product.save()
res.json(product) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}

const remove = async (req, res) => { 
try {
let product = req.profile
let deletedProduct = await product.deleteOne() 
res.json(deletedProduct) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
// removes all in products
const removeAll = async (req, res) => {
    try {
        await Product.deleteMany({});
        res.json({ message: 'All products deleted successfully' });
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        });
    }
}


//export default { create, productByID, read, list, remove, update, productByName }
export default { create, productByID, read, list, remove, removeAll, update, productByName }
