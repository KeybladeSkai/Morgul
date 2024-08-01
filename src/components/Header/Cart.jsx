"use client";
import babe from "./../../assets/cart/babe.png"

import { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = ({ open, setOpen }) => {
  const GlobalState = useContext(CartContext);

  const state = GlobalState.state;
  const dispatch = GlobalState.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const formattedTotal = total.toLocaleString();
  console.log(dispatch);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-[1000]">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex justify-between h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div className="flex-1 gap-12 flex flex-col  justify-between overflow-y-scroll px-4 pt-6 pb-2 sm:px-6">
                  <div className="flex gap-10 flex-col">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>{" "}
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {state.map((product) => (
                          <li key={product.id} className="flex py-6 cartItem ">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={product.img}
                                src={product.img}
                                className="h-full w-full object-contain objectr"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.color}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex gap-4 justify-center items-center cursor-pointer">
                                  <button
                                    onClick={() => {
                                      if (product.quantity > 1) {
                                        dispatch({
                                          type: "DECREASE",
                                          payload: product,
                                        });
                                      } else {
                                        dispatch({
                                          type: "REMOVE",
                                          payload: product,
                                        });
                                      }
                                    }}
                                    className="text-xl"
                                  >
                                    -
                                  </button>

                                  <p className="text-gray-500">
                                    {product.quantity}
                                  </p>

                                  <button
                                    onClick={() =>
                                      dispatch({
                                        type: "INCREASE",
                                        payload: product,
                                      })
                                    }
                                    className="text-xl"
                                  >
                                    +
                                  </button>
                                </div>

                                <div className="flex">
                                  <button
                                    onClick={() => {
                                      dispatch({
                                        type: "REMOVE",
                                        payload: product,
                                      });
                                    }}
                                    type="button"
                                    className="font-medium hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {state.length < 1 ? (
                    <div className="flex flex-col gap-2 justify-center items-center h-full">
                      
                      <img src={babe} className="w-[200px]"
                      />
                      <p className="font-bold md:text-xl ">
                        No item in your cart 
                      </p>
                      <p className="text-sm">
                        visit the{" "}
                        <Link to="/newCollection">
                          <span className="underline font-bold">store</span>
                        </Link>
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col gap-2 border-t border-gray-200 px-2 py-2 sm:px-1">
                        <div className="mt-4 flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          {state.length > 0 && <p>N{formattedTotal}</p>}
                        </div>
                        <p className="text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-2">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-[#ffff00;] px-6 py-3 text-base font-medium text-black shadow-sm hover:bg-black
                      hover:text-white"
                          >
                            Checkout
                          </a>
                        </div>
                        <div className="mt-2 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{" "}
                            <button
                              type="button"
                              onClick={() => setOpen(false)}
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
export default Cart;
