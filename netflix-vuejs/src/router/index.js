import Home from "../components/Home";
import Login from "../components/Login";
import Movies from "../components/Movies";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Movies",
    name: "Movies",
    component: Movies,
  },
];
