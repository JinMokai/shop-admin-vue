import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/home/home.vue"
import Login from "../components/login/login.vue"
import Store from "./Stroage"

const Router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/login",
            component: Login,
            name: "login"
        },
        {
            path: "/home",
            component: Home,
            name: "home"
        }
    ]
})

Router.beforeEach((from) => {
    let isLogin = Store.getters.isLogin
    if (isLogin || from.name == 'login') {
        return true
    } else {
        return {
            name: 'login'
        }
    }
})

export default Router