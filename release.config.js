module.exports = {
  "branches": ["main"],
  "plugins": [
      ["@semantic-release/commit-analyzer", {
          "releaseRules": [
              { "type": "chore", "scope": "deps", "release": "patch" },
              { "type": "docs", "scope": "README", "release": "patch" },
          ]
      }],
      "@semantic-release/release-notes-generator",
      "@semantic-release/changelog",
      ["@semantic-release/npm", {
          "pkgRoot": "dist/",
          "tarballDir": "release"
      }],
      "@semantic-release/github",
      "@semantic-release/git"
  ],
};
