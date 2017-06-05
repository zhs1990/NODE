<template>
    <div id="detail">
        <h3>欢迎来到详情页</h3>
        <div class="panel panel-warning">
            <div class="panel-warning">
                <div class="panel-header">
                    <!--书名: <span>{{book.}}</span>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
          return {id:null,book:{bookname:"",bookcover:"",price:""}}
        },
        beforeMount() {
            this.id = this.$route.params.id;//得到从列表页传递过来的id
            this.$http.get("/books?id="+this.id).then(function(res){
                this.book = res.body;
                this.book
            }).catch(function(err){
                console.log(err);
            });
        }
    }
</script>