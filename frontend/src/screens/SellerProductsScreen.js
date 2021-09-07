import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useParams } from 'react-router-dom';

export default function SellerProductsScreen() {
    let { id } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fecthData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/products/byseller/'+id);
            setLoading(false);
            setProducts(data);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
        };
        fecthData();
    }, []);
    return (
        
        <div>
            <div className="row">
                <h3>Products by Seller</h3>
            </div>
        {loading ? (
            <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <div className="row center">
            {products.map((product) => (
                <Product key={product._id} product={product}></Product>
            ))}
            </div>
        )}
        </div>
    );
}