import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { AppStatusProvider } from "./context/AppStatusContext";
import { AuthenticationProvider } from "./context/AuthContext";
import Routes from "./Routes";

const Main: React.FC = () => (
  <AppStatusProvider>
    <AuthenticationProvider>
      <Router>
        <Routes />
      </Router>
    </AuthenticationProvider>
  </AppStatusProvider>
);

export default Main;
