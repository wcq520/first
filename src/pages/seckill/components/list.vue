<template>
  <div>
    <el-table :data="seckillList" border style="width: 100%">
      <el-table-column prop="title" label="活动名称" width="100">
      </el-table-column>
      
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)"
            >编辑</el-button
          >
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   
   
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { delSeckill} from "../../../util/request";
export default {

  computed: {
    ...mapGetters({
        seckillList:'seckill/list'

    }),
  },
  methods: {
    edit(id) {
        this.$emit('edit',id)
    },
    del(id) {
        delSeckill({id:id}).then(res=>{
            this.requestSeckillList();
        })
    },
    ...mapActions({
        requestSeckillList:'seckill/requestSeckillList'
    }),
  },
  mounted() {

      this.requestSeckillList()
  },
};
</script>
<style scoped>
img{
    width: 100px;
    height: 60px;
}
</style>