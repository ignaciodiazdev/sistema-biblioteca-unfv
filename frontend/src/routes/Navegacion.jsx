import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import routesUser from "./routes.user";
import ProtectedRouteAdmin from "../utils/ProtectedRouteAdmin";
import ProtectedRouteUser from "../utils/ProtectedRouteUser";
import { Error404 } from "../pages/Error";
import { ErrorLayout } from "../layouts";
import { Login } from "../pages/Auth";
import { useApp } from "../hooks";

export const Navegacion = () => {
  const { auth } = useApp();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {routesClient.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.page />
              </route.layout>
            }
          />
        ))}

        {routesUser.map((route, index) => (
          <Route key={index} element={<ProtectedRouteUser auth={auth} />}>
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.page />
                </route.layout>
              }
            />
          </Route>
        ))}

        {routesAdmin.map((route, index) => (
          <Route key={index} element={<ProtectedRouteAdmin auth={auth} />}>
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.page />
                </route.layout>
              }
            />
          </Route>
        ))}

        <Route
          path="*"
          element={
            <ErrorLayout>
              <Error404 />
            </ErrorLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
