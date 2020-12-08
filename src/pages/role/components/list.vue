<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180">
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
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import {delRole} from '../../../util/request'
export default {
  computed: {
    ...mapGetters({
      list: "roleList/list",
    }),
  },
  methods: {
      
    ...mapActions({
      requestRoleList: "roleList/requestRoleList",
    }),
    edit(id) {
        this.$emit('edit',id)
    },
    del(id) {
        delRole({id:id}).then(res=>{
            this.requestRoleList()
        })
    },
  },

  mounted() {
    this.requestRoleList();
  },
};
</script>
<style scoped>
</style>