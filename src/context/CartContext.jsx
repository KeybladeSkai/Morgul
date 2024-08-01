import { createContext, useReducer, useState } from "react";

// the usereducer hook will listen to the actions we are supposed to dispatch

export const CartContext = createContext();

// const initialState=[]
export const CartContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempState = state.filter((item) => action.payload.id === item.id);

        if (tempState.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "INCREASE":
        // eslint-disable-next-line no-case-declarations
        const tempState2 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });

        return tempState2;

      case "DECREASE":
        // eslint-disable-next-line no-case-declarations
        const tempState3 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });

        return tempState3;

      case "REMOVE":
        const tempState4 = state.filter(
          (item) => item.id !== action.payload.id
        );
        return tempState4;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);
  // const info = { state, dispatch };

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};
