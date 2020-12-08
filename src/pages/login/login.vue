<template>
  <div class="box">
    <div class="con">
      <h2>登录</h2>
      <div>
        <input type="text" placeholder="请输入用户名" v-model="user.username" />
      </div>
      <div>
        <input
          type="password"
          placeholder="请输入密码"
          v-model="user.password"
        />
      </div>
      <div><input type="button" value="登录" @click="login" /></div>
    </div>
  </div>
</template>
<script>
import { userLogin } from "../../util/request";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      userLogin(this.user).then((res) => {
        if (res.data.code == 200) {
            // console.log(res.config.data.username);
          this.$router.push("/index/home");
          sessionStorage.setItem('list',JSON.stringify(res.data.list))
        } else {
          alert(res.data.msg);
        }
      });
    },
  },
};
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #563443, #2f3d60);
  overflow: hidden;
}
.con {
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  margin: 200px auto;
  text-align: center;
  overflow: hidden;
}
h2 {
  margin-top: 40px;
}
input {
  width: 60%;
  height: 40px;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 0 10px;
}
input[type="button"] {
  width: 61%;
  border: none;
  outline: none;
  background-color: #409eff;
  color: white;
  font-weight: 600;
}
</style>