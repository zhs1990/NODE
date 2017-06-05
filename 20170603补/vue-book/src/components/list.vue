<template>
    <div id="list">
        <h3>图书列表页</h3>
        <div class="col-md-3" v-for="item in books">
            <div class="panel panel-warning">
                <div class="panel-heading">
                    书名：<span>{{item.bookname}}</span>
                </div>
                <div class="panel-body">
                    <img :src="item.bookcover" alt="">
                </div>
                <div class="panel-footer">
                    价格：<span>{{item.price}}</span>
                    <router-link :to="{name:'detail',params:{id:item.id}}">详情</router-link>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"list",
        //组件挂载前请求数据
        data(){
            return {books:null}
        },
        beforeMount:function(){
            this.$http.get("/book").then(function(data){
                this.books = data.body;
            }).catch(function(err){
                console.log(err);
            });
        }
    }
</script>
<style lang="css" scoped>
    #list img{
        width:150px;
        height:180px;
    }
</style>