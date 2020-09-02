import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { config } from "./config";
import { AuthenticationProvider } from "./context/AuthContext";
import Routes from "./Routes";

const Main: React.FC = () => (
  <AuthenticationProvider>
    <Router basename={config.app.urlPath}>
      <Routes />
    </Router>
  </AuthenticationProvider>
);

export default Main;
