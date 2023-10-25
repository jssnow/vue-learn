<template>
    <h1>用户列表页</h1>
    <thead>
        <tr>
            <th>账号</th>
            <th>密码</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="user in userList ">
            <td>{{user.account}}</td>
            <td>{{user.password}}</td>
        </tr>
    </tbody>
</template>
<script>
import { useStorage } from '@vueuse/core'
import GlobalConst from "../components/GlobalConst.vue";
import { isLogin } from '../App.vue';
export default {
    data() {
      if(!isLogin.loginStatus){
        alert("请先登陆")
        this.$router.push('/login');
      }  
      let accountValue = useStorage(GlobalConst.userAccountKey)
      return {
        userList: JSON.parse(accountValue.value),
      };
    },
}
</script>