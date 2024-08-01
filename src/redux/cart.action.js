// THis are action types, they help you define what kind of action is being performed
// writing them this way helps to limit error

// three actions
export const UPDATE_CART_ITEM = "Cart/UPDATE_CART_ITEM";
export const UPDATE_CART_ITEM_QUANTITY = "cart/UPDATE_ITEM_QUANTITY";
export const CLEAR_CART = "cart/CLEAR_CART;";

export const UpdateCartItem = (item) => ({
  type: UPDATE_CART_ITEM,
  item,
});

export const updateCartQuantity = (product, quantity) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  product,
  quantity,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
