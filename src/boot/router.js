import { boot } from "quasar/wrappers";

export default boot(({ router, store }) => {
  router.beforeEach((to, from) => {
    if (localStorage.getItem("authUser") !== null && to.name !== "home") {
      return "home";
    } else {
      if (localStorage.getItem("authUser") == null && to.name !== "welcome" && to.meta.requiresAuth) {
        return "/";
      }
    }
  });
});
