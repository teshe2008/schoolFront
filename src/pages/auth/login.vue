<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      label="login"
      class="active-button"
      @click="persistent = true"
      push
    />
    <q-dialog v-model="persistent" persistent >
      <q-card
        style="width: 600px; min-height: 300px" >
        <q-card-section>
          <q-card-actions>
            <q-toolbar-title >Login</q-toolbar-title>
            <q-btn v-close-popup  flat class="bg-white" icon="close"/>
          </q-card-actions>
        </q-card-section>
<!--        <q-separator />-->

        <q-card-section class="q-pt-none">
<!--          <div class="row">-->
<!--            <div class="col">-->
<!--            </div>-->
<!--            <div class="col-7">-->
<!--              <q-card class="content-center content-center">-->
                <q-icon :name="matPerson" size="8em" class="bg-secondary text-white q-ma-sm"
                        style="border-radius: 50%; margin-left: 40%;" />
                <q-form class="bg-white q-pa-lg" @submit="authenticate()" ref="myForm">
                  <q-input
                    label="User name"
                    autocomplete
                    outlined
                    class="q-mb-sm"
                    type="text"
                    v-model="formData.userName"
                    bottom-slots
                    lazy-rules
                    :rules="[ val=>!!val || 'field can not be empty',
                    val=>val.length>=5 || 'min character should be 5']"
                  >
                    <template v-slot:append>
                      <q-icon name="person" />
                    </template>
                    <template v-slot:error>
                      <div v-if=" errorMessage.value.userNameError!==null">

                      </div>
                    </template>
                  </q-input>
                  <q-input
                    label="Password"
                    autocomplete
                    outlined
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
                    class="active-button"
                    label="login"
                    type="submit"
                    style="margin-left: 35%; width: 150px"
                    push />
                </q-form>

                <span class="content-center items-center q-ma-md">
                  <span>forgot password?</span>
                  <router-link to="login">reset</router-link>
                </span>
<!--              </q-card>-->
<!--            </div>-->
<!--          </div>-->

        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { matPerson } from "@quasar/extras/material-icons";
import { useAuthStore } from "stores/auth-store";
import { useQuasar } from "quasar";

export default {
  name: "LoginComponent",
  setup() {
    const formData = ref({
      userName: "",
      password: ""
    });
    const myForm = ref(null);
    const $q = useQuasar();
    const errorMessage = ref([{
      userNameError: null,
      passwordError: null
    }]);

    function validate() {
      this.$refs.myForm.validate().then(success => {
        return success;
      });
    }


    async function authenticate() {
      await useAuthStore().login(formData.value.userName, formData.value.password);
    }

    function showLoading() {
      $q.loading.show();
      // hiding in 2s
      let timer = setTimeout(() => {
        $q.loading.hide();
        timer = void 0;
      }, 2000);
    }

    return {
      persistent: ref(false),
      matPerson,
      formData,
      myForm,
      showLoading,
      validate,
      authenticate,
      errorMessage

    };
  },
  mounted() {
  }
};

</script>

<style scoped>

</style>
