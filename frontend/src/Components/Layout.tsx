import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ImgUpload from "../pages/ImgUpload";
import GetStarted from "../pages/GetStarted";

const Layout: React.FC = () => {

  return (
    <>

      
    
       <Outlet />
      
      
    </>
  );
};

export default Layout;
