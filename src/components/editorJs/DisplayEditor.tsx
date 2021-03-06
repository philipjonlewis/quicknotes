import { useEffect, useState, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./editorTools";

const DisplayEditor = () => {
  const EDITTOR_HOLDER_ID = "displayEditorJs";
  const ejInstance = useRef() as any;

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  const initEditor = async () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      data: {
        time: 1,
        blocks: [
          {
            id: "1",
            type: "header",
            data: {
              text: "Your New Document!",
              level: 3,
            },
          },
          {
            id: "2",
            type: "paragraph",
            data: {
              text: "All free!",
            },
          },
        ],
      },
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
    });
  };

  return <div id={EDITTOR_HOLDER_ID}></div>;
};

export default DisplayEditor;
