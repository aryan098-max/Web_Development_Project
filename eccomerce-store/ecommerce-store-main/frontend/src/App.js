import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import { Navbar } from 'react-bootstrap';
import { Person, Cart4, Heart, Shop } from "react-bootstrap-icons";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };


  
  return (
    <BrowserRouter>
      <div className="grid-container">
      
        <header className="header" style={{}}>
          <div className="brand">
            <button onClick={openMenu} style={{color: "#2a2a2a"}}>&#9776;</button>
            <Navbar.Brand>
          <Link className="text-decoration-none" exact to="/">
          <a className="text-decoration-none" style={{color: "orange", fontWeight: "600"}}><Shop
                    style={{
                      height: "20px",
                      width: "20px",
                    }}
                  /></a>
          </Link>
        </Navbar.Brand>
          </div>
          <div className="header-links">
            {/* <a href="cart.html">Cart</a> */}
            <a className="text-decoration-none" style={{color: "#2a2a2a", fontWeight: "600" }} href="cart.html"><Cart4
                    style={{
                      height: "20px",
                      width: "20px",
                    }}
                  /></a>
            {userInfo ? (
              <Link to="/profile"><Person
              style={{
                height: "20px",
                width: "20px",
              }}
            />{userInfo.name}
            </Link>  
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a>Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Mobiles">Mobiles</Link>
            </li>

            <li>
              <Link to="/category/Laptops">Laptops</Link>
            </li>

            <li>
              <Link to="/category/Smartwatches">Smart Watches</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
