<template>
    <div class="list">
        <h1>{{msg}}</h1>
        <router-link :to="{name:'goodsinfo',params:{goods_id:goods_id}}">goodsinfo</router-link>
    </div>
</template>
<script>
export default {
    data(){
       return{
           msg:"list",
           goods_id:9996
       }
    },
    created(){
        console.log(this.$route.params.cat_id);
    }
}
</script>
<style lang="">
    
</style>