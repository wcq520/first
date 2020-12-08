<template>
<div>
<el-button type='primary' class="addBtn" @click="add">添加</el-button>
    <v-add :info='info' ref="two"></v-add>
    <v-list @edit='edit'></v-list>

</div>


</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
    components:{
        vAdd,
        vList,
    },
    data(){
        return {
            info:{
                isShow:false,
                isAdd:true,
                title:'添加角色'
            }
        }
    },
    methods:{
        add(){
            this.info.isShow=!this.info.isShow;
            this.info.title='添加角色';
            this.info.isAdd=true;
            this.$refs.two.empty()
        },
        edit(e){
            this.info.isShow=true;
            this.$refs.two.look(e);
            this.info.isAdd=false;
            this.info.title='修改角色'
        }
    }



}
</script>
<style  scope>

.addBtn{
    margin-top: 20px;
}
</style>