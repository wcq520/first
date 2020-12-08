

import {reqMenuList} from '../../util/request'
const state={
    list:[],
}
const mutations={
    getMenuList(state,arr){
        state.list=arr
    }

}
const actions={
    requestMenuList(context){
        reqMenuList({istree:true}).then(res=>{
          context.commit('getMenuList',res.data.list)
        })
    }
}
const  getters={
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