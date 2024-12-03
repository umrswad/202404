import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// 全局指令注册
import { lazyPlugin } from "@/directives";
import "@/styles/common.scss";
// 引入全局组件插件11
import { componentPlugin } from "@/components";

const app = createApp(App);

app.use(componentPlugin);
app.use(createPinia());
app.use(router);
app.use(lazyPlugin);

app.mount("#app");
