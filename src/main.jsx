import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import PrivateRoute from './components/PrivateRoute';
import './index.css';
import AddCraft from "./pages/AddCraft/AddCraft";
import AllArtCraft from './pages/AllArtCraft/AllArtCraft';
import CraftItemDetails from './pages/CraftItemDetails/CraftItemDetails';
import EachCategoryCraftItems from './pages/EachCategoryCraftItems/EachCategoryCraftItems';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyArtCraft from "./pages/MyArtCraft/MyArtCraft";
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import UpdateCraft from './pages/UpdateCraft/UpdateCraft';
import AuthProvider from './providers/AuthProvider';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <NotFound></NotFound>,
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
                element: <AllArtCraft></AllArtCraft>,
                loader: () => fetch("http://localhost:3000/craftItems")
            },
            {
                path: "/add-craft-item",
                element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
            },
            {
                path: "/my-art-and-craft-list",
                element: <PrivateRoute><MyArtCraft></MyArtCraft></PrivateRoute>
            },
            {
                path: "/craftItemDetails/:id",
                element: <PrivateRoute><CraftItemDetails></CraftItemDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/craftItemDetails/${params.id}`)
            },
            {
                path: "/update-craft-item/:id",
                element: <UpdateCraft></UpdateCraft>,
                loader: ({ params }) => fetch(`http://localhost:3000/craftItemDetails/${params.id}`)
            },
            {
                path: "/eachCategoryCraftItems/:subcategory",
                element: <EachCategoryCraftItems></EachCategoryCraftItems>,
                loader: ({ params }) => fetch(`http://localhost:3000/subcategoryItems/${params.subcategory}`)
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
