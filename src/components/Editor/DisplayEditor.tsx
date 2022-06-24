import { useEffect, useState, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./editorTools";
import { firebaseDb } from "../../database/firebaseClient";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const DisplayEditor = ({}: any) => {
  const EDITTOR_HOLDER_ID = "editorjs";
  const ejInstance = useRef() as any;
  const databaseCollectionRef = collection(firebaseDb, "editorJsDocs");
  const [editorData, setEditorData] = useState({}) as any;

  const sampleComponent = {
    userId: 1,
    time: 1,
    blocks: [
      {
        id: 1,
        type: "header",
        data: {
          text: "Your New Document!",
          level: 1,
        },
      },
      {
        id: 2,
        type: "paragraph",
        data: {
          text: "All free!",
        },
      },
    ],
  };

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, [document]);

  const initEditor = async () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
    });
  };

  return (
    <div className="display-editor">
      <div id={EDITTOR_HOLDER_ID}></div>
    </div>
  );
};

export default DisplayEditor;
