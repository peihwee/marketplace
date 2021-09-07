import mongoose from 'mongoose';
import { ProductSchema } from '../models/ProductModel.js';
//Update
const Product = mongoose.model('Product', ProductSchema);

export const addNewProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, Product) => {
        if(err)
        {
            res.send(err);
        }
        res.json(Product);
    });
};

export const getProducts = (req, res) => {
    Product.find({}, (err, Product) => {
        if(err)
        {
            res.send(err);
        }
        res.json(Product);
    });
};

export const getProductWithID = (req, res) => {
    Product.findById(req.params.productId, (err, Product) => {
        if(err)
        {
            res.send(err);
        }
        res.json(Product);
    });
};

export const UpdateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, (err, Product) => {
        if(err)
        {
            res.send(err);
        }
        res.json(Product);
    });
};

export const deleteProduct = (req, res) => {
    Product.remove({_id: req.params.productId}, (err, Product) => {
        if(err)
        {
            res.send(err);
        }
        res.json({message: 'Successfully deleted Product'});
    });
};
