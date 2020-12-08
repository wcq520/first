<template>
<div>
 <div id="main"></div>
</div>
</template>
<script>
import *as echarts from 'echarts'
import {mapGetters,mapActions} from 'vuex'
export default {
components:{
    
},
computed:{
    ...mapGetters({
        list:'classify/classifyList'
    })
},
methods:{
    ...mapActions({
        reqClassifyList:'classify/reqClassifyList'
    })
},
watch:{
    list:{
        handler(){
            var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '销量'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: this.list.map(item=>{return item.catename})
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: this.list.map(item=>{return item.children?item.children.length:0})
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        },
        deep:true
    }
},
mounted(){
    this.reqClassifyList();
            var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '销量'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: this.list.map(item=>{return item.catename})
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: this.list.map(item=>{return item.children.length})
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
}
}
</script>
<style scope>
    #main{
        width: 1200px;
        height: 600px;
        border: 1px solid #ccc;
    }
</style>