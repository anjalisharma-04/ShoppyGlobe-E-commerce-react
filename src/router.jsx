import { createBrowserRouter } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import App from './App';
import Home from './Pages/Home/Home';
import Error from './Components/Error';
import Loading from './Components/Loading';

const Products = lazy(() => import('./Pages/ProductPage/Products'));
const ProductDetail = lazy(() => import('./Components/ProductDetail'));
const CartPage = lazy(() => import('./Pages/Cart/CartPage'));
const Checkout = lazy(() => import('./Components/Checkout/Checkout'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: 'products/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: 'cart',
        element: (
          <Suspense fallback={<Loading />}>
            <CartPage />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
  {
    path: '/checkout',
    element: (
      <Suspense fallback={<Loading />}>
        <Checkout />
      </Suspense>
    ),
    errorElement: <Error />,
  },
]);

export default router;
