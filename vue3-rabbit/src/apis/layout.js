import httpInstance from "@/utils/app";
export function getCategoryAPI() {
  return httpInstance({
    url: "/home/category/head",
  });
}
