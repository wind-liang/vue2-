const path = require("path");
module.exports = {
    entry: "./11.Vue2剥丝抽茧-响应式系统之watch/data.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    devServer: {
        static: path.resolve(__dirname, "./dist"),
    },
};
