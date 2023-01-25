<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      label="login"
      class="bg-primary text-secondary"
      @click="persistent = true"
    />
    <q-dialog v-model="persistent" persistent transition-show="rotate" transition-hide="rotate">
      <q-card
        style="max-width: 750px;min-width: 650px;" id="loginModal">
        <q-card-section>
          <q-card-actions>
            <q-toolbar-title class="text-secondary">Login</q-toolbar-title>
            <q-btn rounded v-close-popup round dense icon="close" icon-right="true"
                   class="float-right text-secondary" />
          </q-card-actions>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="col">
            </div>
            <div class="col-7">
              <q-card class="content-center content-center">
                <q-icon :name="matPerson" size="8em" class="bg-secondary text-white q-ma-sm"
                        style="border-radius: 50%; margin-left: 35%;" />
                <q-form class="bg-white q-pa-lg" @submit.prevent="authenticate" ref="myForm">
                  <q-input
                    label="User name"
                    standout="bg-primary text-secondary"
                    class="q-mb-sm"
                    type="text"
                    v-model="formData.userName">
                    <template v-slot:append>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <q-input
                    label="Password"
                    standout="bg-primary text-secondary"
                    type="password"
                    v-model="formData.password"
                  >
                    <template v-slot:append>
                      <q-icon name="key" />
                    </template>
                  </q-input>
                  <q-btn
                    class="text-white bg-primary q-ma-sm text-center q-ml-auto q-ml-lg"
                    label="login"
                    type="submit"
                    style="margin-left: 40%;"
                    @click="authenticate"
                  />
                </q-form>

                <span class="content-center items-center q-ma-md">
                  <span>forgot password?</span>
                  <router-link to="login">reset</router-link>
                </span>
              </q-card>
            </div>
          </div>

        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";
import { matPerson } from "@quasar/extras/material-icons";
import { useRouter } from "vue-router";
import { useQuasar, QSpinnerFacebook } from "quasar";
import { useAuthStore } from "stores/auth-store";
import { api } from "boot/axios";

export default {
  name: "LoginComponent",
  setup() {
    const formData = ref({
      userName: "",
      password: ""
    });
    const router = useRouter();
    const $q = useQuasar();
    const myForm = ref(null);
    const authStore = useAuthStore();
    let timer;

    function validate() {
      this.$refs.myForm.validate().then(success => {
        return success;
      });
    }

    function showLoading() {
      $q.loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: "primary",
        spinnerSize: 140,
        backgroundColor: "secondary",
        messageColor: "black"
      });
      timer = setTimeout(() => {
        $q.loading.hide();
        timer = void 0;
      }, 2000);
    }


    function authenticate() {
      showLoading();
      authStore.login(formData.value.userName, formData.value.password, $q.platform.is.desktop);

    }

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });
    return {
      persistent: ref(false),
      matPerson,
      formData,
      myForm,
      validate,
      showLoading,
      authStore,
      authenticate

    };
  },
  mounted() {
    this.authStore.getToken();
  }
};

</script>

<style scoped>
#loginModal {
  background: url("../../assets/background/login_pageBackground.jpg") fixed;
  width: 750px !important;
  height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
