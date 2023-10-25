<template>
  <div id="app" class="app-containt">
    <router-view class="router-containt"></router-view>
  </div>
</template>

<script>
import { reactive } from 'vue'
export const isLogin = reactive({
  loginStatus: false,
  setLoginStatus() {
    this.loginStatus = true
  }
})
export default {
  name: 'App',
}
</script>

<style>
</style>

