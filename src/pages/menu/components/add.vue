<template>
  <div class="add">

    <!-- 弹框 -->

    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="菜单名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="上级菜单" :label-width="formLabelWidth">
          <el-select v-model="form.pid" placeholder="请选择菜单">
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option v-for="item in list" :key="item.id" :label="item.title" :value="item.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单类型" :label-width="formLabelWidth">
          <el-radio v-model="form.type" :label="1" v-if="form.pid==0">目录</el-radio>
          <el-radio v-model="form.type" :label="2" v-else>菜单</el-radio>
        </el-form-item>

        <el-form-item label="菜单图标" :label-width="formLabelWidth" v-if="form.pid==0">
          <el-select v-model="form.icon" placeholder="请选择图标">
            <el-option label="星星" value="el-icon-star-on">
              <i class="el-icon-star-on"></i>
            </el-option>
            <el-option label="人物" value="el-icon-user-solid">
              <i class="el-icon-user-solid"></i>
            </el-option>
            <el-option label="铃铛" value="el-icon-message-solid">
              <i class="el-icon-message-solid"></i>
            </el-option>
            <el-option label="书签" value="el-icon-collection-tag">
              <i class="el-icon-collection-tag"></i>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单地址" :label-width="formLabelWidth" v-else>
          <el-select v-model="form.url" placeholder="请选择地址" >
            <el-option v-for="item in secRouter" :key="item.path" :label="'/'+item.path" :value="item.path" ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
          v-model="form.status"
          active-color="#13ce66"
          inactive-color="#ff4949"
          :active-value='1'
          :inactive-value='2'
        >
        </el-switch>
        </el-form-item>
        
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
import {secRouter} from '../../../router/index'
import {reqAdd,getMenuOne,updateMenu} from '../../../util/request'
import {mapGetters,mapActions} from 'vuex';
export default {
  props:['info'],
  data() {
    return {
      secRouter,
      form: {
        pid: 0,
        title: "",
        icon: "",
        type:0,
        url: "",
        status: 1,
      },
      formLabelWidth: "120px",
    };
  },
  computed:{
    ...mapGetters({
      list:'menuList/list'
    })
  },
  methods: {
    ...mapActions({
      reqMenuList:'menuList/requestMenuList'
    }),
    hide(){
        this.info.isShow=false
    },
    sure(){
        reqAdd(this.form).then(res=>{
            this.hide();
            this.reqMenuList();
        })
    },
    
    look(id){
      getMenuOne({id:id}).then(res=>{
            this.form=res.data.list;
            this.form.id=id;
        })
    },
    update(){
      updateMenu(this.form).then(res=>{
          this.reqMenuList();
          this.info.isShow=false;
      })
    },
  },
};
</script>
<style scoped>

</style>