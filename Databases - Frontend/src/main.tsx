import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Admin from './routes/admin-view.tsx';
import Staff from './routes/staff-view.tsx';
import Root from './routes/root.tsx';
import ErrorPage from './error-page.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicView from './routes/public-view.tsx';



const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "public",
      element: <PublicView />
    },
    {
      path: "admin",
      element: <Admin />
    },
    {
      path: "staff",
      element: <Staff />
    }
  ]

}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
