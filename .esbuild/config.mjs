import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';
import fastGlob from "fast-glob";
import { packageJsonPlugin } from "esbuild-plugin-package-json";

const config = {
  bundle: true,
  platform: "node",
  target: "node23",
  format: "esm",
  packages: "external",
  logLevel: "debug",
  outExtension: { ".js": ".mjs" },
  entryPoints: fastGlob.sync("./src/**/*.ts"),
  plugins: [
    esbuildPluginFilePathExtensions({ esm: true }),
    packageJsonPlugin()
  ],
  treeShaking: true
};

export { config };
