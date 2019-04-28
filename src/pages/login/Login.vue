<template>
  <div class="login" @click="login">
点击登录
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
      login:function(){
          localStorage.setItem('token',true)
          if(this.$route.query.redirect){
            let redirect = this.$route.query.redirect;
            this.$router.push(redirect);
        }else{
            this.$router.push('/');
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
