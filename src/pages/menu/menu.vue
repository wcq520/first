<template>
<div>
    <el-button type="primary" @click="addBtn" class="add">添加</el-button>
    
<v-add :info='info' ref="one"></v-add>
<v-list @edit='edit'></v-list>
</div>
</template>
<script>
import vAdd from './components/add'
import vList from './components/list'

export default {
components:{
    vAdd,
    vList
},
data(){
 return {
     info:{
         isShow:false,
         isAdd:true,
         title:'添加菜单'
     }
 }
},
methods:{
    edit(e){
        this.info.isShow=true;
        this.info.isAdd=false;
        this.info.title='修改菜单';
        this.$refs.one.look(e);
        
    },
    addBtn() {
        this.$refs.one.form={
        pid: 0,
        title: "",
        icon: "",
        type:0,
        url: "",
        status: 1,
        };
        this.info.isShow = !this.info.isShow;
        this.info.title='添加菜单';
        this.info.isAdd=true;
    },
},
 
}
</script>
<style  scope>
.add {
  margin-top: 20px;
}
</style>