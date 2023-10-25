<template>
  <div class="login-containt">
    <img class="logo" src="../assets/logo.png" />
    <h2>登陆</h2>
    <!-- <login-by-code v-show="operateType === 'register'"></login-by-code> -->
    <login-register v-show="true" v-model:account="account" v-model:password="password"></login-register>
    <button class="login-button" v-on:click="onSubmit">提交</button>
    <br />
    <div class="login-bottom-containt">
      <button class="change-login-type" @click="onChangeLoginType">
        切换注册
      </button>
    </div>
  </div>
</template>
  
<script>
import LoginRegister from "../components/LoginRegister.vue";
import GlobalConst from "../components/GlobalConst.vue";
import { isLogin } from "../App.vue";
export default {
  components: {
    // LoginByCode, 
    LoginRegister,
    GlobalConst,
  },
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      // 密码登录
      console.log("密码登录");
      console.log(this.account);
      console.log(this.password);
      const accountValue = localStorage.getItem(GlobalConst.userAccountKey)
      console.log(accountValue)
      if (accountValue === null) {
        // 账号密码校验未通过
        alert("账号或者密码错误")
        return
      }

      let arr = JSON.parse(accountValue)
      console.log(arr)

      let loginSuccess = false
      arr.forEach(item => {
        console.log(item.account)
        console.log(item.password)
        // 校验账号密码
        if (item.account == this.account && item.password == this.password) {
          loginSuccess = true
        }
      });
      if (!loginSuccess) {
        alert("账号或者密码错误")
        return
      }
      isLogin.setLoginStatus();
      this.$router.push('/userList')
      return
    },
    onChangeLoginType() {
      this.$router.push('/register');
    },
  },
};
</script>
  
<style  scoped>
.login-containt {
  text-align: center;
}

.logo {
  margin-top: 40%;
  width: 100px;
  height: 100px;
}

.login-bottom-containt {
  text-align: center;
}

.login-button {
  margin-top: 40px;
}

.change-login-type {
  text-align: right;
  margin-top: 40px;
}
</style>
  