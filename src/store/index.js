import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import menuList from './moudles/menu'
import roleList from './moudles/role'
import manager from './moudles/manager'
import classify from './moudles/classify'
import spec from './moudles/spec'
import user from './moudles/user'
import goods from './moudles/goods'
import banner from './moudles/banner'
import seckill from './moudles/seckill'





export default new Vuex.Store({
    modules:{
        menuList,
        roleList,
        manager,
        classify,
        spec,
        user,
        goods,
        banner,
        seckill
    }
})




