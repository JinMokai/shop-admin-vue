<template>
    <div class="container">
        <div id="title">
            <h1>电商后台管理系统</h1>
        </div>
    <div class="input">
        <el-input v-model="name" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
    </div>
    <div class="input">
        <el-input v-model="password" prefix-icon="el-icon-lock" placeholder="请输入密码" show-password></el-input>
    </div>
    <div class="input">
        <el-button @click="login" style="width: 500px;" type="primary" :disabled="disabled">登录</el-button>
    </div>
</div>

</template>

<script>
import Storage from "../../tools/Stroage"
import { ElMessage } from "element-plus"
export default {
    name: "Login",
    data() {
        return {
            name: "",
            password: ""
        }
    },
    computed: {
        disabled() {
            return this.name.length == 0 || this.password.length == 0
        }
    },
    methods: {
        login() {
            Storage.commit("registerUserInfo",{
                name: this.name,
                password: this.password
            })
            ElMessage({
              message: "登录成功",
              type: 'success',
              duration: 3000
            })
            setTimeout(() => {
                this.$router.push({
                    name: "home"
                })
            }, 3000)
        }
    },
    components: {
    }
}
</script>

<style scoped>
.container {
    background-color: #595959;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
}
#title {
    text-align: center;
    color: azure;
    margin-top: 200px;
}
.input {
    margin: 20px auto;
    width: 500px;
}
</style>