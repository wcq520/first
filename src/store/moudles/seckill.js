import {seckillList} from '../../util/request'



const state={
    list:[],
}
const mutations={
    getSeckillList(state,arr){
        state.list=arr
    }

}
const actions={
    requestSeckillList(context){
        seckillList().then(res=>{
          context.commit('getSeckillList',res.data.list)
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