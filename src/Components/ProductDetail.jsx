import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { useFetch } from "../utils/useFetch";
import { addToCart } from "../utils/cartSlice";
import PopUp from "./PopUp";
import Loading from "./Loading";

const ProductDetail = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [product, setProduct] = useState({});

  const { productData, loading, error } = useFetch(`http://localhost:5000/api/product/product/${productId}`);

  useEffect(() => {
    if (productData) {
      setProduct(productData);
    }
  }, [productData]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAddedToCart(true);
    setShowPopup(true);

    // hide popup after 2 seconds
    setTimeout(() => setShowPopup(false), 2000);
  };

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-xl font-medium p-4">Error: {error}</p>;

  return (
    <div className="min-h-screen p-4">
      {showPopup && <PopUp />}

      <div className="flex flex-col md:flex-row md:justify-center gap-6 mt-5 md:mt-10">
        {/* Product Image */}
        <div className="md:w-3/12 w-full bg-gray-100 rounded p-4">
          <img
            src={product?.image ? `http://localhost:5000/image/${product.image}` : "/placeholder.png"}
            alt={product?.name || "Product"}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 w-full space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold">{product.name}</h1>
          <p className="text-gray-500 text-base">{product.description}</p>

          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-black">${product.price}</p>
            {/* Future discount label */}
            {/* <span className="text-xs bg-green-100 border border-green-300 rounded-full px-3 py-1">Off {product.discountPercentage}%</span> */}
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <button
              className="bg-blue-500 text-white px-6 py-3 rounded text-sm font-medium"
              onClick={handleAddToCart}
            >
              {isAddedToCart ? "Go to cart" : "Add to cart"}
            </button>
            <button className="bg-amber-500 text-white px-6 py-3 rounded text-sm font-medium">
              Wishlist
            </button>
          </div>

          {/* Optional: Additional Info */}
          {/*
          <div className="mt-6">
            <ul className="space-y-2 text-sm">
              <li><strong>Brand:</strong> {product.brand}</li>
              <li><strong>Stock:</strong> {product.stock}</li>
              <li><strong>Weight:</strong> {product.weight} gms</li>
              <li><strong>Dimensions:</strong> {product.dimensions ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}` : "N/A"}</li>
            </ul>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
