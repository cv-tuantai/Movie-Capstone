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
