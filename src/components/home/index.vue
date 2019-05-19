<template>
    <div class="home">
        <h1>{{msg}}</h1>
        <router-link :to="{name:'list',params:{cat_id:cat_id}}">goodlist</router-link>
    </div>
</template>

<script>

import Vue from 'vue'

export default {
    data(){
       return{
           msg:"Hello World!",
           popshow:false,
           cat_id:1
          
       }
    },
    
    methods:{
       Popopen(){
          this.popshow = true; 
          
       },
       popmsg(){
          console.log(123)
       }
       
    }

}
</script>
<style lang="">
    
</style>