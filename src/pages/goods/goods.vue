<template>
<div>
    <el-button type='primary' class="addBtn">添加</el-button>
    <v-add :info='info'></v-add>
    <v-list></v-list>
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
                isShow:true,
                isAdd:true,
                title:'添加商品'
            }
        }
    },
    methods:{
        
    }
}
</script>
<style  scope>
.addBtn{
    margin: 20px 0;
}
</style>