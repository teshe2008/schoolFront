<template>
  <q-layout view="lHr lpR lFf">
    <q-header reveal elevated class="bg-white text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          class="bg-primary"
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-avatar>
            <img alt="logo" src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
        <q-btn
          dense
          flat
          icon="user"

        />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      round
      class="bg-primary right-bordered"
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <slot id="mainContent">
        <router-view />
      </slot>
    </q-page-container>
    <q-footer elevated class="bg-white text-white">
      <q-toolbar>
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
    };
  }
};
</script>

<style>
.right-bordered {
  border-radius: 0% 10% 10% 0;
}
</style>
