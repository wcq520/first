import  {bannerList} from '../../util/request'


const state={
    list:[],
}
const mutations={
    getBanner(state,arr){
        state.list=arr
    }
}
const actions={
    reqBannerList(context){
        bannerList().then(res=>[
            context.commit('getBanner',res.data.list)
        ])
    }
}
const getters={
    list(state){
        return state.list
    }
}


export default{
        state,
        mutations,
        actions,
        getters,
        namespaced:true
}
