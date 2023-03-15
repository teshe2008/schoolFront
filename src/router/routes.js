import Dashboard from "pages/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "welcome",
    component: () => import("pages/welcome.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/home",
    name: "home",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: "",
        component: () => import("pages/Home.vue")
      },
      {
        path: "/dashboard",
        component: Dashboard
      }
    ]
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("pages/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
