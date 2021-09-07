import React from 'react';
import axios from 'axios';

class SellForm extends React.Component {
    submitProduct(event)
    {
        event.preventDefault();
        let bUser = JSON.parse(localStorage.getItem('user'));
        axios.post('api/products', {
            name: event.target.name.value,
            description: event.target.description.value,
            image: event.target.image.value,
            price: event.target.price.value,
            seller: bUser.name,
            sellerid: bUser._id,
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
                        <input id="name" type="text"/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="description" type="text"/>
                        <label htmlFor="description">description</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="price" type="text"/>
                        <label htmlFor="price">Price</label>
                    </div>
                    <div className="input-field col s6">
                        <input list="images-list" id="image"/>
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