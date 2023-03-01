import { boot } from "quasar/wrappers";

export default boot(({ router, store }) => {
  router.beforeEach((to, from) => {
    if (store.isLoggedIn) {
      router.push("home");
    }
    if (localStorage.getItem("authUser") !== null && to.name !== "home") {
      return router.push("home");
    } else {
      if (localStorage.getItem("authUser") == null && to.name !== "welcome" && to.meta.requiresAuth) {
        return "/";
      }
    }
  });
});
