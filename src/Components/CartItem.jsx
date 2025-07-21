import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeCart } from '../utils/cartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem);

  if (!cartItem || cartItem.length === 0) {
    return <p className="text-center">Your cart is empty</p>;
  }

  return (
    <div className="space-y-4">
      {cartItem.map((product) => (
        <div key={product._id} className="flex justify-between items-center bg-white p-3 rounded shadow-md">
          <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-sm text-gray-500">₹ {product.price}</p>
            <div className="flex items-center mt-2">
              <button onClick={() => dispatch(decrementQuantity(product._id))} className="px-2 py-1 border">-</button>
              <span className="px-4">{product.quantity}</span>
              <button onClick={() => dispatch(incrementQuantity(product._id))} className="px-2 py-1 border">+</button>
            </div>
          </div>
          <button
            onClick={() => dispatch(removeCart(product._id))}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
