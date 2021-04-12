class paging{
    get(list,pageIndex,pageSize){
        return list.skip(pageIndex*pageSize).limit(pageSize).toArray();
    }
}
module.exports=new paging();