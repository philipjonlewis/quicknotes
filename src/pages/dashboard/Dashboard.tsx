import React, { useState, useEffect } from "react";
import EditorComponent from "../../components/editor/EditorComponent";
import { DashboardNavbar } from "../../components";
import { firebaseDb } from "../../database/firebaseClient";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Dashboard = () => {
  const [documentList, setDocumentList] = useState([]) as any;
  const [newDocument, setNewDocument] = useState({
    time: 1550498186479,
    blocks: [
      {
        id: "5367821",
        type: "header",
        data: {
          text: "New Document",
          level: 2,
        },
      },
    ],
    version: "2.8.1",
  }) as any;
  const databaseCollectionRef = collection(firebaseDb, "documents");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(databaseCollectionRef);
      setDocumentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const addNewDocument = async () => {
    await addDoc(databaseCollectionRef, newDocument);
  };

  return (
    <div className="dashboard">
      <button onClick={addNewDocument}>Add New Document</button>
      <DashboardNavbar />
      {documentList[0] && <EditorComponent documentList={documentList[0]} />}
    </div>
  );
};

export default Dashboard;
