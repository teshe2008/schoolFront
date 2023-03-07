<template>
  <q-scroll-area
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
    class="bg-primary" style="height: calc(100% - 150px); margin-top: 150px;"
    :horizontal-thumb-style="{opacity:0}"
  >
    <q-list padding>
      <template v-for="(menuItem, index) in menuList" :key="index">
        <div v-if="menuItem.hasExpansion">
          <q-expansion-item clickable
                            :group="menuItem.group"
                            exact target="_self" :to="menuItem.href"
          >
            <template v-slot:header>
              <q-item-section avatar :to="menuItem.href">
                <q-icon :name="menuItem.icon" :color="menuItem.iconColor" />
              </q-item-section>
              <q-item-section class="text-secondary text-bold">
                {{ menuItem.label }}
              </q-item-section>
            </template>
            <q-list>
              <template v-for="(submenus,key) in menuItem.subItems" :key="key">
                <div v-if="submenus.hasExpansion" :key="key">
                  <q-expansion-item clickable
                  >
                    <template v-slot:header>
                      <q-item-section avatar>
                        <q-icon :name="submenus.icon" :color="menuItem.iconColor" />
                      </q-item-section>
                      <q-item-section class="text-secondary text-bold">
                        {{ submenus.label }}
                      </q-item-section>
                    </template>

                  </q-expansion-item>
                </div>
                <div v-else>
                  <q-item clickable v-ripple :to="submenus.href" exact>
                    <q-item-section avatar>
                      <q-icon :name="submenus.icon" :color="submenus.iconColor" />
                    </q-item-section>
                    <q-item-section class="text-secondary text-bold">
                      {{ submenus.label }}
                    </q-item-section>
                  </q-item>
                </div>
              </template>

            </q-list>
          </q-expansion-item>
        </div>
        <div v-else>
          <q-item clickable v-ripple :to="menuItem.href" target="_self" exact exact-active-class="active"
                  @click="menuItem.href">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" :color="menuItem.iconColor" />
            </q-item-section>
            <q-item-section class="text-secondary text-bold">
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
        </div>
        <q-separator :key="'sep' + index" v-if="menuItem.separator" />
      </template>
    </q-list>
  </q-scroll-area>
  <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
    <div class="absolute-bottom bg-transparent">
      <q-avatar size="56px" class="q-mb-sm">
        <img alt="profile picture" src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>
      <div class="text-weight-bold">School Name</div>
      <div>@username</div>
    </div>
  </q-img>
</template>

<script>
import { ref } from "vue";

const menuList = ref([
  {
    icon: "dashboard",
    iconColor: "white",
    hasExpansion: false,
    label: "Dashboard",
    group: "menu",
    href: "/home"
  },
  {
    icon: "school",
    iconColor: "white",
    hasExpansion: true,
    label: "Schools",
    group: "menu",
    subItems: [
      {
        icon: "school",
        iconColor: "white",
        hasExpansion: false,
        label: "school setup",
        href: "/school"
      }
    ]
  },
  {
    icon: "person",
    iconColor: "white",
    hasExpansion: true,
    label: "Users",
    group: "menu",
    subItems: [{
      icon: "persons",
      iconColor: "white",
      hasExpansion: false,
      label: "users"
    }]
  },
  {
    icon: "cast_for_education",
    iconColor: "white",
    hasExpansion: true,
    group: "menu",
    label: "Staffs"
  },
  {
    icon: "diversity_3",
    iconColor: "white",
    hasExpansion: true,
    group: "menu",
    label: "Students"
  },
  {
    icon: "upcoming",
    iconColor: "white",
    hasExpansion: true,
    group: "menu",
    label: "Academic"
  },
  {
    icon: "event_note",
    iconColor: "white",
    hasExpansion: true,
    group: "menu",
    label: "Schedule"
  },
  {
    icon: "event_available",
    iconColor: "white",
    hasExpansion: true,
    group: "menu",
    label: "Attendance"
  },
  {
    icon: "grading",
    iconColor: "white",
    hasExpansion: true,
    group: "menu",
    label: "Grading"
  },
  {
    icon: "timer",
    iconColor: "white",
    hasExpansion: true,
    group: "menu",
    label: "Notifications"
  },
  {
    icon: "tune",
    iconColor: "white",
    hasExpansion: true,
    group: "menu",
    label: "Settings"
  },
  {
    icon: "sticky_note_2",
    iconColor: "white",
    hasExpansion: true,
    group: "menu",
    label: "Reports"
  }

]);

export default {
  name: "sidebarMenu",
  setup() {
    const thumbStyle = ref({
      right: "3px",
      borderRadius: "2px",
      backgroundColor: "#027be3",
      width: "3px",
      opacity: 0.75
    });
    const barStyle = ref({
      right: "2px",
      borderRadius: "5px",
      backgroundColor: "#027be3",
      width: "6px",
      opacity: 0.2,
      marginTop: "-3px",
      marginBottom: "-3px",
      paddingTop: "3px",
      paddingBottom: "3px"
    });

    return {
      drawer: ref(false),
      menuList,
      thumbStyle,
      barStyle
    };
  }
};
</script>

<style scoped>

</style>
