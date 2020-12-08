<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.roleid" placeholder="请选择">
            <el-option  v-for="item in list" :key='item.id' :label="item.rolename" :value="item.id"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure" v-if="info.isAdd">确 定</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import {addManager,managerOne,updateManager,managerCount} from '../../../util/request'
export default {
    props:['info'],
  data() {
    return {
      form: {
        roleid:'',
        username:'',
        password:'',
        status:1,
      },
      formLabelWidth: "120px",
    };
  },
  computed:{
      ...mapGetters({
          list:'roleList/list'
      })
  },
  methods:{
      hide(){
          this.info.isShow=false;
      },
      ...mapActions({
          requestRoleList:'roleList/requestRoleList',
          reqManagerList:'manager/reqManagerList'
      }),
      sure(){
          addManager(this.form).then(res=>{
              this.hide();
              this.reqManagerList({
                size:2,
                page:1
            })
            managerCount().then(res=>{
                this.info.total=res.data.list[0].total
                // console.log(res.data.list[0].total);
            })
          })
      },
      update(){
          updateManager(this.form).then(res=>{
            this.hide()
            this.reqManagerList({
                size:2,
                page:1
            })
          })
      },
      look(uid){
          managerOne({uid:uid}).then(res=>{
              this.info.isShow=true;
              this.form=res.data.list;
              this.form.uid=uid;
              this.form.password='';
          })
      }
  },
  mounted(){
      this.requestRoleList()
  }
};
</script>
<style scoped>
</style>