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
          {
            id: "3",
            type: "checklist",
            data: {
              items: [
                {
                  text: "Task One",
                  checked: true,
                },
                {
                  text: "Task two",
                  checked: false,
                },
              ],
            },
          },
          {
            id: "4",
            type: "code",
            data: {
              code: "const hello = require(`hello`)",
            },
          },
        ],
      },
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async (api, event) => {
        let content = await editor.save();
        console.log(content);
      },
      autofocus: true,
      tools: EDITOR_JS_TOOLS,
    });
  };

  return <div id={EDITTOR_HOLDER_ID}></div>;
};

export default DisplayEditor;
