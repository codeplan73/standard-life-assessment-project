import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import IndexPage from "./pages/IndexPage";
import { Login, Register } from "./pages";
import PrivateRoute from "./components/PrivateRoute";
import Homepage from "./pages/auth/Homepage";
import {
  CreatePostPage,
  PreviewPostPage,
  ShowPostPage,
  PublishPostPage,
} from "./pages/auth/posts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<IndexPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/home" element={<Homepage />} />
        <Route path="/posts/create" element={<CreatePostPage />} />
        <Route path="/posts/preview" element={<PreviewPostPage />} />
        <Route path="/posts/show" element={<ShowPostPage />} />
        <Route path="/posts/publish" element={<PublishPostPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
