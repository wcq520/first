<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="编号" width="100">
      </el-table-column>
      <el-table-column prop="title" label="轮播图标题" width="180">
      </el-table-column>
      <el-table-column  label="图片">
              <template slot-scope="scope">
                  <img :src="'http://localhost:3000'+scope.row.img" alt="">
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
import { delBanner} from "../../../util/request";
export default {

  computed: {
    ...mapGetters({
        list:'banner/list'
    }),
  },
  methods: {
    edit(id) {
        this.$emit('edit',id)
    },
    del(id) {
        delBanner({id:id}).then(res=>{
            this.reqBannerList();
        })
    },
    ...mapActions({
        reqBannerList:'banner/reqBannerList'
    }),
  },
  mounted() {
      this.reqBannerList()
  },
};
</script>
<style scoped>
img{
    width: 100px;
    height: 60px;
}
</style>