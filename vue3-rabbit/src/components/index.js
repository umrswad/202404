// 把components中的所组件都进行全局化注册
// 通过插件的方式
import ImageView from "./ImageView.vue";
import GoodsItem from "./GoodsItem.vue";
import Sku from "./Sku/index.vue";
const componentList = [ImageView, GoodsItem, Sku];
export const componentPlugin = {
  install(app) {
    console.log("====================================");
    console.log(componentList);
    console.log("====================================");
    componentList.forEach((item) => {
      console.log(item);
      app.component(`Xtx${item.__name}`, item);
    });
  },
};
