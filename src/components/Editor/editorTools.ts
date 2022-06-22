// @ts-nocheck

// tools.js
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Code from "@editorjs/code";

import Header from "@editorjs/header";

import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";

export const EDITOR_JS_TOOLS = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  embed: Embed,
  table: Table,
  list: List,
  code: Code,
  header: Header,
  marker: Marker,
  checklist: CheckList,
};
