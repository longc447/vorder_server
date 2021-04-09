const express = require("express");
let route = express.Router();
const menuModel = require("../model/menu");
route.get("/", async (req, res) => {
    // res.send("/menu get")
    console.log("进来了")
    try {
        const menus=await menuModel.query({})
        // res.send()
        res.status(200).json(menus)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})
 
route.post("/", async (req, res) => {
    // res.send("/menu post")
    console.log(req.body)
    try {
        // let newMenu = await menuModel.insert({
        //     "name":"四喜丸子",
        //     "pic":""
        // })
        res.status(201).json(newMenu)
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})


module.exports = route;