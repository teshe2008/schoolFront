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
          localStorage.setItem("abilities", response.data.abilities);
          useAuthStore().$state.isLoggedIn = true;
          useAuthStore().$state.authUser = response.data.token;
          localStorage.setItem("isLoggedIn", true);

          api.interceptors.request.use((config) => {
            const token = localStorage.getItem("authUser");
            if (token) {
              config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
          });

          return this.router.push("home");
        }
      }).catch(error => {
        console.log(error);
        return false;
      });
    },
    async logout() {
      await api.post("/logout").then(response => {
        if (response.status === 200) {
          localStorage.clear();
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
