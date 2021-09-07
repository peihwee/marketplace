import React from 'react';
import JSON from 'json5';

class NavControl extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            
        }
    }
    render()
    {
        let bLogin = true;
        let bUser;
        
        if(localStorage.getItem('user') == null)
        {
            bLogin = false;
        }
        else 
        {
            bUser = JSON.parse(localStorage.getItem('user'));
            console.log("userid"+localStorage.getItem('user'));
        }

        let objSellButton;
        let objLoginButton;
        let objLogoutButton;
        if (bLogin) 
        {
            objSellButton = <li><a href="/sell">Sell</a></li>
            objLoginButton = <li><a href="/viewAcct">{bUser.name}</a></li>
            objLogoutButton = <li><a href="/logout">Logout</a></li>
        } 
        else 
        {
            objSellButton = null;
            objLoginButton = <li><a href="/login">Login</a></li>
        }

        return(
            <ul id="nav-mobile" className="right">
                {objSellButton}
                {objLoginButton}
                {objLogoutButton}
            </ul>
        );
    }
}

export default NavControl;