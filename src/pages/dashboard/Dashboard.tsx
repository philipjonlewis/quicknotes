import React, { useState, useEffect } from "react";
import EditorComponent from "../../components/editor/EditorComponent";
import { DashboardNavbar } from "../../components";
import { firebaseDb } from "../../database/firebaseClient";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../database/firebaseClient";


const Dashboard = () => {
  const [documentList, setDocumentList] = useState([]) as any;
  const [userId, setUserId] = useState("") as any;

  const [newDocument, setNewDocument] = useState({
    userId: userId,
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
  }) as any;

  const databaseCollectionRef = collection(firebaseDb, "editorJsDocs");

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser: any) => {
      const getDocuments = async () => {
        const dbQuery = query(
          databaseCollectionRef,
          where("userId", "==", currentUser.uid)
        );

        const data = await getDocs(dbQuery);

        setDocumentList(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };

      getDocuments();

      console.log("hi", currentUser);
      setUserId(currentUser.uid);
    });
  }, []);

  // useEffect(() => {

  //   const getDocuments = async () => {
  //     const data = await getDocs(databaseCollectionRef);
  //     setDocumentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getDocuments();
  // }, []);

  const addNewDocument = async () => {
    await addDoc(collection(firebaseDb, "editorJsDocs"), {
      ...newDocument,
      userId,
    });
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
