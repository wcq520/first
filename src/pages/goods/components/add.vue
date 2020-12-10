<template>
  <div class="add">
    <!-- 弹框 -->

    <el-dialog :title="info.title" :visible.sync="info.isShow" @opened="editor">
      <el-form :model="form">
        <el-form-item label="一级分类" :label-width="formLabelWidth">
          <el-select v-model="form.first_cateid" placeholder="请选择" @change="secName">
            <el-option
              :label="item.catename"
              :value="item.id"
              v-for="item in classifyList"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="二级分类" :label-width="formLabelWidth">
          <el-select v-model="form.second_cateid" placeholder="请选择">
            <el-option
              :label="item.catename"
              :value="item.id"
              v-for="item in secCate"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.goodsname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input v-model="form.price" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="市场价格" :label-width="formLabelWidth">
          <el-input v-model="form.market_price" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片" :label-width="formLabelWidth">
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

        <el-form-item label="商品规格" :label-width="formLabelWidth">
          <el-select v-model="form.specsid" placeholder="请选择" @change="changeSpec" >
            <el-option
              v-for="item in specList"
              :key="item.id"
              :label="item.specsname"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="规格属性" :label-width="formLabelWidth">
          <el-select v-model="form.specsattr" placeholder="请选择" multiple>
            <el-option
              v-for="item in secSpec"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
          <!-- {{specList}} -->
        </el-form-item>

        <el-form-item label="是否新品" :label-width="formLabelWidth">
          <el-radio v-model="form.isnew" :label="1">是</el-radio>
          <el-radio v-model="form.isnew" :label="2">否</el-radio>
          <!-- {{form.isnew}} -->
        </el-form-item>

        <el-form-item label="是否热卖" :label-width="formLabelWidth">
          <el-radio v-model="form.ishot" :label="1">是</el-radio>
          <el-radio v-model="form.ishot" :label="2">否</el-radio>
          <!-- {{form.ishot}} -->
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

        <el-form-item label="描述" :label-width="formLabelWidth">
          <div id="div1"></div>
        </el-form-item>
        <!-- {{secSpec}} -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="sure" v-if="info.isAdd">确 定</el-button>
        <el-button type="primary" v-else @click="update">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import E from "wangeditor";
import { mapGetters, mapActions } from "vuex";
import { goodsAdd, goodsOne, updateGoods } from "../../../util/request";
export default {
  props: ["info"],
  data() {
    return {
      secCate: [],
      secSpec: [],
      imgUrl: "",
      form: {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: "",
        description: "",
        specsid: "",
        specsattr: [],
        isnew: "",
        ishot: "",
        status: 1,
      },
      formLabelWidth: "120px",
    };
  },
  computed: {
    ...mapGetters({
      classifyList: "classify/classifyList",
      specList: "spec/specList",
      list: "goods/list",
    }),
  },
  methods: {
    empty() {
      this.form = {
        first_cateid: "",
        second_cateid: "",
        goodsname: "",
        price: "",
        market_price: "",
        img: "",
        description: "",
        specsid: "",
        specsattr: [],
        isnew: "",
        ishot: "",
        status: 1,
      };
    },
    secName() {
      this.secCate = this.classifyList.find((item) => {
        return item.id == this.form.first_cateid;
      }).children;
    },
    changeSpec() {
      this.secSpec = this.specList.find((item) => {
        return item.id == this.form.specsid;
      }).attrs;
      this.form.specsattr=[];
    },
    ...mapActions({
      reqClassifyList: "classify/reqClassifyList",
      reqSpecPage: "spec/reqSpecPage",
      reqGoodsList: "goods/reqGoodsList",
    }),
    hide() {
      this.info.isShow = false;
    },
    sure() {
      this.form.description = this.editor.txt.html()
      goodsAdd(this.form).then((res) => {
        console.log(this.form);
        this.hide();
        this.reqGoodsList();
      });
    },
    // 富文本
    editor() {
      this.editor = new E("#div1");
      this.editor.create();
      this.editor.txt.html(this.form.description)

    },
    look(id) {
      goodsOne({ id: id }).then((res) => {
        this.form = res.data.list;
        // console.log(res.data.list);
        this.form.specsattr = res.data.list.specsattr.split(",");
        this.imgUrl = "http://localhost:3000" + res.data.list.img;
        this.form.id = id;
      });
    },
    update() {
      
      updateGoods(this.form).then((res) => {
        this.hide();
        this.reqGoodsList();
      });
    },
    change(e) {
      let file = e.raw;
      this.imgUrl = URL.createObjectURL(file);
      this.form.img = file;
    },
  },
  mounted() {
    this.reqClassifyList();
    this.reqSpecPage();
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
