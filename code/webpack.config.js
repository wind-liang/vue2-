const path = require("path");
module.exports = {
    entry: "./13.Vue2剥丝抽茧-响应式系统之computed/data.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    devServer: {
        static: path.resolve(__dirname, "./dist"),
    },
};
