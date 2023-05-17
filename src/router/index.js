import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },  
  //@ Store
  {
    path: "/store/test",
    name: "Test Store",
    component: () => import("../views/store/test.vue"),
  },
  //@ Cloud
  {
    path: "/hosting/duino/",
    name: "Duino",
    component: () => import("../views/more/hosting.duino.vue"),
  },
  {
    path: "/hosting/minecraft/",
    name: "Minecraft",
    component: () => import("../views/hosting/hosting.minecraft.vue"),
  },
  {
    path: "/services/jellyfin",
    name: "Jellyfin",
    component: () => import("../views/services/jellyfin.vue"),
  },
  {
    path: "/hosting/more/",
    name: "More",
    component: () => import("../views/more/more.vue"),
  },
  //{
    //path: "/hosting/discord/",
    //name: "Discord Bot",
    //component: () => import("../views/hosting/hosting.discord.vue"),
  //},
  //@ ducocloud
  {
    path: "/terms-of-service",
    name: "Terms of Service",
    component: () => import("../views/ducocloud/terms-of-service.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    component: () => import("../views/ducocloud/privacy-policy.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ducocloud/contact.vue"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/ducocloud/team.vue"),
  },
  //@ Login
  {
    path: "/login",
    name: "Services Login",
    component: () => import("../views/login/login.vue"),
  }, 
  {
    path: "/redirects/billing",
    name: "Billing",
    component: () => import("../views/login/billing.vue")
  },
  {
    path: "/redirects/pterodactyl",
    name: "Pterodactyl",
    component: () => import("../views/login/pterodactyl.vue")
  },
  //@ Hardware
  {
    path: "/hardware",
    name: "Hardware",
    component: () => import("../views/hardware/hardware.vue"),
  },
  {
    path: "/hardware/duco-hardware",
    name: "Duco Hardware",
    component: () => import("../views/hardware/duco-hardware.vue"),
  },
  {
    path: "/hardware/duco-hardware/us",
    name: "US Hardware",
    component: () => import("../views/hardware/duco-hardware/us.vue"),
  },
  //@ Partners
  {
    path: "/partners",
    name: "Partners",
    component: () => import("../views/partners/partners.vue"),
  },
  {
    path: "/partners/creators",
    name: "Creators",
    component: () => import("../views/partners/creators.vue"),
  },
  {
    path: "/partners/servers",
    name: "Servers",
    component: () => import("../views/partners/servers.vue"),
  },
  //@ Redirects
  {
    path: "/discord",
    name: "Discord",
    component: () => import("../views/redirects/discord.vue")
  },
  {
    path: "/redirects/partnerships",
    name: "Partnerships",
    component: () => import("../views/redirects/partners.vue")
  },
  //@ Pages
  {
    path: "/pages/pool-hosting",
    name: "Pool Hosting",
    component: () => import("../views/pages/pool-hosting.vue")
  },
  {
    path: "/pages/server-import",
    name: "Server Import",
    component: () => import("../views/pages/server-import.vue")
  },
  {
    path: "/pages/dedicated-miner",
    name: "Dedicated Miner",
    component: () => import("../views/pages/dedicated-miner.vue")
  },
  {
    path: "/pages/sell-hardware",
    name: "Sell Hardware",
    component: () => import("../views/services/sell-power.vue")
  },
  //@ Errors
  {
    path: "*",
    name: "404 not found",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;