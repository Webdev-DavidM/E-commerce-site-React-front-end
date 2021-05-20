/* NPM packages */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* CSS */

import styles from './Admin.module.css';

/* Action creators */

import { logUserOut } from '../Actions/users.js';
import {
  getProducts,
  deleteProduct,
  closeDeleteModal,
} from '../Actions/products.js';

class AdminProducts extends Component {
  componentDidMount = () => {
    let { displayCategory } = this.props;
    displayCategory('cycle');
  };

  delete = (id, cat) => {
    let data = { id, admin: this.props.user, cat: cat };
    this.props.deleteProd(data);
  };

  createProduct = () => {
    this.props.history.push('/admin/create');
  };

  chosenCategory = (cat) => {
    let { displayCategory } = this.props;
    displayCategory(cat);
  };

  closeModal = () => {
    this.props.closeModal();
  };

  logOut = () => {
    this.props.logOut();
    this.props.history.push('/');
  };

  render() {
    let { categories, products, deletedModal } = this.props;
    let categoryNames = Object.keys(categories);

    return (
      <div className={styles.adminproducts}>
        {deletedModal && (
          <div className={styles.productmodal}>
            <div className={styles.product}>
              <h2 style={{ textAlign: 'center' }}>
                {' '}
                <i className='fas fa-check'></i>
                &nbsp;Product deleted!
              </h2>

              <button
                className={styles.productbtn}
                onClick={() => this.closeModal()}>
                Ok
              </button>
            </div>
          </div>
        )}
        <header className={styles.title}>
          <p>ADMIN SECTION</p>

          <button
            onClick={() => this.createProduct()}
            className={styles.createbtn}>
            Create product
          </button>
          <button
            onClick={() => this.props.history.push('/admin-orders')}
            className={styles.ordersbtn}>
            View orders
          </button>
          <button onClick={() => this.logOut()} className={styles.logoutbtn}>
            Log out
          </button>
        </header>
        <div className={styles.categorybtns}>
          <p>CATEGORIES</p>
          {categoryNames.map((cat) => (
            <button key={cat} onClick={() => this.chosenCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.productlist}>
          {products.map((product, index) => {
            return (
              <div key={index} className={styles.productitem}>
                <span>Name: {product.name}</span>
                <span>Price: £{product.price}</span>
                <span>Category: {product.subcategory}</span>
                <span>Brand: {product.brand}</span>
                <div className={styles.buttoncontainer}>
                  <button
                    onClick={() =>
                      this.props.history.push(`/admin/product/${product._id}`)
                    }
                    className={styles.editbtn}>
                    Edit
                  </button>
                  <button
                    onClick={() => this.delete(product._id, product.category)}
                    className={styles.deletebtn}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    categories: state.products.categories,
    user: state.user.user,
    deletedModal: state.products.productDeletedModal,
    chosenCat: state.products.chosenCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayCategory: (cat) => dispatch(getProducts(cat)),
    logOut: () => dispatch(logUserOut()),
    deleteProd: (id) => dispatch(deleteProduct(id)),
    closeModal: () => dispatch(closeDeleteModal()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminProducts)
);
