import React from "react";
import EditorComponent from "../components/editor/EditorComponent";
import { DashboardNavbar } from "../components";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNavbar />
      <EditorComponent />
    </div>
  );
};

export default Dashboard;
