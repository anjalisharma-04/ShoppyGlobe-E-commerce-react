import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store/store.jsx';
import { AuthProviderr } from './context/authContext.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProviderr>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviderr>
  </Provider>,
)
