<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="规格名称" :label-width="formLabelWidth">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          label="规格属性"
          :label-width="formLabelWidth"
          v-for="(item, index) in arr"
          :key="item.index"
        >
          <el-input
            v-model="item.value"
            autocomplete="off"
            class="newAdd"
          ></el-input
          ><el-button type="primary" @click="newAdd" v-if="index == 0"
            >新增规格属性</el-button
          >
          <el-button type="danger" v-else @click="delAttr(index)"
            >删除</el-button
          >
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
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="sure" v-if="info.isAdd"
          >确 定</el-button
        >
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { spec,specOne,updateSpec} from "../../../util/request";
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  data() {
    return {
      form: {
        specsname: "",
        attrs: "",
        status: 1,
      },
      arr: [{ value: "" }],
      formLabelWidth: "80px",
    };
  },
  methods: {
    hide() {
      this.info.isShow = false;
    },
    ...mapActions({
      reqSpecList: "spec/reqSpecList",
    }),
    sure() {
      this.form.attrs = JSON.stringify(
        this.arr.map((item) => {
          return item.value;
        })
      );
      spec(this.form).then((res) => {
        this.hide();
        this.reqSpecList();
      });
    },
    update() {
      this.form.attrs = JSON.stringify(
        this.arr.map((item) => {
          return item.value;
        })
      );
      updateSpec(this.form).then(res=>{
        this.hide();
        this.reqSpecList()
      })
    },
    newAdd() {
      this.arr.push({ value: "" });
    },
    delAttr(index) {
      this.arr.splice(index, 1);
    },
    empty() {
      this.form = {
        specsname: "",
        attrs: "",
        status: 1,
      };
    },
    look(id){
      specOne({id:id}).then(res=>{
        this.form=res.data.list[0];
        this.arr=JSON.parse(res.data.list[0].attrs).map(item=>{
          return {value:item}
        })
        this.form.id=id
      })
    }
  },
  components: {},
};
</script>
<style scoped>
.newAdd {
  width: 81%;
}
.del {
  width: 89%;
}
</style>