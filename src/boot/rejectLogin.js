import { boot } from "quasar/wrappers";
import { useAuthStore } from "stores/auth-store";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ urlPath }) => {
  // something to do
  return new Promise((resolve, reject) => {
    // ...
    const isAuthorized = useAuthStore().$state.isAuthenticated;
    if (!isAuthorized && !urlPath.startsWith("/login")) {
      reject({ url: "/login" });
    }
    // ...
  });
});
