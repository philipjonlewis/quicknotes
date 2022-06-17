import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "vite-plugin-mdx";
// https://vitejs.dev/config/

// `options` are passed to `@mdx-js/mdx`
const options = {
  // See https://mdxjs.com/advanced/plugins
  remarkPlugins: [
    // E.g. `remark-frontmatter`
  ],
  rehypePlugins: [],
};

export default defineConfig({
  plugins: [react(), mdx(options)],
});
