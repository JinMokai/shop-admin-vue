import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/home/home.vue"
import Login from "@/components/login/login.vue"
import Order from "@/components/order/order.vue"
import Goods from "@/components/goods/Goods.vue"
import AddGood from "@/components/goods/AddGood.vue"
import GoodCateGory from "@/components/goods/GoodCategory.vue"
import Store from "@/tools/Stroage"
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
                },
                {
                    path: "goods/:type", // 0是普通商品 1是秒杀商品 2是今日推荐
                    component: Goods,
                    name: "Goods"
                },
                {
                    path: "addGood/:type",
                    component: AddGood,
                    name: "AddGood"
                },
                {
                    path: "category",
                    component: GoodCateGory,
                    name: "GoodCateGory"
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