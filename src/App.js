/* NPM Packages */
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LandingPage from './Pages/LandingPage';
import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import { CSSTransition } from 'react-transition-group';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import PrivateRoute from './Components/PrivateRoute';
import AdminRoute from './Components/AdminRoute.js';

/* Css */

import './App.css';

/* Action creators */

import { isTokenValid, logUserOut } from './Actions/users.js';
import { addToBasket, emptyBasket } from './Actions/products.js';

// Here I am using lazy loading which is code splitting which will only loads components when needed and
// hopefully should speed up my application

const Account = lazy(() => import('./Pages/Account'));
const AdminProducts = lazy(() => import('./Pages/AdminProducts'));
const AdminOrders = lazy(() => import('./Pages/AdminOrders'));
const SignIn = lazy(() => import('./Pages/SignIn'));
const SignUp = lazy(() => import('./Pages/SignUp'));
const Product = lazy(() => import('./Pages/Product'));
const ShoppingBasket = lazy(() => import('./Pages/ShoppingBasket'));
const MainCategory = lazy(() => import('./Pages/MainCategory'));
const NotFound = lazy(() => import('./Components/NotFound'));
const Products = lazy(() => import('./Pages/Products'));
const OrderDetails = lazy(() => import('./Pages/OrderDetails'));
const AdminEditProduct = lazy(() => import('./Pages/AdminEditProduct'));
const AdminCreateProduct = lazy(() => import('./Pages/AdminCreateProduct'));
const Checkout = lazy(() => import('./Pages/Checkout'));

class App extends Component {
  state = {
    showArrowToTop: false,
    userTokenExpired: false,
  };

  // Below I will check if a user is signed in and if so then i will check if the token is valid, if not they will be logged out

  componentDidUpdate = (newProps) => {
    if (newProps.userSignedIn) {
      let authenticatedUser = isTokenValid();

      if (!authenticatedUser && this.props.user.signedIn) {
        this.setState({ userTokenExpired: true });
        this.props.logOut();
        let localStorageItems = Object.keys(localStorage);
        localStorageItems.forEach((item) => {
          //Below I clear any items in local storage for the basket
          let re = /^item/;
          if (re.test(item) === true) {
            localStorage.removeItem(item);
          }
        });
        // below i am clearing the basket in redux
        this.props.clearBasket();

        //I will update state to show the user their session has expired and they need to log back in to purchase
        // or if admin make changes
      }
    }
  };

  tokenExpired = () => {
    this.setState({ userTokenExpired: true });
  };

  componentDidMount = () => {
    // This code below is used to check where the user is on the screen, is there have scrolled down
    // and cant see the nav bar anymore, an arrow will appear in the bottom right hand corner
    // which cant be clicked and take them back to the top

    window.addEventListener('scroll', () => {
      if (window.scrollY > 122) {
        this.setState({ showArrowToTop: true });
      }
      if (window.innerHeight - 122 < window.innerHeight - window.scrollY) {
        this.setState({ showArrowToTop: false });
      }
      //The function below checks if there is jwt token in local storage and if so it will check if it is still
      // valid
    });

    // in here I need to make a back-end call which gets all the categories and sub categories and puts them into
    //redux so this can be used by the category menus

    let { basket, addBasket } = this.props;
    // here we check if there is something in the basket which means the user has come
    // from the product screen, if so then add to local storage
    if (basket.length !== 0) {
      let localStorageItems = Object.keys(localStorage);
      localStorageItems.map((item) => {
        return item !== 'userInfo' && localStorage.removeItem(`${item}`);
      });
      basket.map((item, index) => {
        return localStorage.setItem(`item${index}`, JSON.stringify(item));
      });
    }

    let authenticatedUser = isTokenValid();

    if (authenticatedUser) {
      this.props.addAuthenticateduserToRedux(authenticatedUser);
    }

    // here we check if the page has been refreshed and there is nothing in the basket, if there
    // is an item in local storage then dispatch it to be added to basket in redux so it can populate this screen
    let localStorageItems = Object.keys(localStorage);
    let itemsFromLocalStorage = localStorageItems.filter((item) => {
      // I found a bug where another one of my websites was also storing local storage which crashed my app, so now I
      // I am using regExp below to make sure that it is an item I am adding to the basket and not someone elses local
      // storage items
      let re = /^item/;
      return re.test(item) === true;
    });

    if (basket.length === 0 && itemsFromLocalStorage)
      // Here I will store the basket in local storage and reload if the user refreshes the page,
      // I am mapping over the array and adding each item at a time which is what the reducer is expecting
      itemsFromLocalStorage.map((item) => {
        let parsedItem = JSON.parse(localStorage.getItem(item));
        return addBasket(parsedItem);
      });
  };

  render() {
    return (
      <div>
        <div className='App'>
          {this.props.loadingUser ||
          this.props.loadingProducts ||
          this.props.loadingOrders ? (
            <div className={'generic-loading-container'}>
              <CircularProgress
                style={{
                  color: '#f1c40f',
                  size: '4rem',
                }}></CircularProgress>
            </div>
          ) : null}

          {this.state.userTokenExpired && (
            <div className='signin-modal'>
              <div className='signin-popup'>
                <span>
                  Your logged in session has expired, please log back in
                </span>
                <button
                  className='closebtn'
                  onClick={() => this.setState({ userTokenExpired: false })}>
                  Ok
                </button>
              </div>
            </div>
          )}

          <Router basename={`${process.env.PUBLIC_URL}`}>
            <Navbar />
            <Suspense
              fallback={
                <div className='spinner-container'>
                  <CircularProgress
                    style={{
                      color: '#f1c40f',
                      size: '4rem',
                    }}></CircularProgress>
                </div>
              }>
              <Switch>
                <Route exact path='/' component={LandingPage} />
                {/* {below will redirect the user to the sign in screen if they click on the 
                account button and dont have one} */}
                <Route exact path='/sign-in' component={SignIn} />
                <Route exact path='/sign-up/:email' component={SignUp} />
                <Route exact path='/run' component={MainCategory} />
                <Route exact path='/cycle' component={MainCategory} />
                <Route exact path='/swim' component={MainCategory} />
                <Route exact path='/product/:id' component={Product} />
                <Route
                  exact
                  path='/shopping-basket'
                  component={ShoppingBasket}
                />

                <PrivateRoute
                  exact
                  path='/account'
                  component={Account}></PrivateRoute>
                <PrivateRoute
                  exact
                  path='/check-out'
                  component={Checkout}></PrivateRoute>

                <Route
                  exact
                  path='/order/:id'
                  render={() => {
                    let authenticatedUser = isTokenValid();
                    return authenticatedUser ? (
                      <OrderDetails />
                    ) : (
                      <Redirect to='/' />
                    );
                  }}
                />

                <AdminRoute
                  exact
                  path='/admin'
                  component={AdminProducts}></AdminRoute>
                <AdminRoute
                  exact
                  path='/admin/create'
                  component={AdminCreateProduct}></AdminRoute>

                <Route
                  exact
                  path='/admin/product/:id'
                  render={() => {
                    let authUser = isTokenValid();
                    if (authUser && authUser.admin) {
                      return <AdminEditProduct />;
                    } else {
                      <Redirect to='/' />;
                    }
                  }}></Route>
                <AdminRoute
                  exact
                  path='/admin-orders'
                  component={AdminOrders}></AdminRoute>
                <Route
                  exact
                  path='/:category/:type/:subcat'
                  component={Products}
                />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </div>
        <CSSTransition
          in={this.state.showArrowToTop}
          onClick={() => window.scrollTo(0, 0)}
          timeout={500}
          classNames='menuarrow'
          unmountOnExit>
          <div className='menuarrow'>
            <i className='fas fa-arrow-circle-up'></i>
          </div>
        </CSSTransition>
      </div>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingUser: state.user.loading,
    loadingProducts: state.products.loading,
    loadingOrders: state.orders.loading,
    adminUser: state.user.user.admin,
    userSignedIn: state.user.signedIn,
    basket: state.products.basket,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logUserOut()),
    addAuthenticateduserToRedux: (user) =>
      dispatch({ type: 'LOGIN_SUCCESS', user: user }),
    addBasket: (item) => dispatch(addToBasket(item)),
    clearBasket: () => dispatch(emptyBasket()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
