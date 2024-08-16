import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import AddCraft from "./pages/AddCraft/AddCraft";
import AllArtCraft from './pages/AllArtCraft/AllArtCraft';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyArtCraft from "./pages/MyArtCraft/MyArtCraft";
import Register from './pages/Register/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/all-art-and-craft-items",
                element: <AllArtCraft></AllArtCraft>
            },
            {
                path: "/add-craft-item",
                element: <AddCraft></AddCraft>
            },
            {
                path: "/my-art-and-craft-list",
                element: <MyArtCraft></MyArtCraft>
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
