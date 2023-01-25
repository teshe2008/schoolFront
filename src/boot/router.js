import { boot } from "quasar/wrappers";

export default boot(({ router, store }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (localStorage.getItem("authUser") == null) {
        next({
          path: "/",
          params: { nextUrl: to.fullPath }
        });
      } else {
        if (!store.state.isAuthenticated) {
          next({
            path: "/",
            params: { nextUrl: to.fullPath }
          });
        } else {
          return router.push("home");
        }
      }
    } else {
      next();
    }
  });
});
