const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "/nth-week-today/",
    assetsDir: "../dist/assets",
    outputDir: "dist",
    pages: {
        index: {
            entry: "src/main.js",
            filename: "index.html",
            title: "오늘은 몇주차?",
        },
    },
})
