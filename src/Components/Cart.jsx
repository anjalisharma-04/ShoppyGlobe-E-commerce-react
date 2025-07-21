import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { removeCart } from '../utils/cartSlice';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const cartItem = useSelector(state => state.cart.cartItem || []);
  const dispatch = useDispatch();

  useEffect(() => {
    // Safe check: only run reduce if cartItem is an array
    if (Array.isArray(cartItem)) {
      setTotal(
        cartItem.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)
      );
    }
  }, [cartItem]);

  const removeProduct = (id) => {
    dispatch(removeCart(id));
  };

  return (
    <>
      {Array.isArray(cartItem) && cartItem.length > 0 ? (
        <div className='bg-white w-full p-5 flex md:flex-row flex-col justify-center gap-4'>
          {/* Cart Items */}
          <div className='md:w-1/2 w-full flex flex-col gap-2'>
            {cartItem.map((product) => (
              <CartItem
                key={product._id}
                product={product}
                removeItem={removeProduct}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div id='rightPart' className='bg-gray-100 p-5 md:w-96 w-full h-fit'>
            <h1 className='font-base text-xl'>Order Summary</h1>
            <ul className='mt-5 space-y-2'>
              <li className='font-base text-medium'>
                Total Products: {cartItem.length}
              </li>
              <li className='font-base text-medium'>
                Sub Total: $ {total.toFixed(2)}
              </li>
              <li className='font-base text-medium'>Tax: $ 3.00</li>
              <li className='font-base text-medium'>
                Total Amount: $ {(total + 3).toFixed(2)}
              </li>
            </ul>
            <Link to='/checkout'>
              <button className='w-full bg-blue-500 text-white font-normal py-2 px-4 mt-4 hover:bg-blue-600 transition-all'>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p className='font-normal text-lg text-black text-center mt-5'>
          Your cart is empty
        </p>
      )}
    </>
  );
};

export default Cart;
