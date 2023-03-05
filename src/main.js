import { createApp } from 'vue'
import Store from './tools/Stroage'
import Router from './tools/Router'
import App from './App.vue'
import "./style.css"
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'


const app = createApp(App)
// 关闭警告
// app.config.warnHandler = function (msg, vm, trace) {
//     // 如果警告信息中包含'@element-plus'，就不输出到控制台
//     if (msg.includes('@element-plus')) {
//       return false
//     }
//   }
app.use(Store)
app.use(Router)
app.use(ElementPlus)
app.mount('#app')
