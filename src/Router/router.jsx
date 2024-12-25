import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/LayOuts/MainLayout";
import HomeLayout from "../Components/LayOuts/HomeLayout";
import Login from "../Components/UserSign/Login";
import Register from "../Components/UserSign/Register";
import AddService from "../Components/Add/AddService";
import Private from "./Private";
import Services from "../Components/Services/Services";
import DetailsLayout from "../Components/LayOuts/DetailsLayout";
import MyService from "../Components/MyService/MyService";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addservice',
                element: <Private><AddService></AddService></Private>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/details/:id',
                element: <Private><DetailsLayout></DetailsLayout></Private>,
                loader: ({params})=> fetch(`http://localhost:5000/service/details/${params.id}`)
            },
            {
                path: '/myservice',
                element: <Private><MyService></MyService></Private>
            }
        ]
    },
]);

export default router;