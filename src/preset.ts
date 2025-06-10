import { Config } from "./types/release-script.type";
import { Options } from "semantic-release";

const getReleasePreset = (config?: Readonly<Config>): Options => ({
  branches: [ "master" ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [ "@semantic-release/changelog", { changelogFile: `${ config?.pathToDist ?? "dist/prod" }/CHANGELOG.md` } ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
        pkgRoot: config?.pathToDist ?? "dist/prod"
      }
    ],
    [ "@semantic-release/gitlab", { gitlabUrl: "http://ogs-hq-git.ogs.local" } ]
  ]
});

export { getReleasePreset };

