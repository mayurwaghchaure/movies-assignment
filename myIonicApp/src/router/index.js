import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/MainTabsPage.vue";

const routes = [
  {
    name: "movies",
    path: "/",
    redirect: "/tabs/movies",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/subscription",
      },
      {
        path: "subscription",
        component: () => import("@/views/subscription/SubscriptionLayout.vue"),
      },
      {
        path: "movies",
        component: () => import("@/views/movielisting/MovieListingPage.vue"),
        props: true,
      },
      {
        name: "MovieDetails",
        path: "movies/details/:movie",
        component: () => import("@/views/movielisting/MovieDetails.vue"),
        props: true,
      },
      {
        name: "aboutus",
        path: "aboutus",
        component: () => import("@/views/aboutus/AboutUsPageLayout.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
