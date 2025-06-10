import { config } from "./config.mjs";
import esbuild from "esbuild";

const preparedConfig = { outdir: "dist/prod" };

await esbuild.build({
  ...config,
  ...preparedConfig
});

