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

const EditorComponent = ({ document }: any) => {
  const EDITTOR_HOLDER_ID = "editorjs";
  const ejInstance = useRef() as any;
  const databaseCollectionRef = collection(firebaseDb, "editorJsDocs");
  const [editorData, setEditorData] = useState({}) as any;

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, [document]);

  const updateData = async (id: any, content: any) => {
    const documentDoc = doc(firebaseDb, "editorJsDocs", id);

    updateDoc(documentDoc, { blocks: content });
  };

  // useEffect(() => {
  //   updateData(editorData);
  // }, [editorData]);

  const initEditor = async () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      //   logLevel: "ERROR",
      data: await document,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async (api, event) => {
        // console.log(this);
        let content = await editor.save();
        // console.log(document);
        console.log(content);
        await updateData(await document.id, await content.blocks);
        // Put your logic here to save this data to your DB
        setEditorData((state: any) => ({ ...state, content: content }));
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
    });
  };

  return (
    <div className="editor">
      <div id={EDITTOR_HOLDER_ID}></div>
    </div>
  );
};

export default EditorComponent;
