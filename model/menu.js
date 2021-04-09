const menuCollection = require("../config/MongoDBConnection").getCollection("menu")
class menuModel {
    constructor() {
        this.result=null;
    }
    async insert(menu) {
        console.log(menu)
        try {
            const col = await menuCollection();
            const result = await col.insertOne(menu);
            return result.pos && result.ops[0];
        } catch (error) {
            throw "添加文章到数据库出错"
        }
    }
    async query(menu) {
        try {
            const col = await menuCollection();
            return await col.find(menu).toArray()
            // .toArray((err, result) => {
            //     if (err) throw err;
            //     this.result=result;
            //     console.log(result,this.result,this)
            // });
            // console.log(result,this.result)
        } catch (error) {
            throw "查询这里报错了"
        }
    }
}
module.exports=new menuModel();