/* NPM packages */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

/* CSS */

import styles from './AdminOrders.module.css';

/* action creators */

import { getAllOrdersForAdmin } from '../Actions/orders.js';

class AdminOrders extends Component {
  componentDidMount = () => {
    let { token, email } = this.props.user;
    this.props.getOrders({ admin: { email, token } });
  };

  getDevisedStateFromProps = (newProps) => {
    if (this.props !== newProps) {
      console.log('changed');
      let { token, email } = this.props.user;
      this.props.getOrders({ admin: { email, token } });
    }
  };

  render() {
    let { orders } = this.props;
    console.log(orders.orders);
    return (
      <>
        <h2>Customer Orders</h2>
        {orders.orders.map((order) => (
          <div className={styles.adminorderdetails}>
            <div className={styles.orderdetails}>
              <span>ID: {order._id}</span>
              <span>Date: {order.dateOfOrder.split(' ')[0]}</span>
              <span>
                Paid : <FontAwesomeIcon icon={faCheck} />
              </span>
            </div>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    user: state.user.user,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (data) => dispatch(getAllOrdersForAdmin(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrders);
