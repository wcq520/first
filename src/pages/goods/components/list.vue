<template>
<div>
    <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="商品编号" >
      </el-table-column>
      <el-table-column prop="goodsname" label="商品名称" >
      </el-table-column>
      <el-table-column prop="price" label="商品价格" width='80'>
      </el-table-column>
      <el-table-column prop="market_price" label="市场价格" width='80'>
      </el-table-column>

      <el-table-column label="图片" >
          <template slot-scope="scope">
          <img :src="'http://localhost:3000'+scope.row.img" alt="">
        </template>
      </el-table-column>

      <el-table-column prop="rolename" label="是否新品" width='80'>
          <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.isnew == 1">是</el-button>
          <el-button type="info" v-else>否</el-button>
        </template>
      </el-table-column>

      <el-table-column prop="rolename" label="是否热卖" width='80'>
          <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.ishot == 1">是</el-button>
          <el-button type="info" v-else>否</el-button>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">修改</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {delGoods} from '../../../util/request'
export default {
components:{

},
    computed:{
        ...mapGetters({
            list:'goods/list'
        })
    },
    methods:{
        ...mapActions({
            reqGoodsList:'goods/reqGoodsList'
        }),
        edit(id){
            this.$emit('edit',id)
        },
        del(id){
            delGoods({id:id}).then(res=>{
                this.reqGoodsList()
            })
        }
    },
    mounted(){
        this.reqGoodsList()
    }
}
</script>
<style scoped>
img{
    width: 100px;
    height: 100px;
}
</style>