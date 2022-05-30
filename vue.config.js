const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
    transpileDependencies: true,
    pages: {
        index: {
            entry: "src/main.js",
            title: "오늘은 몇주차?",
        },
    },
})
