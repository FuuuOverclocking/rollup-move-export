export default [
  {
    input: "./src/entry.dev.js",
    output: {
      file: "./dist/lib.dev.js",
      format: "cjs",
    },
  },
  {
    input: "./src/entry.prod.js",
    output: {
      file: "./dist/lib.prod.js",
      format: "cjs",
    },
  },
];
