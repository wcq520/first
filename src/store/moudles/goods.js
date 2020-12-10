


import {goodsList} from '../../util/request'

const state={
    list:[]
}
const mutations={
    getGoods(state,arr){
        state.list=arr
    }
}
const actions={
    reqGoodsList(context){
        goodsList({
            page:1,
            size:4,
        }).then(res=>{
            context.commit('getGoods',res.data.list)
        })
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