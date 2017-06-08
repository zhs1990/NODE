<template>
  <div id="app">
    <div class="container">
      <login></login>
    </div>

  </div>
</template>

<script>
import {Login} from "./components/index.js"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      Login
  }
}
</script>
