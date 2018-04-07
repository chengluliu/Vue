<template>
    <div>
    Clicked: {{counter.count}} times .<br/>
    计算属性getters的 mycount 的值:{{mycount}}<br/>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
   
  </div>
   
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  return() {},
  computed: {
    ...mapGetters({
      mycount: "mycount"//应用 vuex 计算属性 把 vuex 中 "mycount" 映射为 mycount
    }),
    ...mapState({
      counter:"counter"  //获取 store/index 的 model   counter 
    })
    
  },
  /**
   * mapGetters的第二种调用方式
   */
  // computed:mapGetters({
  //      mycount:'mycount'
  // }),
  methods: mapActions(["add", "reduce"])
};
</script>

<style scoped>

</style>