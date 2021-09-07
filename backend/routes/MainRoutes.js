import { 
    addNewProduct,
    getProducts, 
    getProductWithID, 
    UpdateProduct,
    deleteProduct,
} from '../controllers/ProductControllers.js';

const routes = (app) => {
    app.route('/api/products')
    // GET endpoint
        .get(getProducts)
    // POST endpoint
        .post(addNewProduct);

    app.route('/api/products/:productId')
    // GET specific Product
        .get(getProductWithID)
    // UPDATE specific Product
        .put(UpdateProduct)
    // DELETE specific Product
        .delete(deleteProduct);
}

export default routes;