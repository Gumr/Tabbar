<template>
  <div class="home">home</div>
</template>


<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  },
  mounted(){
    console.log(process.env.BASE_API)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@body-color: blue;
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
  color: @body-color;
}
.home{
  color: @body-color;
}
</style>
