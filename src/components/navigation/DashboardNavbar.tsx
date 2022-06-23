import React from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ documentList, addNewDocument }: any) => {
  return (
    <div className="dashboard-navbar">
      <Link to={"/"}>Home</Link>
      <button onClick={addNewDocument}>Add New</button>
      <div>
        {documentList.map((doc) => {

          return <div>{doc.blocks[0].data.text}</div>;
        })}
      </div>
    </div>
  );
};

export default DashboardNavbar;
