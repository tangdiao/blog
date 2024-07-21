export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/develop/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"页面的标题"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/develop/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
