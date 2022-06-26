import React, { useState, useEffect, useContext } from "react";
import EditorComponent from "../../components/editor/EditorComponent";
import { firebaseDb } from "../../database/firebaseClient";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  onSnapshot,
  Unsubscribe,
  orderBy,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../database/firebaseClient";
import {
  ChevronLeftIcon,
  CogIcon,
  DocumentAddIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { AuthStore } from "../../state/AuthContext";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

import DocumentList from "../../components/editor/DocumentList";

const Dashboard = () => {
  const auth = useContext(AuthStore) as any;

  const authId = auth.uid;
  const d1 = new Date().getTime();
  const [documentList, setDocumentList] = useState([]) as any;
  const [activeDocument, setActiveDocument] = useState({});
  const [newDocument, setNewDocument] = useState({
    userId: auth.uid,
    time: d1,
    blocks: [
      {
        id: uuidv4(),
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
    let unsub: Unsubscribe;
    const getDocuments = async () => {
      const dbQuery = query(
        databaseCollectionRef,
        where("userId", "==", auth.uid),
        orderBy("time", "desc")
      );

      const unsubscribe = onSnapshot(dbQuery, (querySnapshot) => {
        const newDocumentList = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setDocumentList(() => newDocumentList);
        // setActiveDocument(newDocumentList[0]);
      });

      unsub = unsubscribe;

      // const data = await getDocs(dbQuery);

      // setDocumentList(
      //   data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      // );
    };

    getDocuments();

    return () => {
      unsub();
    };
  }, []);

  const addNewDocument = async () => {
    await addDoc(collection(firebaseDb, "editorJsDocs"), {
      ...newDocument,
      authId,
    });
  };

  return (
    <div className="dashboard-page">
      <div className="main-container">
        <div className="dashboard-navbar">
          <Link to={"/"}>
            <ChevronLeftIcon height={24} strokeWidth={2} />
          </Link>
          <Link to={"/account"}>
            <CogIcon height={24} strokeWidth={2} />
          </Link>
        </div>
        <div className="workspace-container">
          <div className="list-container">
            <div className="add-doc-container">
              {" "}
              <div className="add-btn-container" onClick={addNewDocument}>
                <DocumentAddIcon height={24} strokeWidth={2} />
              </div>
            </div>
            <div className="list-proper">
              {documentList.length >= 1 && (
                <DocumentList
                  documentList={documentList}
                  setActiveDocument={setActiveDocument}
                  activeDocument={activeDocument}
                />
              )}
            </div>
          </div>
          <div className="editor-container">
            {!_.isEmpty(activeDocument) && (
              <EditorComponent document={activeDocument} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
