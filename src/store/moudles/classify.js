
import {classifyList} from '../../util/request'

const state={
    classifyList:[]
}
const mutations={
    getClassifyList(state,arr){
        state.classifyList=arr
    }
}
const actions={
    reqClassifyList(context){
        classifyList({
            istree:true
        }).then(res=>{
            context.commit('getClassifyList',res.data.list)
        })
    }
}
const getters={
    classifyList(state){
        return  state.classifyList
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true,
}