import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Notify, useQuasar } from "quasar";
import router from "src/router";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      isAuthenticated: false,
      authUser: localStorage.getItem("authUser"),
      device_name: null
    };
  },
  getters: {
    currentUser: (state) => state.authUser
  },
  actions: {
    async getToken() {
      await api.get("/sanctum/csrf-cookie").catch(error => console.log("can not reach the server"));
    },
    async login(userName, Password) {
      const store = useAuthStore();
      const $q = useQuasar();
      return await api.post("/login", {
        "email": userName,
        "password": Password
      }).then(response => {
        if (response.status === 200) {
          store.isAuthenticated = true;
          localStorage.setItem("authUser", response.data.id);
          localStorage.setItem("currentUser", response.data.name);
        } else {
          Notify.create({
            message: response.statusText + "with status code" + response.status,
            position: "top-right",
            timeout: 3000,
            color: "lime",
            textColor: "white",
            actions: [{ icon: "close", color: "white" }]
          });
        }
      }).catch(error => {
        Notify.create({
          message: error.errorText + "with status code" + error.errorCode,
          position: "top-right",
          timeout: 3000,
          color: "red",
          textColor: "white",
          actions: [{ icon: "close", color: "white" }]
        });
      });
    }
  }
});
