import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Home from "./components/chat/Home";
import RequireAuth from "./components/hoc/RequireAuth";
import ForgotPassword from "./components/auth/ForgotPassword";
import UpdatePassword from "./components/auth/UpdatePassword";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className={"container"}>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<RequireAuth>{<Home />}</RequireAuth>} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />{" "}
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/updatePassword" element={<UpdatePassword />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
