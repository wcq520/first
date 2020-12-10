<template>
<div>
    <el-button type='primary' class="addBtn" @click="add">添加</el-button>
    <v-add :info='info' ref="one"></v-add>
    <v-list @edit='edit' ></v-list>
</div>
</template>
<script>
import vAdd from './components/add';
import vList from './components/list';
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
                title:'添加轮播图'
            }
        }
    },
    methods:{
        add(){
            this.info.isShow=!this.info.isShow;
            this.info.isAdd=true;
            this.info.title='添加轮播图';
            this.$refs.one.empty()
        },
        edit(e){
            this.info.isShow=true;
            this.info.isAdd=false;
            this.info.title='修改轮播图';
            this.$refs.one.look(e)
        }
    }


}
</script>
<style  scope>
    .addBtn{
        margin:20px 0;
    }
</style>