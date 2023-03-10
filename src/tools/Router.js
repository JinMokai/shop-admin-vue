import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/home/home.vue"
import Login from "@/components/login/login.vue"
import Order from "@/components/order/order.vue"
import Goods from "@/components/goods/Goods.vue"
import AddGood from "@/components/goods/AddGood.vue"
import GoodCateGory from "@/components/goods/GoodCategory.vue"
import MangerList from "@/components/manager/MangerList.vue"
import MangerOrder from "@/components/manager/MangerOrder.vue"
import MangerReqList from "@/components/manager/MangerReqList.vue"
import DataCom from "@/components/financial/DataCom.vue"
import TradeList from "@/components/financial/TradeList.vue"
import TradeInfo from "@/components/financial/TradeInfo.vue"
import NotFound from "@/components/404.vue"

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
            meta: {
                requiresAuth: true // 需要登录才能访问
            },
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
                },
                {
                    path: "ownerlist",
                    component: MangerList,
                    name: "MangerList"
                },
                {
                    path: "ownerreq",
                    component: MangerReqList,
                    name: "MangerReqList"
                },
                {
                    path: "tradelist",
                    component: TradeList,
                    name: "TradeList"
                },
                {
                    path: "tradeinfo",
                    component: TradeInfo,
                    name: "tradeinfo"
                },
                {
                    path: "ownerorder",
                    component: MangerOrder,
                    name: "MangerOrder"
                },
                {
                    path: 'data',
                    component: DataCom,
                    name: 'DataCom'
                }
            ],
            redirect: "/home/order/0"
        },
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: '/:catchAll(.*)',
            name: "NotFound",
            component: NotFound // 匹配所有路径
        }
    ]
})

/**
 * 判断是否登录，已经登录就跳到/home,没登陆就回到login
 */
Router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('userName')
    console.log(to.matched)
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (isLoggedIn) {
            next()
        } else {
            next('/login')
        }
    } else {
        if (isLoggedIn && to.path === '/login') {
            next('/home')
        } else {
            next()
        }
    }
})

export default Router