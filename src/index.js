import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import CategoriesStateProvider from "./State/CategoriesState";
import ProductsStateProvider from "./State/ProductState";
import { AuthProvider } from "./State/AuthContext";
import { ApiCallStateProvider } from "./State/ApiCallState";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApiCallStateProvider>
        <AuthProvider>
          <ProductsStateProvider>
            <CategoriesStateProvider>
              <App />
            </CategoriesStateProvider>
          </ProductsStateProvider>
        </AuthProvider>
      </ApiCallStateProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
