//add   reduce

const state ={
    count:0
}

const getters={
    //往外暴露状态属性
    mycount:state=>state.count
}

//vuex 内真正操作 state 的方法
const mutations={
    add(state){
        state.count++;
        console.log("add")
    },
    reduce(state){
        state.count--;
        console.log("reduce")
    }

}

//注册暴露给外部,调用 mutations, 可作为状态判断调用不同的 mutations
const actions={
    add:({commit})=>commit('add'),
    reduce:({commit})=>commit('reduce')

}

export default {
    state,
    getters,
    mutations,
    actions,
}

