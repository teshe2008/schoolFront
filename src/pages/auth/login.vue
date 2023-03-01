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
                <q-form class="bg-white q-pa-lg" @submit="authenticate()" ref="myForm">
                  <q-input
                    label="User name"
                    standout="bg-primary text-secondary"
                    class="q-mb-sm"
                    type="text"
                    v-model="formData.userName"
                    lazy-rules
                    :rules="[ val=>!!val || 'field can not be empty',
                    val=>val.length>=5 || 'min character should be 5']"
                  >
                    <template v-slot:append>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <q-input
                    label="Password"
                    standout="bg-primary text-secondary"
                    type="password"
                    v-model="formData.password"
                    lazy-rules
                    :rules="[ val=>!!val || 'field can not be empty']"
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
import { ref } from "vue";
import { matPerson } from "@quasar/extras/material-icons";
import { useRouter } from "vue-router";
import { useAuthStore } from "stores/auth-store";
export default {
  name: "LoginComponent",
  setup() {
    const formData = ref({
      userName: "",
      password: ""
    });
    const myForm = ref(null);
    const authStore = useAuthStore();
    function validate() {
      this.$refs.myForm.validate().then(success => {
        return success;
      });
    }

    function authenticate() {
      authStore.login(formData.value.userName, formData.value.password);
    }
    return {
      persistent: ref(false),
      matPerson,
      formData,
      myForm,
      validate,
      authenticate

    };
  },
  mounted() {
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
