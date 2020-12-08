<template>
  <div>
    <el-table
      :data="classifyList"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >

      <el-table-column prop="id" label="分类编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="catename" label="分类名称" sortable width="180">
      </el-table-column>
      <el-table-column  label="图片">
          <template slot-scope="scope">
          <img :src="'http://localhost:3000'+scope.row.img" alt="" v-if="scope.row.img!=''">
        </template>
      </el-table-column>

      <el-table-column prop="name" label="状态" >
            <template slot-scope="scope">
          <el-button type='primary' v-if='scope.row.status==1'>启用</el-button>
          <el-button type='info' v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作"> 
          <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
            <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {delClassify} from '../../../util/request'
export default {
  computed: {
    ...mapGetters({
      classifyList: "classify/classifyList",
    }),
  },
  methods: {
    ...mapActions({
      reqClassifyList: "classify/reqClassifyList",
    }),
    edit(id){
        this.$emit('edit',id)
    },
    del(id){
        delClassify({id:id}).then(res=>{
            this.reqClassifyList()
        })

    }
  },
  mounted() {
    this.reqClassifyList();
  },
};
</script>
<style scoped>
img {
  width: 100px;
  height: 70px;
}
</style>