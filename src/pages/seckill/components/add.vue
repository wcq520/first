<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="活动期限" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              v-model="value"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="一级分类" :label-width="formLabelWidth">
          <el-select v-model="form.first_cateid" placeholder="请选择" @change="change">
            <el-option v-for="item in classifyList" :key="item.id" :label="item.catename" :value='item.id'></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="二级分类" :label-width="formLabelWidth">
          <el-select v-model="form.second_cateid" placeholder="请选择">
            <el-option v-for="item in secCate" :key="item.id" :label="item.catename" :value='item.id'></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品" :label-width="formLabelWidth">
          <el-select v-model="form.goodsid" placeholder="请选择">
            <el-option v-for="item in list" :key="item.id" :label="item.goodsname" :value='item.id'></el-option>
          </el-select>
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
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
import {seckillAdd,seckillOne,updateSeckill} from "../../../util/request";
export default {
  props: ["info"],
  data() {
    return {
      value: [],
        secCate:[],
      form: {
        title: "",
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        goodsid: "",
        status: 1,
      },
      formLabelWidth: "120px",
    };
  },
  computed: {
    ...mapGetters({
        classifyList:'classify/classifyList',
        list:'goods/list',
        seckillList:'secKill/list',
    }),
  },
  methods: {
      change(){
          this.secCate=this.classifyList.find(item=>{
              return item.id==this.form.first_cateid
          }).children
          
      },
    hide() {
      this.info.isShow = false;
    },
    empty(){
    this.form={
        title: "",
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        goodsid: "",
        status: 1,
      }
    },
    ...mapActions({
        reqClassifyList:'classify/reqClassifyList',
        reqGoodsList:'goods/reqGoodsList',
        requestSeckillList:'seckill/requestSeckillList'
    }),
    sure() {
        this.form.begintime=Date.parse(this.value[0]);
        this.form.endtime=Date.parse(this.value[1])
        seckillAdd(this.form).then(res=>{
            this.hide()
            this.requestSeckillList()
        })
    },
    update() {
       this.form.begintime=Date.parse(this.value[0]);
        this.form.endtime=Date.parse(this.value[1])
        updateSeckill(this.form).then(res=>{
            this.hide();
            this.requestSeckillList()
        })
         
    },
    look(id) {
      this.value=[];
     seckillOne({id:id}).then(res=>{
        this.form=res.data.list;
        this.value.push(new Date(parseInt(this.form.begintime)));
        this.value.push(new Date(parseInt(this.form.endtime)));
        this.form.id=id
     })
    },
  },
  mounted() {
      this.reqClassifyList()
      this.reqGoodsList()
      this.requestSeckillList()
  },
};
</script>
<style scoped>
</style>