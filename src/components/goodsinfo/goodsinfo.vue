<template>
    <div class="goodsinfo">
       <h1>{{goodsinfo}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            goodsinfo:'goodsinfo_ok2'
        }
    },
    mounted(){
        console.log(this.$route.params.goods_id);
    }
}
</script>
<style>
</style>