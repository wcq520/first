<template>
  <div>
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="菜单编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="title" label="菜单名称" sortable width="180">
      </el-table-column>
      <el-table-column prop="icon" label="菜单名称"> </el-table-column>
      <el-table-column prop="url" label="菜单地址"> </el-table-column>

      <el-table-column prop="name" label="状态" >
            <template slot-scope="scope">
          <el-button type='primary' v-if='scope.row.status==1'>启用</el-button>
          <el-button type='info' v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作"> 
          <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">修改</el-button>
            <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { delMenu } from "../../../util/request";
export default {
  computed: {
    ...mapGetters({
      list: "menuList/list",
    }),
  },
  methods: {
    ...mapActions({
      menuList: "menuList/requestMenuList",
    }),
    edit(id) {
      this.$emit("edit", id);
    },
    del(id) {
      delMenu({ id: id }).then((res) => {
        this.menuList();
      });
    },
  },
  mounted() {
    this.menuList();
    console.log(this.list);
  },
};
</script>
<style scoped>
</style>