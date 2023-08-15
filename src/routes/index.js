import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
  {
    path: "",
    element: lazy(() => import("../template/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("../pages/Home")),
      },
      {
        path: "contact",
        element: lazy(() => import("../pages/Contact")),
      },
      {
        path: "news",
        element: lazy(() => import("../pages/News")),
      },
      {
        path: "detail/:id",
        element: lazy(() => import("../pages/Detail")),
      },
    ],
  },
  {
    path: "register",
    element: lazy(() => import("../pages/Register")),
  },
  {
    path: "login",
    element: lazy(() => import("../template/UserTemplate")),
  },
  {
    path: "checkout/:id",
    element: lazy(() => import("../template/CheckoutTemplate")),
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
