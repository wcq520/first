

import {specList,specTotal} from '../../util/request'


const state={
    specList:[],
    page:1,
    total:0,
    size:2
}
const mutations={
    getSpecList(state,arr){
        state.specList=arr
    },
    getSpecTotal(state,num){
        state.total=num
    },
    getSpecPage(state,page){
        state.page=page
    }
}
const actions={
    reqSpecList(context){
        specList({
            page:context.state.page,
            size:context.state.size,
        }).then(res=>{
            var arr=res.data.list;
            arr.forEach(item=>{
                if(item.attrs!=''){
                    item.attrs=JSON.parse(item.attrs)

                }
            })
            context.commit('getSpecList',arr)
        })
    },
    reqSpecTotal(context){
        specTotal().then(res=>{
            context.commit('getSpecTotal',res.data.list[0].total)
        })
    },
    reqSpecPage(context,page){
        context.commit('getSpecPage',page)
        context.dispatch('reqSpecList')
    }

    
}
const getters={
    specList(state){
        return state.specList
    },
    total(state){
        return state.total
    },
    page(state){
        return state.page
    },
    size(){
        return state.size
    }
}





export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}