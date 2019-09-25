import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

import pkg from "./package.json";

export default (async () => ({
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
    { file: pkg.umd, format: "umd", name: "autocomplete" }
  ],
  plugins: [
    resolve(),
    commonjs(),
    (await import("rollup-plugin-terser")).terser()
  ]
}))();