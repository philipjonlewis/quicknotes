export default {
    input: 'src/index.js',
    output: {
      dir: 'output',
      format: 'cjs'
    },
    plugins: [nodeResolve()]
  };