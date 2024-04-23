import httpInstance from "@/utils/app";
export const getTopCategoryAPI = (id) => {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
};
export const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};
export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};
