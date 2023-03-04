import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/home/home.vue"
import Login from "../components/login/login.vue"
import Order from "../components/order/order.vue"
import Store from "./Stroage"
import { ElMessage } from "element-plus";

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
            name: "home",
            children: [
                {
                    path: 'order/:type', // 0是普通订单,1是秒杀订单
                    component: Order,
                    name: "Order"
                }
            ],
            redirect: "/home/order/0"
        }
    ]
})

Router.beforeEach((to, from ,next) => {
    const user = localStorage.getItem("userName")
    if (user || to.name == "login") {
        next()
    } else {
        ElMessage.error('您未登录！！🥶🥶🙌')
        next("/login")
    }
    // let isLogin = Store.getters.isLogin
    // if (isLogin || from.name == 'login') {
    //     return true
    // } else {
    //     return {
    //         name: 'login'
    //     }
    // }
})

export default Router