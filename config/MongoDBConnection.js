const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "vorder";
let _db = null;
async function connetDb() {
    if (!_db) {
        try {
            const client = new MongoClient(url, { useUnifiedTopology: true });
            await client.connect();
            _db = await client.db(dbName);
        } catch (error) {
            throw "链接数据库出错"
        }
    }
    return _db;
}

exports.getCollection = collection => {
    let _col = null;
    return async () => {
        if (!_col) {
            try {
                const db = await connetDb();
                _col = await db.collection(collection);
            } catch (error) {
                throw "选择 collection 出错"
            }
        }
        return _col;
    }
}