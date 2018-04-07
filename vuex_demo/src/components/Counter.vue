<template>
    <div>
    Clicked: {{  count }} times .
    <button @click="add">+</button>
    <button @click="reduce">-</button>
   
  </div>
   
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        return(){
            
        },
        computed:{
            ...mapGetters({
            count:'mycount'
            }),


        },
        methods:mapActions([
            'add',
            'reduce'

        ])
    }
</script>

<style scoped>

</style>