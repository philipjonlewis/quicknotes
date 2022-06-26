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

  useEffect(() => {
    if (!ejInstance.current && document.userId !== 1) {
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

  const initEditor = async () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,

      data: await document,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async (api, event) => {
        let content = await editor.save();
        console.log(content);
        await updateData(await document.id, await content.blocks);
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
