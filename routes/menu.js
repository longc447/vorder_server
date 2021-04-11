const express = require("express");
let route = express.Router();
const menuModel = require("../model/menu");
const resultMsg =require("../config/resultMsg");

route.get("/", async (req, res) => {
    try {
        const menus=await menuModel.query({})
        res.status(200).json(menus)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})
 
route.post("/", async (req, res) => {
    try {
        let newMenu = await menuModel.insert(req.query)
        res.status(200).json(resultMsg.get(101,newMenu))
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})


module.exports = route;