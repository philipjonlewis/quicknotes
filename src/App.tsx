import React, { useEffect, useState } from "react";
import EditorJs from "./components/Editor/EditorJs";

const App = () => {
  const [editorData, setEditorData] = useState({}) as any;
  const [isLoading, setIsLoading] = useState(true) as any;
  
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsLoading(true);
        }}
      >
        Reset
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsLoading(true);

          setEditorData((state) => {
            return {
              time: 1655824878455,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "This is my awesome editor!",
                    level: 1,
                  },
                },
              ],
            };
          });
          setIsLoading(false);
        }}
      >
        Add First Data
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsLoading(true);

          setEditorData((state) => {
            return {
              time: 1655824878455,
              blocks: [
                {
                  type: "header",
                  data: {
                    text: "hello!",
                    level: 1,
                  },
                },
              ],
            };
          });
          setIsLoading(false);
        }}
      >
        Add Second Data
      </button>
      {!isLoading && (
        <EditorJs editorData={editorData} setEditorData={setEditorData} />
      )}
    </div>
  );
};

export default App;
