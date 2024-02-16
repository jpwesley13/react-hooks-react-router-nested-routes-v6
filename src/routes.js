import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />, //"Now that all of our routes are children of App, we can just include our errorElement on App — any errors that occur in one of our nested routes will "bubble up" to the parent route, which will render our ErrorPage. Much DRYer!""
        children: [
          {
             path: "/",
             element: <Home />,
             children: [
                 {
                     path: "/profile/:id",
                     element: <UserProfile />
                 }
             ]
         }, 
         {
             path: "/about",
             element: <About />
         },
         {
             path: "/login",
             element: <Login />
            }
        ]
    }
];

export default routes;