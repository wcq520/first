<template>
  <div>
    <!-- index -->
    <el-container>
      <el-aside width="200px">
        <div class="box">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            router
            background-color="#20222a"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/index/home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>


          <div v-for='item in list.menus' :key="item.id">
          <el-submenu :index="item.url" v-if='item.children'>
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'/index/'+i.url" v-for='i in item.children' :key="i.id">{{i.title}}</el-menu-item>

            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :index="item.url">{{item.title}}</el-menu-item>
      
            </div>


          </el-menu>
        </div>
        
      </el-aside>
      <el-container>
        <el-header>
          <div class="username">
            {{ username }}
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <div @click="quit">
                <el-dropdown-item >退出登录</el-dropdown-item>
                </div>
              </el-dropdown-menu>
            </el-dropdown>
          </div></el-header
        >
        <el-main>

          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      username: JSON.parse(sessionStorage.getItem("list")).username,
    };
  },
  computed:{
    ...mapGetters({
      list:'user/list'
    })
   
  },
  methods:{
    ...mapActions({
    }),
    quit(){
      this.$router.replace('/login')
      sessionStorage.setItem('list','')
    },
  },
  mounted() {
  },
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #20222a;
  color: #333;
  height: 100vh;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
}
.box {
  overflow: hidden;
}
.username{
  float: right;
  margin-right: 20px;
}
</style>>

