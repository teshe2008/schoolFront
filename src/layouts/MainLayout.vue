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
        <q-btn dense icon="person" glossy color="primary" round>
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Profile</div>
                <q-btn label="my account" class="bg-primary text-secondary q-mt-auto" size="12px" dense />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center text-subtitle1">
                <q-avatar size="72px">
                  <img alt="profile" src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>
                <logout-component />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      round
      class="bg-primary right-bordered"
    >
      <sidebar-menu />
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
import LogoutComponent from "pages/auth/logout.vue";
import SidebarMenu from "components/sidebarMenu.vue";

export default {
  components: { SidebarMenu, LogoutComponent },
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
