const express = require("express");
let route = express.Router();
const menuModel = require("../model/menu");
const resultMsg = require("../config/resultMsg");

route.get("/", async (req, res) => {
    try {
        const menus = await menuModel.query({})
        res.status(200).json(menus)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})

route.post("/", async (req, res) => {
    try {
        let newMenu = await menuModel.insert(req.query)
        res.status(200).json(resultMsg.get(101, newMenu))
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})
route.put("/", async (req, res) => {
    console.log("put",req.query)
    try {
        let menu =await menuModel.update({"_id":req.query._id},req.query)
        res.status(200).json(resultMsg.get(201,menu))
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})
route.delete("/:id", async (req, res) => {
    // console.log(req.query.id)
    try {
        let result = await menuModel.delete(req.params.id);
        res.status(200).json(resultMsg.get(result ? 401 : 400))
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})


module.exports = route;