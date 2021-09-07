import { 
    addNewProduct,
    getProducts, 
    getProductWithID, 
    updateProduct,
    deleteProduct,
} from '../controllers/ProductControllers.js';

import { 
    addNewUser,
    getUsers, 
    getUserWithID, 
    updateUser,
    deleteUser,
    signInUser
} from '../controllers/UserControllers.js';

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
        .put(updateProduct)
    // DELETE specific Product
        .delete(deleteProduct);

    app.route('/api/users')
    // GET endpoint
        .get(getUsers)
    // POST endpoint
        .post(addNewUser);

    app.route('/api/users/:userId')
    // GET specific User
        .get(getUserWithID)
    // UPDATE specific User
        .put(updateUser)
    // DELETE specific User
        .delete(deleteUser);

    app.route('/api/signin')
    // Sign In User
        .post(signInUser);
}

export default routes;