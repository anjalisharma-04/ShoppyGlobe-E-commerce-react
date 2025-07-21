import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity } from '../utils/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state =>
    state.cart.cartItem.find(item => item._id === (product._id || product.id))
  );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: product._id || product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
  };

  return (
    <div className="w-64 bg-white shadow-md rounded-xl overflow-hidden">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">₹ {product.price}</p>

        {/* Show + / - buttons if item is in cart */}
        {cartItem ? (
          <div className="flex items-center mt-2">
            <button
              onClick={() => dispatch(decrementQuantity(cartItem._id))}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              –
            </button>
            <span className="px-4">{cartItem.quantity}</span>
            <button
              onClick={() => dispatch(incrementQuantity(cartItem._id))}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
