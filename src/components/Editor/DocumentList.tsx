import React, { useEffect, useState, useContext } from "react";
import { AuthStore } from "../../state/AuthContext";
import { doc } from "firebase/firestore";
import { firebaseDb } from "../../database/firebaseClient";
import { deleteDoc } from "firebase/firestore";
import { TrashIcon } from "@heroicons/react/outline";
import sanitizeHtml from "sanitize-html";

const DocumentList = ({
  documentList,
  setActiveDocument,
  activeDocument,
}: any) => {
  const auth = useContext(AuthStore) as any;

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

  const titleCleaner = (dirty: any) => {
    const clean = sanitizeHtml(dirty, {
      allowedTags: [],
      allowedAttributes: {
        // a: ["href"],
      },
      allowedIframeHostnames: [],
    }).replace(/[^a-zA-Z0-9]/g, " ");
    return clean;
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
                  {titleCleaner(doc.blocks[0]?.data.text.slice(0, 20))}
                  <span>...</span>
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
