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
                            v-if="canAny(menuItem.abilities)"
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
                  <q-item clickable v-ripple :to="submenus.href" exact v-if="can(submenus.ability)">
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
          <q-item clickable v-ripple :to="menuItem.href" exact exact-active-class="active"
                  v-if="can(menuItem.ability)">
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
import { can, canAny } from "src/AbilityGuard";

const menuList = ref([
  {
    icon: "dashboard",
    iconColor: "white",
    hasExpansion: false,
    label: "Dashboard",
    group: "menu",
    href: "dashboard",
    ability: "Dashboard-view"
  },
  {
    icon: "school",
    iconColor: "white",
    hasExpansion: true,
    label: "Schools",
    group: "menu",
    abilities: ["Schools-view"],
    subItems: [
      {
        icon: "school",
        iconColor: "white",
        hasExpansion: false,
        label: "school setup",
        href: "school",
        ability: "Schools-view"
      },
      {
        icon: "school",
        iconColor: "white",
        hasExpansion: false,
        label: "School Branch",
        href: "school",
        ability: "SchoolBranch-view"
      },
      {
        icon: "building",
        iconColor: "white",
        hasExpansion: false,
        label: "Buildings",
        href: "school",
        ability: "Building-view"
      },
      {
        icon: "Calendar",
        iconColor: "white",
        hasExpansion: false,
        label: "Buildings",
        href: "school",
        ability: "Calendar-view"
      }
    ]
  },
  {
    icon: "person",
    iconColor: "white",
    hasExpansion: true,
    label: "Users",
    group: "menu",
    abilities: ["Users-view", "Role-view"],
    subItems: [{
      icon: "person",
      iconColor: "white",
      hasExpansion: false,
      label: "users",
      href: "users",
      ability: "Users-view"
    },
      {
        icon: "Role",
        iconColor: "white",
        hasExpansion: false,
        label: "Role",
        href: "",
        ability: "Role-view"
      },
      {
        icon: "Permission",
        iconColor: "white",
        hasExpansion: false,
        label: "Permissions",
        href: "",
        ability: "Permission-view"
      }
    ]
  },
  {
    icon: "cast_for_education",
    iconColor: "white",
    hasExpansion: true,
    abilities: ["Staffs-view", "staffEnrollments-view"],
    group: "menu",
    label: "Staffs",
    subItems: [
      {
        icon: "diversity_3",
        iconColor: "white",
        hasExpansion: false,
        ability: "Staffs-view",
        group: "menu",
        label: "Staffs"
      },
      {
        icon: "diversity_3",
        iconColor: "white",
        hasExpansion: false,
        ability: "staffEnrollments-view",
        group: "menu",
        label: "Staffs Enrollments"
      }
    ]
  },
  {
    icon: "diversity_3",
    iconColor: "white",
    hasExpansion: true,
    abilities: ["school-view", "StudentHealthies-view", "StudentsEnrollments-view", "Parents-view"],
    group: "menu",
    label: "Students",
    subItems: [
      {
        icon: "diversity_3",
        iconColor: "white",
        hasExpansion: false,
        ability: "Students-view",
        group: "menu",
        label: "Students"
      },
      {
        icon: "diversity_3",
        iconColor: "white",
        hasExpansion: false,
        ability: "StudentHealthies-view",
        group: "menu",
        label: "Student Healthy"
      },
      {
        icon: "diversity_3",
        iconColor: "white",
        hasExpansion: false,
        ability: "StudentsEnrollments-view",
        group: "menu",
        label: "Student Enrollments"
      },
      {
        icon: "diversity_3",
        iconColor: "white",
        hasExpansion: false,
        ability: "Parents-view",
        group: "menu",
        label: "Parents"
      }
    ]
  },
  {
    icon: "upcoming",
    iconColor: "white",
    hasExpansion: true,
    abilities: [
      "AcademicBreakdown-view", "Shifts-view", "AcademicYear-view", "Semesters-view", "Quarters-view", "Grade-view", "Subject-view"
    ],
    group: "menu",
    label: "Academic",
    subItems: [
      {
        icon: "upcoming",
        iconColor: "white",
        hasExpansion: false,
        ability: "AcademicYear-view",
        group: "menu",
        label: "Academic Year"
      },
      {
        icon: "upcoming",
        iconColor: "white",
        hasExpansion: false,
        ability: "Shifts-view",
        group: "menu",
        label: "Shifts"
      },
      {
        icon: "upcoming",
        iconColor: "white",
        hasExpansion: false,
        ability: "Grade-view",
        group: "menu",
        label: "Grades"
      },
      {
        icon: "upcoming",
        iconColor: "white",
        hasExpansion: false,
        ability: "Section-view",
        group: "menu",
        label: "Grades"
      }
    ]
  },
  {
    icon: "event_note",
    iconColor: "white",
    hasExpansion: true,
    abilities: ["Period-view", "TeacherAllocation-view", "Timetable-view", "OffDay-view"],
    group: "menu",
    label: "Schedule",
    subItems: [{
      icon: "event_note",
      iconColor: "white",
      hasExpansion: false,
      ability: "Period-view",
      group: "menu",
      label: "Periods"
    }, {
      icon: "event_note",
      iconColor: "white",
      hasExpansion: false,
      ability: "TeacherAllocation-view",
      group: "menu",
      label: "Teacher Allocations"
    }, {
      icon: "event_note",
      iconColor: "white",
      hasExpansion: false,
      ability: "OffDay-view",
      group: "menu",
      label: "Off Days"
    }, {
      icon: "event_note",
      iconColor: "white",
      hasExpansion: false,
      ability: "Timetable-view",
      group: "menu",
      label: "Time Table"
    }
    ]
  },
  {
    icon: "event_available",
    iconColor: "white",
    hasExpansion: true,
    abilities: ["Student_attendances-view", "Staff_attendances-view"],
    group: "menu",
    label: "Attendance"
  },
  {
    icon: "grading",
    iconColor: "white",
    hasExpansion: true,
    abilities: ["school-view"],
    group: "menu",
    label: "Grading"
  },
  {
    icon: "timer",
    iconColor: "white",
    hasExpansion: true,
    abilities: ["school-view"],
    group: "menu",
    label: "Notifications"
  },
  {
    icon: "tune",
    iconColor: "white",
    hasExpansion: true,
    abilities: ["school-view"],
    group: "menu",
    label: "Settings"
  },
  {
    icon: "sticky_note_2",
    iconColor: "white",
    hasExpansion: true,
    abilities: ["school-view"],
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
      barStyle,
      can,
      canAny
    };
  }
};
</script>

<style scoped>

</style>
