const path = require("path")
const sslDir = path.resolve(require('os').homedir(), "etc", "ssl")

module.exports = {
  "files": "dist/**/*",
  "watch": true,
  "ignore": [],
  "server": {
    baseDir: "dist",
    index: "index.html"
  },
  // https://qiita.com/masato_makino/items/086603f08e0eff67fba6
  https: {
    key: path.resolve(sslDir, "local-dev.key"),
    cert: path.resolve(sslDir, "local-dev.crt"),
  },
  // "cors": false,
  "reloadDebounce": 500,
  "plugins": []
  // "startPath": "/example"
}