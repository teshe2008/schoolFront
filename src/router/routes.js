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
