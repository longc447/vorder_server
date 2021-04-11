class resultMsg{
    statusMap={
        "200":"请求成功",
        "101":"保存成功"
    }
    get(code,data){
        return {
            code:code||"",
            data:data||{},
            msg:this.statusMap[code]||""
        }
    }
}
module.exports=new resultMsg();