<template>
  <div class="login-containt">
    <img class="logo" src="../assets/logo.png" />
    <h2>注册</h2>
    <login-register v-show="true" v-model:account="account" v-model:password="password"></login-register>
    <button class="login-button" v-on:click="onSubmit">提交</button>
    <br />
    <div class="login-bottom-containt">
      <button class="change-login-type" @click="onChangeLoginType">切换登陆</button>
    </div>
  </div>
</template>
  
<script>
import LoginRegister from "../components/LoginRegister.vue";
import GlobalConst from "../components/GlobalConst.vue";
export default {
  components: {
    LoginRegister,
    GlobalConst
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
      // 注册
      console.log("注册");
      if (this.account == "") {
        alert("账号不能为空")
        return
      }

      if (this.password == "") {
        alert("密码不能为空")
        return
      }
      const accountValue = localStorage.getItem(GlobalConst.userAccountKey)
      let arr = []
      if (accountValue === null) {
        arr = [{ account: this.account, password: this.password }]
      } else {
        arr = JSON.parse(accountValue)
        var accountIsExist = false
        arr.forEach(item => {
          if (item.account == this.account) {
            accountIsExist = true;
          }
        })
        if (accountIsExist) {
          alert("账号已经存在，请更换账号")
          return
        }
        arr.push({ account: this.account, password: this.password })
      }
      console.log(JSON.stringify(arr))
      localStorage.setItem(GlobalConst.userAccountKey, JSON.stringify(arr));
      this.$router.push('/login');
    },
    onChangeLoginType() {
      this.$router.push('/login');
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
  