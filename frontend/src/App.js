import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import HomeScreen from './screens/HomeScreen.js';
import SellScreen from './screens/SellScreen.js';
import LoginScreen from './screens/LoginScreen.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  
  componentDidMount() {
    const url = 'api/products';

    axios.get(url)
      .then((Response) => {
        this.setState({
          
        })
      })
      .catch((error)=>{
        console.log(error);
      })
  }
  
  
  render () {
    return (
      <div className="app container-fluid">
          <nav>
              <div className="nav-wrapper blue darken-1">
                <a href="/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right">
                  <li><a href="/sell">Sell</a></li>
                  <li><a href="/login">Login</a></li>
                </ul>
              </div>
          </nav>
          <main>
            <div className="container">
              <BrowserRouter>
                <Route path="/" component={HomeScreen} exact></Route>
                <Route path="/sell" component={SellScreen} exact></Route>
                <Route path="/login" component={LoginScreen} exact></Route>
              </BrowserRouter>
            </div>
          </main>
          <footer>
              <p className="page-footer center blue darken-1">© 2021, Siah Peih Wee, All Rights Reserved</p>
          </footer>
        </div>
      
    );
  }
}

export default App;