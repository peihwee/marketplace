import React from 'react';
import axios from 'axios';

class SellForm extends React.Component {
    submitProduct(event)
    {
        event.preventDefault();

        axios.post('api/products', {
            name: this.refs.name.value,
            description: this.refs.description.value,
            image: this.refs.image.value,
            price: this.refs.price.value,
            seller: this.refs.seller.value,
        })
        .then((response) => {
            console.log(response);
            window.open("/", "_self");
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() { 
        return ( 
            <div className="row">
                <h1 className="center">Add Product</h1>
                <form className="col s12" onSubmit={this.submitProduct.bind(this)}>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="name" ref="name" type="text"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="description" ref="description" type="text"/>
                        <label htmlFor="description">description</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s4">
                        <input id="price" ref="price" type="text"/>
                        <label htmlFor="price">Price</label>
                    </div>
                    <div className="input-field col s4">
                        <input id="seller" ref="seller" type="text"/>
                        <label htmlFor="seller">Seller</label>
                    </div>
                    <div className="input-field col s4">
                        <input list="images-list" id="image" ref="image"/>
                        <datalist id="images-list">
                            <option value="images/001.png"/>
                            <option value="images/004.png"/>
                            <option value="images/007.png"/>
                            <option value="images/025.png"/>
                            <option value="images/035.png"/>
                            <option value="images/133.png"/>
                        </datalist>
                        <label htmlFor="image">Image</label>
                    </div>
                    
                    <button className="btn waves-effect waves-light" type="submit" nme="action">Add Product</button>
                </div>  
                </form>
            </div>
        );
    }
}
 
export default SellForm;