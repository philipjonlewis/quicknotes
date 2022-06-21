// Import React dependencies.
import React, { useState } from "react";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

// TypeScript users only add this code
import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const SlateJs = () => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <div className="container">
      <Slate editor={editor} value={initialValue}>
        <Editable
          onKeyDown={(event) => {
            if (event.key === "&") {
              // Prevent the ampersand character from being inserted.
              event.preventDefault();
              // Execute the `insertText` method when the event occurs.
              editor.insertText("and");
            }
          }}
        />
      </Slate>
    </div>
  );
};

export default SlateJs;
