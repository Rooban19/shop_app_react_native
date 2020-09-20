export const ADD_ORDER = 'ADD_ORDER_';

export const addOrder = (cartItems, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: {
      items: cartItems,
      amount: totalAmount,
    },
  };
};