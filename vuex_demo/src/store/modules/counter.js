//add   reduce

const state ={
    count:0
}

const getters={
    //往外暴露状态属性
    mycount:state=>state.count
}

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

