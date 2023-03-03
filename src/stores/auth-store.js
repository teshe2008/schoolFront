import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Notify } from "quasar";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      authUser: localStorage.getItem("authUser"),
      isLoggedIn: localStorage.getItem("isLoggedIn"),
      device_name: null
    };
  },
  getters: {
    currentUser: (state) => state.authUser
  },
  actions: {

    async login(userName, Password) {
      await api.post("/login", {
        "user_name": userName,
        "password": Password
      }).then(response => {
        if (response.status === 200) {
          localStorage.setItem("authUser", response.data.token);
          useAuthStore().$state.isLoggedIn = true;
          localStorage.setItem("isLoggedIn", true);
          if (useAuthStore().$state.isLoggedIn) {
            return this.router.push("home");
          }
        }
      }).catch(error => {
        console.log(error);
        return false;
      });
    },
    async logout() {
      await api.post("/logout").then(response => {
        if (response.status === 200) {
          useAuthStore().$state.authUser = null;
          useAuthStore().$state.isLoggedIn = false;
          localStorage.removeItem("authUser");
          localStorage.removeItem("isLoggedIn");
          return this.router.push({ name: "welcome" });
        } else {
          Notify.create({
            message: response.statusText,
            position: "top-right",
            type: "negative"
          });
        }

      }).catch(error => {
        Notify.create({
          message: "unknown error, unable to logout, please try to refresh the page"+error,
          position: "top-right",
          type: "negative"
        });
      });
    }
  }
});
