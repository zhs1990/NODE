<template>
    <div id="detail">
        <h3>欢迎来到详情页</h3>
        <div class="panel panel-warning">
            <div class="panel-warning">
                <div class="panel-heading">
                    书名: <span v-show="!flag">{{book.bookname}}</span>
                    <input type="text" v-model="book.bookname" v-show="flag">
                </div>
                <div class="panel-body">
                    <img :src="book.bookcover" alt="">
                </div>
                <div class="panel-footer">
                    价格: <span v-show="!flag">{{book.price}}</span>
                    <input type="text" v-model="book.price" v-show="flag">
                    <button type="button" class="btn btn-warning" @click="flag=!flag" v-show="!flag">修改</button>
                    <button type="button" class="btn btn-danger" v-show="!flag" @click="del">删除</button>
                    <button type="button" class="btn btn-primary" v-show="flag" @click="update">确认修改</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
          return {
              id:null,
              book:{bookname:"",bookcover:"",price:""},
              flag:false
          }
        },
        beforeMount() {
            this.id = this.$route.params.id;//得到从列表页传递过来的id
            this.$http.get("/book?id="+this.id).then(function(res){
                this.book = res.body;
            }).catch(function(err){
                console.log(err);
            });
        },
        methods:{
            update:function(){
                this.$http.put("/book",this.book).then(function(res){
                    console.log(res);
                    this.$router.push("/list");
                }).catch(function (err) {
                    console.log(err);
                });
            },
            del:function () {
                console.log(this.id);
                this.$http.delete("/book?id="+this.id).then(function (data) {
                    this.$router.push("/list");
                    console.log(data);
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }
    }
</script>