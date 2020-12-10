import axios from 'axios'

axios.interceptors.response.use(res=>{
    console.log('========请求的路径:'+res.config.url+'=============')
    console.log(res)
    return res
})

// 添加数据
const baseUrl='/api'
export const reqAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data
    })
}

// 获取菜单列表
export const reqMenuList=(params)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:params
    })
}
// 获取菜单列表的一条数据
export const getMenuOne=(params)=>{
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:params

    })
}

// 修改数据
export const updateMenu=(data)=>{
    return axios ({
        url:baseUrl+'/api/menuedit',
        method:'post',
        data:data
    })
}

// 删除菜单
export const delMenu=(id)=>{
    return axios({
        url:baseUrl+'/api/menudelete',
        method:'post',
        data:id
    })
}

// -------------------------角色----------------------------------
// 角色数据
export const reqRole=(data)=>{
    return axios({
        url:baseUrl+'/api/roleadd',
        method:'post',
        data:data
    })
}
// 角色列表
export const reqRoleList=()=>{
    return axios({
        url:baseUrl+'/api/rolelist',
        method:'get'
    })
}
// 获取一条角色数据
export const reqRoleListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/roleinfo',
        method:'get',
        params:id
    })
}
// 修改角色
export const updateRole=(data)=>{
        return axios ({
            url:baseUrl+'/api/roleedit',
            method:'post',
            data:data
        })
}
// 删除角色
export const delRole=(data)=>{
    return axios({
        url:baseUrl+'/api/roledelete',
        method:'post',
        data:data
    })
}

// 添加管理员
export const addManager=(data)=>{
    return axios({
        url:baseUrl+'/api/useradd',
        method:'post',
        data:data
    })
}

// 获取管理员总数
export const managerCount=()=>{
    return axios({
        url:baseUrl+'/api/usercount',
        method:'get',

    })
}
// 获取管理员列表
export const managerList=(params)=>{
    return axios({
        url:baseUrl+'/api/userlist',
        method:'get',
        params:params
    })
}
// 获取管理员一条数据
export const managerOne=(uid)=>{
    return axios({
        url:baseUrl+'/api/userinfo',
        method:'get',
        params:uid
    })
}
// 修改管理员内容
export const updateManager=(data)=>{
    return axios({
        url:baseUrl+'/api/useredit',
        method:'post',
        data:data
    })
}
// 删除管理员
export const delManager=(data)=>{
        return axios({
            url:baseUrl+'/api/userdelete',
            method:'post',
            data:data
        })
}

// ===========================商品分类=================================

// 添加商品分类列表
export const classify=(data)=>{
    const form=new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/cateadd',
        method:'post',
        data:form
    })
}
// 商品分类列表
export const classifyList=(params)=>{
    return axios({
        url:baseUrl+'/api/catelist',
        method:'get',
        params:params
    })
}
// 商品分类一条数据
export  const classifyOne=(params)=>{
    return axios({
        url:baseUrl+'/api/cateinfo',
        method:'get',
        params:params

    })
}
// 商品数据修改
export const updateClassify=(data)=>{
    const form= new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/cateedit',
        method:'post',
        data:form
    })
}
// 删除商品列表
export const delClassify=(data)=>{
    return axios({
        url:baseUrl+'/api/catedelete',
        method:'post',
        data:data
    })
}

// =============================商品规格======================================

// 商品规格添加
export const spec=(data)=>{
    return axios({
        url:baseUrl+'/api/specsadd',
        method:'post',
        data:data
    })
}

// 商品规格列表
export const specList=(params)=>{
    return axios({
        url:baseUrl+'/api/specslist',
        method:'get',
        params:params

    })
}

// 商品列表总数
export const specTotal=()=>{
        return axios({
            url:baseUrl+'/api/specscount',
            method:'get'
        })
}
// 获取一条商品规格
export const specOne=(params)=>{
    return axios({
        url:baseUrl+'/api/specsinfo',
        method:'get',
        params:params
    })
}
// 修改商品规格
export const updateSpec=(data)=>{
    return axios({
        url:baseUrl+'/api/specsedit',
        method:'post',
        data:data
    })
}
// 删除商品规格数据
export const delSpec=(data)=>{
    return axios({
        url:baseUrl+'/api/specsdelete',
        method:'post',
        data:data
    })
}





// ========================用户登录================================================
export const userLogin=(data)=>{
    return axios({
        url:baseUrl+'/api/userlogin',
        method:'post',
        data:data
    })
}


// ==============================商品管理============================================

// 商品添加
export const goodsAdd=(data)=>{
    const form=new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/goodsadd',
        method:'post',
        data:form,
    })
}
// 商品列表
export const goodsList=(data)=>{
    return axios({
        url:baseUrl+'/api/goodslist',
        method:'get',
        data:data
    })
}
// 查看商品的一条数据
export const goodsOne=(params)=>{
    return axios({
        url:baseUrl+'/api/goodsinfo',
        method:'get',
        params:params
    })
}
// 修改商品数据
export const updateGoods=(data)=>{
    const form =new FormData();
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/goodsedit',
        method:'post',
        data:form
    })
}
// 删除商品数据
export const delGoods=(data)=>{
    return axios({
        url:baseUrl+'/api/goodsdelete',
        method:'post',
        data:data
    })
}


// =====================轮播图========================
export const addBanner=(data)=>{
    const form=new FormData();
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/banneradd',
        method:'post',
        data:form
    })
}
// 轮播图列表
export const bannerList=()=>{
    return axios({
        url:baseUrl+'/api/bannerlist',
        method:'get',
    })
}
// 轮播图查看一条数据
export const bannerOne=(params)=>{
    return axios({
        url:baseUrl+'/api/bannerinfo',
        method:'get',
        params:params
    })
}
// 修改轮播图数据
export const updateBanner=(data)=>{
    const form = new FormData();
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/banneredit',
        method:'post',
        data:form
    })
}
// 删除轮播图
export const delBanner=(data)=>{
    return axios({
        url:baseUrl+'/api/bannerdelete',
        method:'post',
        data:data
    })
}

// ====================限时秒杀=========================
export const seckillAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/seckadd',
        method:'post',
        data:data
    })
}

// 秒杀列表
export const seckillList=()=>{
    return axios({
        url:baseUrl+'/api/secklist',
        method:'get',
    })
}
// 查看一条数据
export const seckillOne=(params)=>{
    return axios({
        url:baseUrl+'/api/seckinfo',
        method:'get',
        params:params
    })
}
// 修改抢购
export const updateSeckill=(data)=>{
    return axios({
        url:baseUrl+'/api/seckedit',
        method:'post',
        data:data
    })
}
// 删除抢购
export const delSeckill=(data)=>{
    return axios({
        url:baseUrl+'/api/seckdelete',
        method:'post',
        data:data
    })
}