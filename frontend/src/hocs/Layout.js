import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import SideBar from "../components/SideBar";

const layout = (props) => (
  <div>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9">{props.children}</div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
);

export default layout;
