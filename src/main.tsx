import "./index.css";
import React from "react";
import router from "./routes/routers";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <CookiesProvider>
      <HelmetProvider>
        <Helmet>
          <title>My weather APP</title>
          <link
            rel="shortcut icon"
            href="./src/assets/logos/watherApp_Logo.png"
            type="image/x-icon"
          />
        </Helmet>
      </HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);
