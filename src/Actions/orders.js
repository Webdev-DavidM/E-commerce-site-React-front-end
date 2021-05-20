import axios from 'axios';

export const getAllOrdersForAdmin = ({ admin }) => {
  console.log(admin);
  return async (dispatch) => {
    dispatch({ type: 'ORDER_SENT' });
    try {
      let res = await axios({
        method: 'get',
        url: `https://my-ecommerce-site-fitness.herokuapp.com/adminuser/allorders`,

        headers: {
          token: admin.token,
          email: admin.email,
        },
      });
      if (res.status === 200) {
        console.log(res.data);
        dispatch({ type: 'ADMIN_ALL_USER_ORDERS_SUCCESS', orders: res.data });
      }
    } catch (err) {
      if (err.request && err.request.status === 0) {
        dispatch({
          type: 'ORDER_FAIL',
          error: 'Network error, please try again',
        });
      }
    }
    // dispatch({ type: 'ORDER_FAIL', error: err});
  };
};

export const sendOrderToServer = (orderInfo) => {
  return async (dispatch) => {
    dispatch({ type: 'ORDER_SENT' });
    try {
      let response = await axios({
        method: 'post',
        url: `https://my-ecommerce-site-fitness.herokuapp.com/orders/new-order`,
        data: {
          orderInfo,
        },
        headers: {
          token: orderInfo.token,
        },
      });
      if (response.status === 201) {
        dispatch({ type: 'ORDER_SUCCESS', products: response.data });
      }
    } catch (err) {
      if (err.request && err.request.status === 0) {
        dispatch({
          type: 'ORDER_FAIL',
          error: 'Network error, please try again',
        });
      }
    }
    // dispatch({ type: 'ORDER_FAIL', error: err.response.data });
  };
};

export const getIndividualOrder = (orderId) => {
  return async (dispatch) => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    dispatch({ type: 'ORDER_SENT' });
    try {
      let response = await axios({
        method: 'get',
        url: `https://my-ecommerce-site-fitness.herokuapp.com/orders/order/${orderId}`,

        headers: {
          token: userInfo.token,
          userId: userInfo.id,
        },
      });
      if (response.status === 200) {
        dispatch({ type: 'INDIVDUAL_ORDER_SUCCESS', order: response.data });
      }
    } catch (err) {
      dispatch({ type: 'ORDER_FAIL', error: err.response.data });
    }
  };
};

export const getOrdersForUser = ({ token, user }) => {
  return async (dispatch) => {
    dispatch({ type: 'ORDER_SENT' });
    try {
      let response = await axios({
        method: 'get',
        url: `https://my-ecommerce-site-fitness.herokuapp.com/orders/${user}`,
        headers: {
          token: token,
        },
      });
      if (response.status === 200) {
        dispatch({ type: 'ORDER_LIST_RECEIVED', orders: response.data });
      }
    } catch (err) {
      dispatch({ type: 'ORDER_FAIL', error: err });
    }
  };
};

export const closeModal = () => {
  return { type: 'CLOSE_MODAL' };
};
