import httpInstance from "@/utils/app";
export function getCaTEgory() {
  return httpInstance({
    url: "home/category/head",
  });
}
