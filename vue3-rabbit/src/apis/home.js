import httpInstance from "@/utils/app";
export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}
export const getNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};
export const getHotAPI = () => {
  return httpInstance({
    url: "/home/hot",
  });
};
export const getGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
