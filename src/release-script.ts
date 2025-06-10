#!/usr/bin/env node

import childProcess from "node:child_process";

let stdoutBuffer;

try {
  stdoutBuffer = childProcess.execSync("pnpm run script:build:version");
} catch {
  process.exit(1);
}

const stdout = stdoutBuffer.toString();

// eslint-disable-next-line no-console
console.log(stdout);

const noReleaseAts = [ "so no new version is released", "therefore a new version won’t be published" ];
const includesNoRelease = noReleaseAts.map((noReleaseAt) => stdout.includes(noReleaseAt))
  .reduce((previousValue: boolean, currentValue: boolean): boolean => {
    const value = previousValue || currentValue;

    return value;
  }, false);

process.exit(includesNoRelease ? 1 : 0);

