<template>
  <div class="add">

    <!-- 弹框 -->

    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="菜单名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>

        

        <el-form-item label="菜单类型" :label-width="formLabelWidth">
          <el-radio v-model="form.type" :label="1" v-if="form.pid==0">目录</el-radio>
          <el-radio v-model="form.type" :label="2" v-else>菜单</el-radio>
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
import {mapGetters,mapActions} from 'vuex';
export default {
  props:['info'],
  data() {
    return {
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
  
    })
  },
  methods: {
    ...mapActions({
    
    }),
    hide(){
        this.info.isShow=false
    },
    sure(){
      
    },
    
    look(id){
      
    },
    update(){
      
    },
  },
};
</script>
<style scoped>

</style>