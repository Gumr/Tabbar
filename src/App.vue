<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar v-if="tabbarShow"></Tabbar>
    <div class="empty"></div>
  </div>
</template>
 
<script>
import Tabbar from'./components/tabbar'
export default {
  name: 'app',
  created:function(){
    // this.$router.push('/')
  },
  components:{
    Tabbar
  },
  //监听,当路由发生变化的时候执行
  watch:{
    $route(to,from){
      //判断是否显示tabbar
      if(to.path == '/' || to.path == '/home' || to.path == '/classify' || to.path == '/cart' || to.path == '/my'){
        this.$store.commit('updateTabbarShow',true);
      }else{
        this.$store.commit('updateTabbarShow',false);
      }

    }
 },
 computed: {
    tabbarShow(){
      return this.$store.getters.getTabbarShow
    }
  },
}
</script>

 