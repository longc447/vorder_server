const menu = require("./menu")
module.exports = app => {
    app.use('/api/menu',menu);
}