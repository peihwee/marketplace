import React from 'react';
import axios from 'axios';

class SignUpForm extends React.Component {
    submitForm(event)
    {
        event.preventDefault();

        axios.post('api/users', {
            name: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value
        })
        .then((response) => {

            console.log(response);

            if(response.data.header == "Error")
            {
                
            }
            else
            {
                window.open("/login", "_self");
            }
            
            
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() { 
        return ( 
            <div>
                <h2>Sign Up</h2>
                <form className="col s12" onSubmit={this.submitForm.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12 m6">
                        <input id="username" type="text" className="validate"/>
                        <label htmlFor="username">Name</label>
                        </div>
                        <div className="input-field col s12 m6">
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
                    <button className="btn waves-effect waves-light" type="submit" nme="action">Sign Up</button>
                </form>
            </div>
        );
    }
}
 
export default SignUpForm;