<template>
<div>
 <el-button type='primary' class="addBtn" @click="add">添加</el-button>
 <v-add :info='info' ref="three"></v-add>
 <v-list @edit='edit' ref='four'></v-list>
 <!-- {{info.total}} -->
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
                title:'添加管理员',
                total:''
            }

        }
    },
    methods:{
        add(){
            this.info.isShow=!this.info.isShow;
            this.info.isAdd=true;
            this.info.title='添加管理员';
        },
        edit(e){
            this.info.isAdd=false;
            this.$refs.three.look(e)
        }
    }
}
</script>
<style  scope>
   .addBtn{
       margin: 20px 0;
   }
</style>