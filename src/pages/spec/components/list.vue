<template>
  <div>
    <el-table :data="specList" border style="width: 100%">
      <el-table-column prop="id" label="规格编号" width="80"> </el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180">
      </el-table-column>
      <el-table-column label="规格属性" width="600">
        <template slot-scope="scope">
          <el-tag v-for="item in scope.row.attrs" :key="item">{{
            item
          }}</el-tag>
        </template>
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
          <el-button type="primary" @click="edit(scope.row.id)">修改</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :page-size='size' :current-page='page' :total="total" @current-change='change'>
     
    </el-pagination> 
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { delSpec} from "../../../util/request";
export default {
  components: {},
  computed: {
    ...mapGetters({
      specList: "spec/specList",
      total: "spec/total",
      page:'spec/page',
      size:'spec/size'
    }),
  },
  methods: {
    ...mapActions({
      reqSpecList: "spec/reqSpecList",
      reqSpecTotal: "spec/reqSpecTotal",
      reqSpecPage:'spec/reqSpecPage'
    }),
    edit(id) {
      this.$emit("edit", id);
    },
    del(id) {
      delSpec({ id: id }).then((res) => {
        this.reqSpecList();
      });
    },
    change(e){
      this.reqSpecPage(e)
    }
  },
  
  mounted() {
    this.reqSpecList();
    this.reqSpecTotal();
  },
};
</script>
<style scoped>
</style>