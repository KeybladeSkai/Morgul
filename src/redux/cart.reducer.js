import {
  CLEAR_CART,
  UPDATE_CART_ITEM,
  UPDATE_CART_ITEM_QUANTITY,
} from "../redux/cart.action";

// reducers help manage the state of the cart based on the actions
const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, action) => {
  // two arguments are provided a state and an action
  switch (action.type) {
    case CLEAR_CART:
      return initialState;

    case UPDATE_CART_ITEM:
      const item = action.item;

      if (item & (item.quantity > 0)) {
        const index = state.items.findIndex(
          (item) => item.product._id === item.product._id
        );
        const newItems = [...state.items];
        if (index !== -1) {
          newItems[index] = { ...item };
          return { ...state, items: newItems };
        } else {
          newItems.push({ ...item });
        }
        return { ...state, items: newItems };
      } else {
        const items = state.items.filter(
          (it) => it.product._id !== item.product._id
        );
        return { ...state, items };
      }
    case UPDATE_CART_ITEM_QUANTITY:
      const quantity = action.quantity;
      const product = action.product;

      if (quantity === 0) {
        const items = state.items.filter(
          (it) => it.product._id !== product._id
        );
        return { ...state, items };
      } else {
        const index = state.items.findIndex(
          (it) => it.product._id === product._id
        );
        if (index !== -1) {
          const newItems = [...state.items];
          const item = { ...state.items[index], quantity };
          newItems[index] = { ...item };
          return { ...state, items: newItems };
        } else {
          // pass, should never happen
        }
      }
      return state;

    default:
      return state;
  }
};
