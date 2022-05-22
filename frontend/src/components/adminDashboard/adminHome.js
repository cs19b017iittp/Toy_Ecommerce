import React from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

const AdminHome = () => {
  return (
    <div>
      <Navbar />
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
