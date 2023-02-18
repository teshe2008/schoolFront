import { defineStore } from "pinia";
import { api } from "boot/axios";
import { Notify, useQuasar } from "quasar";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      authUser: localStorage.getItem("authUser"),
      device_name: null
    };
  },
  getters: {
    currentUser: (state) => state.authUser
  },
  actions: {

    async login(userName, Password) {
      const store = useAuthStore();
      const $q = useQuasar();
      await api.get('/sanctum/csrf-cookie').then(response => {
         api.post("/login", {
        "user_name": userName,
        "password": Password
      }).then(response => {
        if (response.status === 200) {
          localStorage.setItem("authUser", response.data.token);
          return true;
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
        return false;
      });
      });
    }
  }
});
