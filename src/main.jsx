import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Community from './pages/Community.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Search from './pages/Search.jsx';
import Cart from './pages/Cart.jsx';
import Help from './pages/Help.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/help",
    element: <Help />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
