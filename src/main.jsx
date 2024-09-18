import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Page1 from './pages/Page1.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';
import Page4 from './pages/Page4.jsx';

// Wrapper component that includes Navbar and Outlet (for rendering routed pages)


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:
      [
        {path:"page1",element:<Page1/>},
        {path:"page2",element:<Page2/>},
        {path:"page3",element:<Page3/>},
        {path:"page4",element:<Page4/>},
      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
