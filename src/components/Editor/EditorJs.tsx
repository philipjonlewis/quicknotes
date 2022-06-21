import { useEffect, useState, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from "./editorTools";

const EditorJs = ({ editorData, setEditorData }: any) => {
  const EDITTOR_HOLDER_ID = "editorjs";
  const ejInstance = useRef() as any;
  // const [editorData, setEditorData] = useState({}) as any;

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, [editorData]);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      //   logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async (api, event) => {
        // console.log(this);
        let content = await editor.save();
        console.log(content);
        // Put your logic here to save this data to your DB
        // setEditorData((state: any) => ({ ...state, content: content }));
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

export default EditorJs;
