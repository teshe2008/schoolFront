<template>
  <div>
    <q-btn label="logout" @click="logout()" push color="secondary"
           text-color="primary" class="float-right"
    />
  </div>
</template>

<script>
import { useAuthStore } from "stores/auth-store";

export default {
  name: "logout-component",
  data() {
    return {};
  },
  methods: {
    logout: function() {
      useAuthStore().logout();
    }
  }
};
</script>

<style>


</style>
