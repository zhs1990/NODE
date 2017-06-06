<template>
    <div id="add">
        <h3>图书增加页</h3>
        <form>
            <div class="form-group">
                <label for="name">书名</label>
                <input type="text" class="form-control" id="name" v-model="book.bookname">
            </div>
            <div class="form-group">
                <label for="cover">封面</label>
                <input type="text" class="form-control" id="cover" v-model="book.bookcover">
            </div>
            <div class="form-group">
                <label for="price">价格</label>
                <input type="text" class="form-control" id="price" v-model="book.price">
            </div>
            <button class="btn btn-primary" @click="add">确认增加</button>
        </form>
    </div>
</template>
<script>
    export default {
        name:"add",
        data(){
            return {book:{
                bookname:"",
                bookcover:"",
                price:""
            }}
        },
        methods:{
            add(){
                this.$http.post("/book",this.book).then(function (data) {
                    this.$router.push("/list");
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }
    }
</script>