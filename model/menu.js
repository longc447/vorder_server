// class menu{
//     constructor(){

//     }
// }
// module.exports=new menu();

const menuCollection = require("../config/MongoDBConnection").getCollection("menu")

exports.save = async (menu) => {
    console.log(menu)
    try {
        const col = await menuCollection();
        const result = await col.insertOne(menu);
        return result.pos && result.ops[0];
    } catch (error) {
        throw "添加文章到数据库出错"
    }
}

exports.find = async (menu) => {
    try {
        const col = await menuCollection();
        const result = await col.find(menu).toArray((err, result)=>{
            if (err) throw err;
            console.log(result);
        });
        // console.log(result)
        return result;
    } catch (error) {

    }
}