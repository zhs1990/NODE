<template>
  <div id="app">
    <div id="header">
      <ul>
        <li v-for="item in title" :class="{active:flag===item}" @click="flag=item"><a href="javascript:;">{{item}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        title:["自动推送","手动推送"],
        flag:"自动推送"
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
}
html,body{
  font-size:20px;
  font-family:微软雅黑;
}
a{
  text-decoration: none;
}
#header{
  height:2.2rem;
  background:#1c2532;
  padding-top:1rem;
}
#header ul{
  width:80%;
  height:100%;
  margin:0 auto;
  overflow: hidden;
}
#header li{
  width:50%;
  float:left;
  text-align: center;
  color:#fff;
  font-size:0.8rem;
  line-height:2.2rem;
}
#header li a{
  color:#fff;
  display: inline-block;
  line-height:2rem;
  padding:0 0.5rem;
}
#header li.active a{
  border-bottom:4px solid #ff3333;
  color:#ff3333;
}
</style>
