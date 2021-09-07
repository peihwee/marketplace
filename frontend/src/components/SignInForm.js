import React from 'react';
import axios from 'axios';
import { ReactDOM } from 'react';

import Modal from './Modal.js';

class SignInForm extends React.Component {
    submitForm(event)
    {
        event.preventDefault();

        axios.post('api/signin', {
            email: event.target.email.value,
            password: event.target.password.value
        })
        .then((response) => {
            console.log(response.data);
            if(response.data.header == "Error")
            {
                
            }
            else
            {
                localStorage.setItem('user', JSON.stringify(response.data))
                window.open("/", "_self");
            }
            
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() { 
        return (
            <div>
                <h1>Login</h1>
                <form className="col s12" onSubmit={this.submitForm.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" nme="action">Login</button>
                </form>
                <div>
                    <p>Not a user? Click on Sign Up.</p>
                    <a className="waves-effect waves-light btn-large" href="/signup">Sign Up</a>
                </div>
            </div>
        );
    }
}
 
export default SignInForm;