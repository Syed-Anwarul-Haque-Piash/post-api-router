import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Posts from './components/Posts/Posts';
import SinglePost from './components/SinglePost/SinglePost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children :[
      {
        path :"about",
        element: <About></About>,
      },
      {
        path: "posts",
        element: <Posts></Posts>,
        loader: ()=>fetch("https://jsonplaceholder.typicode.com/posts")
      },
      {
        path: "post/:id",
        element: <SinglePost></SinglePost>,
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      },
      {
        path :"contact",
        element:<Contact></Contact>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
