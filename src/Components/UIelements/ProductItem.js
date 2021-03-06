/* NPM packages */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

/* CSS */

import styles from './ProductItem.module.css';

class ProductItem extends Component {
  state = {
    stars: [1, 2, 3, 4, 5],
  };
  render() {
    let {
      images,
      _id,
      name,
      price,
      stock,
      rating,
      subcategory,
    } = this.props.details;
    let mainImage = images[0];
    // The bikes are the only images which are rectangular so require modified css //
    let adjustWidthForBikes =
      subcategory === 'Mountain bikes' ||
      subcategory === 'Hybrid bikes' ||
      subcategory === 'Road bikes'
        ? styles.bikeimagewidthadjust
        : styles.productimage;
    return (
      <div className={styles.productitem}>
        <div>
          <Link to={`/product/${_id}`}>
            {' '}
            <img
              className={`${adjustWidthForBikes}`}
              src={`https://my-ecommerce-site-fitness.herokuapp.com/${mainImage}`}
              alt=''
            />
          </Link>
        </div>
        <div className={styles.productdetails}>
          <div>
            <Link to={`/product/${_id}`} style={{ textDecoration: 'none' }}>
              <p className={styles.name}>{name}</p>
            </Link>
            <p className={styles.price}>£{price}</p>
            <div className={styles.stars}>
              {name &&
                this.state.stars.map((star, index) => {
                  let colour = star <= rating ? '#f1c40f' : '#2c3e50';
                  return (
                    <span
                      key={`productItem${index}`}
                      style={{ color: `${colour}` }}>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  );
                })}
            </div>
            {stock === 0 && (
              <h2 className={styles.outofstock}>Sorry out of stock</h2>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
