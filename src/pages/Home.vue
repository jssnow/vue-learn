<template>
    <h1>这是首页</h1>
    <div>
        <router-link to="/login">登陆&注册</router-link>|
        <router-link to="/about">关于</router-link>
    </div>
  <router-view></router-view>
</template>