<template>
  <div>
    <el-table :data="managerList" border style="width: 100%">
      <el-table-column prop="id" label="用户编号" width="100">
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="所属角色"> </el-table-column>
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
          <el-button type="primary" @click="edit(scope.row.uid)"
            >编辑</el-button
          >
          <el-button type="danger" @click="del(scope.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="(total / 2) * 10"
      :current-page="1"
      @current-change='change'
    >
    </el-pagination>
   
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { delManager } from "../../../util/request";
export default {

  computed: {
    ...mapGetters({
      managerList: "manager/managerList",
      total:'manager/total',
      page:'manager/page',
      size:'manager/size'
    }),
  },
  methods: {
    edit(id) {
      this.$emit("edit", id);
    },
    del(id) {
      delManager({ uid: id }).then((res) => {
        this.reqManagerList();
      });
    },
    ...mapActions({
      reqManagerList: "manager/reqManagerList",
      reqManagerTotal:'manager/reqManagerTotal',
      reqManagerCount:'manager/reqManagerCount'
    }),
    change(e){
      this.reqManagerCount(e);
    }
  },
  mounted() {
    this.reqManagerList();
    this.reqManagerTotal();
  },
};
</script>
<style scoped>
</style>