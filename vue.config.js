const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === "production" ? "/nth-week-today/" : "/",
    assetsDir: "../dist/",
    pages: {
        index: {
            entry: "src/main.js",
            title: "오늘은 몇주차?",
        },
    },
})
