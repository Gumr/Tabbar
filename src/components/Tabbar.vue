<template>
	<div class="tabberWarp" >
		<div class="warp">
			<Item :txt='item.txt' :page='item.page' @change='getVal' v-for='item in tabbarDes':sel='selected'>
 
				<img :src="item.normalImg" slot='normalImg'>
				<img :src="item.activeImg" slot='activeImg'>
			</Item>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Item from './Item.vue'
	export default{
		components:{
			Item
		},
		data:function(){
			return{
				selected:'skin',
				tabbarDes:[
					{
						txt:'首页',
						page:'home',
						normalImg:require('../assets/images/01.png'),
						activeImg:require('../assets/images/02.png')
						
					},				
					{
						txt:'分类',
						page:'classify',
						normalImg:require('../assets/images/03.png'),
						activeImg:require('../assets/images/04.png')
					},
					{
						txt:'购物车',
						page:'cart',
						normalImg:require('../assets/images/05.png'),
						activeImg:require('../assets/images/06.png')
					},
					{
						txt:'我的',
						page:'my',
						normalImg:require('../assets/images/07.png'),
						activeImg:require('../assets/images/08.png')
					},
				]
			}
		},
		methods:{
			getVal:function(res){
				this.selected = res;
			}
		}
	}
</script>
<style type="text/css">
	.warp{
		width: 100%;
		border-top: 1px solid #eee;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 0;
	}
	.warp img{
		width: 20px;
		height: 20px;
	}
	.tabberWarp img{
		margin-top: .053333rem;
		margin-bottom: 5px;
 
	}
	.tabberWarp{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding-bottom: .053333rem;
		background: #fff;
	}
</style>