import { defineStore } from "pinia";
import { api } from "boot/axios";
import { useQuasar } from "quasar";

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
            location.reload();
          }
        }
      }).catch(error => {
        console.log(error);
        return false;
      });
    }
  }
});
