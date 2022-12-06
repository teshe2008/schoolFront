const routes = [
  {
    path: "/",
    component: () => import("pages/welcome.vue")
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue")
  },
  {
    path: "/Login",
    component: () => import("pages/auth/login.vue")
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
