import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountPage from "../pages/AccountPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />}></Route> */}
      <Route path="/account" element={<AccountPage/>}></Route>
    </Routes>
  );
};
export default AppRoutes;
