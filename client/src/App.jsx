import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateAccount from "./pages/createAccount";
import Login from "./pages/login";
import ConnectFb from "./pages/connectFb";
import DisconnectFb from "./pages/disconnectFb";
import Chat from "./pages/chat";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {


  return (


    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/sign-in" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/connect" element={<ConnectFb />} />
          <Route path="/disconnect" element={<DisconnectFb />} />
          <Route path="/" element={<Chat />} />
        </Route>




        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

  );
};

export default App;