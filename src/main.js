import { createApp } from 'vue'
import Store from './tools/Stroage'
import Router from './tools/Router'
import App from './App.vue'
import "./style.css"
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'


const app = createApp(App)

app.use(Store)
app.use(Router)
app.use(ElementPlus)
app.mount('#app')
