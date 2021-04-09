const express = require("express");
const app = express();
const port = 5000;

const routes = require("./routes")
routes(app);

app.listen(port, () => {
    console.log("app 服务运行呢")
})