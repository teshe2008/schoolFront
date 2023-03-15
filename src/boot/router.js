import { boot } from "quasar/wrappers";
import { useAuthStore } from "stores/auth-store";


export default boot(({ router }) => {
  router.beforeEach(async (to, from, next) => {
    const isLoggedIn = useAuthStore().isLoggedIn;
    const token = localStorage.getItem("authUser");
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLoggedIn || !token) {
        next("/welcome");
      } else {
        next();
      }
    } else if (isLoggedIn && token) {
      next("/home");
    } else {
      next();
    }
  });
});
