import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import image from '@rollup/plugin-image';

export default {
  input: "src/index.ts",
  output: [
    // {
    //   file: "lib/index.esm.js",
    //   format: "cjs",
    //   sourcemap: false,
    // },
    {
      // dir: "lib/esm",
      file: "lib/index.esm.js",
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
