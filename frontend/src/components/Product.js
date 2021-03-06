import React from 'react'

export default function Product(props) {
    const {product} = props;
    return (
        <div className="col s6 m4 l3">
            <div key={product._id} className="card">
                <div className="card-image">
                    <img src={process.env.PUBLIC_URL + "/" + product.image} alt={product.image}/> 
                </div>
                <div className="card-content">
                    <span className="card-title">{product.name}</span>
                    <div className="price">${product.price}</div>
                    <div className="seller">
                        <a href={`/sellers/${product.sellerid}`}>{product.seller}</a>
                    </div>
                </div>
                <div className="card-action">
                    <a href={`/product/${product._id}`}>Buy</a>
                </div>
            </div>
        </div>
    )
}