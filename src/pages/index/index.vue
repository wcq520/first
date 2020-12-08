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
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>系统设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/index/menu">菜单管理</el-menu-item>
                <el-menu-item index="/index/role">角色管理</el-menu-item>
                <el-menu-item index="/index/manager">管理员管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>商城管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/index/classify">商品分类</el-menu-item>
                <el-menu-item index="/index/spec">商品规格</el-menu-item>
                <el-menu-item index="/index/goods">商品管理</el-menu-item>
                <el-menu-item index="/index/vip">会员管理</el-menu-item>
                <el-menu-item index="/index/banner">轮播图管理</el-menu-item>
                <el-menu-item index="/index/seckill">秒杀活动</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
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
export default {
  data() {
    return {
      username: JSON.parse(sessionStorage.getItem("list")).username,
    };
  },
  methods:{
    quit(){
      this.$router.replace('/login')
      sessionStorage.setItem('list','')
    }
  }
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

