<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="change"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="hide">取 消</el-button>
        <el-button type="primary" @click="sure" v-if="info.isAdd"
          >确 定</el-button
        >
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { addBanner,bannerOne, updateBanner } from "../../../util/request";
import qs from "qs";
export default {
  props: ["info"],
  data() {
    return {
      imageUrl: "",
      form: {
        title: "",
        img: "",
        status: 1,
      },
      formLabelWidth: "120px",
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },

  computed: {
    ...mapGetters({
      list: "banner/list",
    }),
  },
  methods: {
    empty() {
      this.form = {
        title: "",
        img: "",
        status: 1,
      },
      this.imageUrl = "";
    },
    ...mapActions({
      reqBannerList: "banner/reqBannerList",
    }),
    hide() {
      this.info.isShow = false;
    },
    change(e) {
      const file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      this.form.img = file;
    },
    sure() {
      addBanner(this.form).then((res) => {
        this.hide();
        this.reqBannerList()
      });
    },

    look(id) {
        bannerOne({id:id}).then(res=>{
          this.form=res.data.list;
          this.imageUrl='http://localhost:3000'+res.data.list.img
          this.form.id=id
        });
    },
    update() {
      updateBanner(this.form).then((res) => {
        
      });
      this.reqBannerList();
      this.hide();
    },
  },
  mounted() {},
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 2px dashed #ccc;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>