
import { createStore } from "vuex";
const Store = createStore({
    state() {
        return {
            userName: "",
            userPassword: ""
        }
    },
    getters: {
        /**
         * 判断用户是否登录（！实际开发中，这里应该有个token来判断用户存在，这里方便自己就没写！）
         * @param {*} state 
         * @returns Boolean
         */
        isLogin: (state) => {
            return state.userName.length > 0;
        }
    },
    mutations: {
        /**
         * 清理用户
         * @param {Object} state 
         */
        clearUserInfo(state) {
            state.userName = ""
            state.userPassword = ""
        },
        /**
         * 注册用户
         * @param {Object} state 
         * @param {Object} name && password 
         */
        registerUserInfo(state, {name, password}) {
            state.userName = name
            state.userPassword = password
        }
    }
})

export default Store