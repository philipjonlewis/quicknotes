import React, { useEffect, useState, useContext } from "react";
import { AuthStore } from "../../state/AuthContext";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { firebaseDb } from "../../database/firebaseClient";
import { deleteDoc } from "firebase/firestore";
import { TrashIcon } from "@heroicons/react/outline";
const DocumentList = ({ documentList, setActiveDocument, activeDocument }) => {
  const auth = useContext(AuthStore) as any;
  // const [documentList, setDocumentList] = useState([]) as any;

  // const databaseCollectionRef = collection(firebaseDb, "editorJsDocs");

  // useEffect(() => {
  //   const getDocuments = async () => {
  //     const dbQuery = query(
  //       databaseCollectionRef,
  //       where("userId", "==", auth.uid)
  //     );

  //     const unsubscribe = onSnapshot(dbQuery, (querySnapshot) => {
  //       setDocumentList(
  //         querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //       );
  //     });
  //   };

  //   getDocuments();
  // }, []);

  if (!auth.status) {
    return <div> Log In</div>;
  }

  const deleteDocument = async (docId: any) => {
    confirm("Are you sure you want to delete this document?");
    const document = doc(firebaseDb, "editorJsDocs", docId);
    console.log(document);
    await deleteDoc(document);

    if (activeDocument.id == docId) {
      setActiveDocument({});
    }
  };

  return (
    <>
      {documentList.length >= 1 &&
        documentList.map((doc: any) => {
          return (
            <div className="item-container" key={doc.id}>
              <div
                className={
                  activeDocument.id == doc.id
                    ? "list-item active-doc"
                    : "list-item "
                }
                onClick={() => {
                  setActiveDocument(doc);
                }}
              >
                <p>
                  {" "}
                  {doc.blocks[0]?.data.text.slice(0, 20)}<span>...</span>
                </p>
              </div>
              <div
                className="delete-document-button"
                onClick={() => {
                  deleteDocument(doc.id);
                }}
              >
                <TrashIcon height={20} strokeWidth={2} />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default DocumentList;
