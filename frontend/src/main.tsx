import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./context/userContext";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./Components/Layout";
import Dashboard from "./pages/Dashboard";
import DocumentEditor from "./pages/DocumentEditor";
import DocumentManagement from "./pages/DocumentManagement";
import DocumentTracking from "./pages/DocumentTracking";
import HelpandSupport from "./pages/HelpandSupport";

import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import UserSetting from "./pages/UserSetting";
import GetStarted from "./pages/GetStarted";
import "./index.css";
import ImgUpload from "./pages/ImgUpload";
import RegisterModal from "./pages/SignUp";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GetStarted />} />
            <Route path="login" element={<Login closeModal={() => { } } openRegisterModal={function (): void {
              throw new Error("Function not implemented.");
            } } />} />
            <Route path="signup" element={<RegisterModal closeModal={() => {}}  />} />
            <Route path="profile/:id" element={<UserProfile />} />
            <Route path="profile/:id/setting" element={<UserSetting />} />
            <Route path="profile/:id/dashboard" element={<Dashboard />} />
            <Route path="help" element={<HelpandSupport />} />
            <Route path="document" element={<DocumentManagement />} />
            <Route path="document-track" element={<DocumentTracking />} />
            <Route path="editor" element={<DocumentEditor />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

