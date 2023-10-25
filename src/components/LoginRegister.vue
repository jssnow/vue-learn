<script setup>
defineProps({
  account: String,
  password: String
})

defineEmits(['update:account', 'update:password'])
</script>
<template>
    <div>
        <input type="text" @value="account" @input="$emit('update:account', $event.target.value)" placeholder="请输入手机号或账号"/>
        <br/>
        <input type="password" @value="password" @input="$emit('update:password', $event.target.value)" placeholder="请输入密码"/>
    </div>
</template>

<script>
export default {
    name: 'LoginRegister',
}
</script>
