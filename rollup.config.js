import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import { readFileSync } from 'fs';

const chunkArray = readFileSync("./src/index.ts", "utf8")
  .split("\n") // -> all lines
  .filter((line) => line.includes(" from ")) // -> lines which export something
  .map((line) => {
    if (line) {
      const reg = new RegExp(/.* from ('|")(\.\/|~)?(.*)('|").*/g);
      const result = reg.exec(line);
      if (result && !result[3].includes(".component")) {
        const fileName = `src/${result[3]}/index.ts`;
        return fileName;
      }
    }
  })
  .filter((v) => v !== undefined); // -> module paths

const input = {};

chunkArray.forEach((path) => {
  const name = path // 'yolo/FooBar'
    .split("/"); // -> ['yolo', 'FooBar']
  input[name[name.length - 2]] = path;
});

console.log(input);

export default {
  input: {
    index: "src/index.ts",
    ...input,
  },
  output: [
    {
      dir: "lib/esm",
      format: "esm",
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    image(),
    resolve({ browser: true }),
    commonjs({ ignore: "**/*.stories.tsx" }),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".css"],
    }),
  ],
  external: ["styled-components"],
};
