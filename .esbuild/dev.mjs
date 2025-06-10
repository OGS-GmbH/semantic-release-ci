import { config } from "./config.mjs";
import esbuild from "esbuild";

const preparedConfig = {
  outdir: "dist/dev",
  sourcemap: "external"
};
const context = await esbuild.context(
  ...config,
  ...preparedConfig
);

context.watch();

