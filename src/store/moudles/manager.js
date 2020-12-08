import { managerList,managerCount} from "../../util/request"

const state={
    managerList:[],
    total:0,
    size:2,
    page:1,
}
const mutations={
    changeManagerList(state,arr){
        state.managerList=arr
    },
    managerTotal(state,num){
        state.total=num;
    },
    managerPage(state,num){
        state.page=num
    }
}
const actions={
    reqManagerList(context){
        managerList({
            size:context.state.size,
            page:context.state.page
        }).then(res=>{
            context.commit('changeManagerList',res.data.list)
        })
    },

    reqManagerTotal(context){
        managerCount().then(res=>{
            context.commit('managerTotal',res.data.list[0].total)
        })
    },

    reqManagerCount(context,page){
        context.commit('managerPage',page)
        context.dispatch('reqManagerList')
    }
}
const getters={
    managerList(state){
        return state.managerList
    },
    total(state){
        return state.total
    },
    size(state){
        return state.size
    },
    page(state){
        return state.page
    }
}





export default{
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}