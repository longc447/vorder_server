class resultMsg{
    statusMap={
        "200":"请求成功",
        "101":"保存成功",
        "401":"删除成功",
        "400":"删除错误，无此数据",
        "201":"更新成功"
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