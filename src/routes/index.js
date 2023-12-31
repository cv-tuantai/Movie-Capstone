import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "",
    element: lazy(() => import("../pages/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/HomeTemplate/Home")),
      },
      {
        path: "contact",
        element: lazy(() => import("../pages/HomeTemplate/Contact")),
      },
      {
        path: "news",
        element: lazy(() => import("../pages/HomeTemplate/News")),
      },
      {
        path: "detail/:id",
        element: lazy(() => import("../pages/HomeTemplate/Detail")),
      },
    ],
  },
  {
    path: "register",
    element: lazy(() => import("../pages/UserTemplate/Register")),
  },
  {
    path: "login",
    element: lazy(() => import("../pages/UserTemplate")),
  },
  {
    path: "profile",
    element: lazy(() => import("../pages/UserTemplate/Profile")),
  },
  {
    path: "checkout/:id",
    element: lazy(() => import("../pages/CheckoutTemplate")),
  },
  {
    path: "admin",
    element: lazy(() => import("../pages/AdminTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/AdminTemplate/Films")),
      },
      {
        path: "add-film",
        element: lazy(() => import("../pages/AdminTemplate/Films/AddFilm")),
      },
      {
        path: "edit-film/:id",
        element: lazy(() => import("../pages/AdminTemplate/Films/EditFilm")),
      },
      {
        path: "showtime/:id",
        element: lazy(() => import("../pages/AdminTemplate/Films/Showtime")),
      },
      {
        path: "users",
        element: lazy(() => import("../pages/AdminTemplate/Users")),
      },
      {
        path: "add-user",
        element: lazy(() => import("../pages/AdminTemplate/Users/AddUser")),
      },
      {
        path: "edit-user/:id",
        element: lazy(() => import("../pages/AdminTemplate/Users/EditUser")),
      },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
