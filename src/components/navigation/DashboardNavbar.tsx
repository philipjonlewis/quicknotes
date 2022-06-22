import React from "react";
import { Link } from "react-router-dom";
const DashboardNavbar = () => {
  return (
    <div className="dashboard-navbar">
      {" "}
      <Link to={"/"}>Home</Link>
    </div>
  );
};

export default DashboardNavbar;
