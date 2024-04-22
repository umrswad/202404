import httpInstance from "@/utils/app";
export const getTopCategoryAPI = (id) => {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
};
