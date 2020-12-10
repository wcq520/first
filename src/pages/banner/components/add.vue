<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="上级分类" :label-width="formLabelWidth">
          <el-select v-model="form.pid" placeholder="请选择">
            <el-option label="顶级菜单" value="0"></el-option>
            <el-option
              v-for="item in  list"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片" :label-width="formLabelWidth" v-if="form.pid!=0">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="change"
          >
            <img v-if="imgUrl" :src="imgUrl" class="avatar" />
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
import { classify ,classifyOne,updateClassify} from "../../../util/request";
import qs from "qs";
export default {
  props: ["info"],
  data() {
    return {
      imgUrl:'',
      form: {
        pid: "",
        catename: "",
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
      list: "classify/classifyList",
    }),
  },
  methods: {
    empty(){
      this.form={
         pid: "",
        catename: "",
        img: "",
        status: 1,
      },
      this.imgUrl=''
    },
    ...mapActions({
      reqClassifyList:'classify/reqClassifyList'
    }),
    hide() {
      this.info.isShow = false;
    },
    change(e) {
      const file=e.raw
      this.imgUrl= URL.createObjectURL(file);
      this.form.img=file;
    },
    sure() {
      
    },
    
    look(id){
      
    },
    update() {
      // console.log(this.form);
      updateClassify(this.form).then(res=>{
      })
      this.reqClassifyList()
      this.hide()
      console.log(111);
    },
  },
  mounted() {
  },
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