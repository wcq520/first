

const state={
    list:sessionStorage.getItem('list')?JSON.parse(sessionStorage.getItem('list')):{}
}
const mutations={
    getList(state,obj){
        state.list=obj;
        sessionStorage.setItem('list',JSON.stringify(obj))
    }
}
const actions={
    reqList(context,data){
        context.commit('getList',data)
    }
}
const getters={
    list(state){
        return state.list
    }
}





export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}