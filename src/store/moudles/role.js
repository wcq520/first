import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {reqRole,reqRoleList} from '../../util/request'

const state={
    rolelist:[],
    list:[]
}
const mutations={
    getRole(state,arr){
        state.rolelist=arr
    },
    getRoleList(state,arr){
        state.list=arr
    }

}
const actions={
    requestRole(context,data){
        reqRole(data).then(res=>{
            context.commit('getRole',res.data.data)
        })
    },
    requestRoleList(context){
        reqRoleList().then(res=>{
            // console.log(res);
            context.commit('getRoleList',res.data.list)
        })
    }
}
const  getters={
    roleList(state){
        return state.rolelist
    },
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