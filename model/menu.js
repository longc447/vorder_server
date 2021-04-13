const menuCollection = require("../config/MongoDBConnection").getCollection("menu");
const {  ObjectId } = require("bson");
const paging = require("../config/paging");
class menuModel {
    constructor() {
        this.result = null;
        this.col = null;
        this.getCollection();
    }
    async getCollection() {
        this.col = await menuCollection();
    }
    async update(oldData,newData){
        console.log(oldData,newData)

        delete newData._id
        try {
            const result=await this.col.updateOne(oldData,{$set:newData})
            return result.ops[0];
        } catch (error) {
            throw "更新menu到数据库出错"
        }
    }
    async insert(menu) {
        console.log(menu, "添加成功")
        try {
            const result = await this.col.insertOne(menu);
            return result.ops[0];
        } catch (error) {
            throw "添加menu到数据库出错"
        }
    }
    async query(menu) {
        try {
            let list = await this.col.find(menu)
            return await paging.get(list, 0, 10);
        } catch (error) {
            throw "查询这里报错了"
        }
    }
    async delete(id) {
        let query=await this.query({_id:ObjectId(id)});
        console.log(query[0],"删除成功")
        try {
            let result=await this.col.deleteOne({_id:ObjectId(id)})
            // let result = await this.col.deleteMany([
            //     { _id: "60737c903a57d0d422e8ad6c", name: "清炒油麦菜", detail: "香甜可口", tag: "热销" }, 
            //     { _id: "60737c9c3a57d0d422e8ad6d", name: "清炒油麦菜", detail: "香甜可口", tag: "热销" }
            // ])
            return JSON.stringify(result.deletedCount)>0
        } catch (error) {
            throw "删除这里报错了"
        }
    }
}
module.exports = new menuModel();