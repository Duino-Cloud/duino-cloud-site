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
  //@ Games
  {
    path: "/hosting/games/",
    name: "Galactiq | Games",
    component: () => import("../views/games/games.vue"),
  },
  //@ Minecraft
  {
    path: "/hosting/minecraft/",
    name: "Galactiq | Minecraft",
    component: () => import("../views/games/minecraft/minecraft.vue"),
  },
  {
    path: "/hosting/minecraft/standard",
    name: "Minecraft Standard",
    component: () => import("../views/games/minecraft/hosting.minecraft.standard.vue"),
  },
  {
    path: "/hosting/minecraft/budget",
    name: "Minecraft Budget",
    component: () => import("../views/games/minecraft/hosting.minecraft.budget.vue"),
  },
//{
  //path: "/hosting/minecraft/arm",
  //name: "Minecraft ARM",
  //component: () => import("../views/games/minecraft/hosting.minecraft.arm.vue"),
//},
  {
    path: "/hosting/minecraft/free",
    name: "Minecraft Free",
    component: () => import("../views/games/minecraft/hosting.minecraft.free.vue"),
  },
//{
  //path: "/hosting/minecraft/cpu",
  //name: "Minecraft Dedicated CPU Hosting",
  //component: () => import("../views/games/minecraft/hosting.minecraft.cpu.vue"),
//},
//{
  //path: "/hosting/den",
  //name: "DEN Hosting",
  //component: () => import("../views/systems/hosting.den.vue"),
//},

  //@ Steam
  {
    path: "/hosting/mindustry",
    name: "Mindustry Hosting",
    component: () => import("../views/games/steam/hosting.mindustry.vue"),
  },
  {
    path: "/hosting/steam/vrising",
    name: "V Rising Hosting",
    component: () => import("../views/games/steam/hosting.vrising.vue"),
  },
  {
    path: "/hosting/steam/factorio",
    name: "Factorio Hosting",
    component: () => import("../views/games/steam/hosting.factorio.vue"),
  },
  {
    path: "/hosting/steam/terraria",
    name: "Terraria Hosting",
    component: () => import("../views/games/steam/hosting.terraria.vue"),
  },
  {
    path: "/hosting/steam/csgo",
    name: "CSGO Hosting",
    component: () => import("../views/games/steam/hosting.csgo.vue"),
  },
  {
    path: "/hosting/steam/rust",
    name: "Rust Hosting",
    component: () => import("../views/games/steam/hosting.rust.vue"),
  },
  {
    path: "/hosting/steam/unturned",
    name: "Unturned Hosting",
    component: () => import("../views/games/steam/hosting.unturned.vue"),
  },
  {
    path: "/hosting/steam/gmod",
    name: "Gmod Hosting",
    component: () => import("../views/games/steam/hosting.gmod.vue"),
  },
  {
    path: "/hosting/steam/scp",
    name: "SCP Hosting",
    component: () => import("../views/games/steam/hosting.scp.vue"),
  },
  {
    path: "/hosting/steam/satisfactory",
    name: "Satisfactory Hosting",
    component: () => import("../views/games/steam/hosting.satisfactory.vue"),
  },
  {
    path: "/hosting/steam/valheim",
    name: "Valheim Hosting",
    component: () => import("../views/games/steam/hosting.valheim.vue"),
  },
  {
    path: "/hosting/steam/fivem",
    name: "FiveM Hosting",
    component: () => import("../views/games/steam/hosting.fivem.vue"),
  },
  {
    path: "/hosting/steam",
    name: "Steam Servers",
    component: () => import("../views/games/steam/steam_servers.vue"),
  },
  //@ Misc
  {
    path: "/hosting/discord",
    name: "Discord Bot Hosting",
    component: () => import("../views/more/hosting.discord.vue"),
  },
//{
  //path: "/hosting/database",
  //name: "Database Hosting",
  //component: () => import("../views/more/hosting.database.vue"),
//},
//{
  //path: "/hosting/storage",
  //name: "Cloud Storage",
  //component: () => import("../views/more/hosting.cloudstorage.vue"),
//},
//{
  //path: "/hosting/apps",
  //name: "Cloud Apps",
  //component: () => import("../views/more/hosting.cloudapps.vue"),
//},
//{
  //path: "/hosting/owncast",
  //name: "OwnCast",
  //component: () => import("../views/more/hosting.owncast.vue"),
//},    
  {
    path: "/hosting/more",
    name: "More Products",
    component: () => import("../views/more/more.vue"),
  }, 
  //@ Auctions
  {
    path: "/auctions/minecraft",
    name: "Minecraft Auction",
    component: () => import("../views/auctions/minecraft.auctions.vue"),
  },
  {
    path: "/hosting/auctions",
    name: "Auctions",
    component: () => import("../views/auctions/auctions.vue"),
  },
  {
    path: "/auctions/discord",
    name: "Discord Auction",
    component: () => import("../views/auctions/discord.auctions.vue"),
  },
  //@ Cloud
  {
    path: "/hosting/vps/",
    name: "Cloud VPS",
    component: () => import("../views/cloud/hosting.vps.vue"),
  },
  {
    path: "/hosting/bare-metal/",
    name: "Bare Metal",
    component: () => import("../views/cloud/bare-metal.vue"),
  },
  {
    path: "/hosting/duino/",
    name: "Duino",
    component: () => import("../views/more/hosting.duino.vue"),
  },
  //@ Galactiq
  {
    path: "/terms-of-service",
    name: "Terms of Service",
    component: () => import("../views/galactiq/terms-of-service.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    component: () => import("../views/galactiq/privacy-policy.vue"),
  },
  {
    path: "/migration",
    name: "Host Migration",
    component: () => import("../views/blog/deals/migration.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/galactiq/contact.vue"),
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/galactiq/team.vue"),
  },
  {
   path: "/network",
   name: "Network",
   component: () => import("../views/galactiq/network.vue"),
  },
  {
    path: "/addon-info",
    name: "Addon Info",
    component: () => import("../views/galactiq/addoninfo.vue"),
  },
  {
    path: "/npo",
    name: "NPO's",
    component: () => import("../views/galactiq/npo.vue"),
  },  
  {
    path: "/service-providers",
    name: "Service Providers",
    component: () => import("../views/galactiq/service-providers.vue"),
  },  
  {
    path: "/education",
    name: "Education",
    component: () => import("../views/galactiq/education.vue"),
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
    path: "/hardware/game-hardware",
    name: "Game Hardware",
    component: () => import("../views/hardware/game-hardware.vue"),
  },
  {
    path: "/hardware/vps-hardware",
    name: "VPS Hardware",
    component: () => import("../views/hardware/vps-hardware.vue"),
  },
  {
    path: "/hardware/game-hardware/us",
    name: "US Hardware",
    component: () => import("../views/hardware/pterodactyl-hardware/us.vue"),
  },
  {
    path: "/hardware/game-hardware/de",
    name: "DE Hardware",
    component: () => import("../views/hardware/pterodactyl-hardware/de.vue"),
  },
  {
    path: "/hardware/game-hardware/ca",
    name: "CA Hardware",
    component: () => import("../views/hardware/pterodactyl-hardware/ca.vue"),
  },
  {
    path: "/hardware/vps-hardware/de",
    name: "VPS Hardware",
    component: () => import("../views/hardware/vps-hardware/de.vue"),
  },
  {
    path: "/hardware/game-hardware/nl",
    name: "NL Hardware",
    component: () => import("../views/hardware/pterodactyl-hardware/nl.vue"),
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
  //@ Blogs
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/blog/blogs.vue"),
  },
  {
    path: "/blogs/minecraft",
    name: "Minecraft Blogs",
    component: () => import("../views/blog/sub-pages/minecraft-blogs.vue"),
  },
  {
    path: "/blog/mc-blogs/4-18-23-MC-FOLIA",
    name: "Folia Implementation",
    component: () => import("../views/blog/mc-blogs/4-18-23-MC-FOLIA.vue"),
  },  
  {
    path: "/blog/mc-blogs/8-10-22-MC-249136",
    name: "1.19 Shipreck bug",
    component: () => import("../views/blog/mc-blogs/8-10-22-MC-249136.vue"),
  },  
  {
    path: "/blogs/galactiq",
    name: "Company Articles",
    component: () => import("../views/blog/sub-pages/galactiq-blogs.vue"),
  },
  {
    path: "/blog/galactiq-blogs/14-8-22-diskos-and-crewcraft-merge",
    name: "Company Merge",
    component: () => import("../views/blog/galactiq-blogs/14-8-22-diskos-and-crewcraft-merge.vue"),
  },
  {
    path: "/blog/galactiq-blogs/9-10-22-galactiq-updates",
    name: "10/9/22 Updates",
    component: () => import("../views/blog/galactiq-blogs/9-10-22-galactiq-updates.vue"),
  },
  {
    path: "/blog/galactiq-blogs/9-10-22-galactiq-ad-competition",
    name: "10/9/22 Ads",
    component: () => import("../views/blog/galactiq-blogs/9-10-22-galactiq-ad-competition.vue"),
  },
  {
    path: "/blog/galactiq-blogs/11-27-22-galactiq-tournament",
    name: "11-27-22 Tournament",
    component: () => import("../views/blog/galactiq-blogs/11-27-22-galactiq-tournament.vue"),
  },
  {
    path: "/blog/galactiq-blogs/1-19-23-galactiq-free-servers",
    name: "1-19-23 Free Servers",
    component: () => import("../views/blog/galactiq-blogs/1-19-23-galactiq-free-servers.vue"),
  },
  {
    path: "/blog/galactiq-blogs/3-22-23-galactiq-npo",
    name: "3-22-23 Galactiq NPO",
    component: () => import("../views/blog/galactiq-blogs/3-22-23-galactiq-npo.vue"),
  },
  {
    path: "/blog/galactiq-blogs/4-13-23-galactiq-partnerships",
    name: "4-13-23 Galactiq Partnerships",
    component: () => import("../views/blog/galactiq-blogs/4-13-23-galactiq-partnerships.vue"),
  },
  {
    path: "/blog/galactiq-blogs/4-19-23-galactiq-nat-vps",
    name: "4-19-23 Nat VPS",
    component: () => import("../views/blog/galactiq-blogs/4-19-23-galactiq-nat-vps.vue"),
  },
  {
    path: "/blog/galactiq-blogs/our-story",
    name: "Our Story",
    component: () => import("../views/blog/galactiq-blogs/our-story.vue"),
  },
  //@ Referrals
  {
    path: "/cloak",
    name: "CloakyBrokey",
    component: () => import("../views/refs/cloak.vue"),
  },
  {
    path: "/beerfunger",
    name: "Beerfunger",
    component: () => import("../views/refs/beerfunger.vue")
  },
  {
    path: "/slimetb",
    name: "SlimeTB",
    component: () => import("../views/refs/slimetb.vue")
  },
  {
    path: "/kap",
    name: "Kap",
    component: () => import("../views/refs/kap.vue")
  },
  {
    path: "/itzyuto",
    name: "Yuto",
    component: () => import("../views/refs/itzyuto.vue")
  },
  //@ Pages
  {
    path: "/contact/bare-metal",
    name: "Bare Metal",
    component: () => import("../views/pages/bare-metal.vue")
  },
  //@ Redirects
  {
    path: "/discord",
    name: "Discord",
    component: () => import("../views/redirects/discord.vue")
  },
  {
    path: "/redirects/paste",
    name: "Paste",
    component: () => import("../views/redirects/paste.vue")
  },
  {
    path: "/redirects/folia-github",
    name: "Folia",
    component: () => import("../views/redirects/folia-github.vue")
  },
  {
    path: "/redirects/partnerships",
    name: "Partnerships",
    component: () => import("../views/redirects/partners.vue")
  },
  //@ Server Jars
  {
    path: "/server-jars",
    name: "Jars",
    component: () => import("../views/server-jars/server-jars.vue")
  },
  {
    path: "/server-jars/paper",
    name: "Paper",
    component: () => import("../views/server-jars/paper.vue")
  },
  {
    path: "/server-jars/purpur",
    name: "Purpur",
    component: () => import("../views/server-jars/purpur.vue")
  },
  {
    path: "/server-jars/pufferfish",
    name: "Pufferish",
    component: () => import("../views/server-jars/pufferfish.vue")
  },
  {
    path: "/server-jars/folia",
    name: "Folia",
    component: () => import("../views/server-jars/folia.vue")
  },
  //@ Errors
  {
    path: "*",
    name: "404 not found",
    component: () => import("../views/404.vue"),
  },
  {
    path: "/realms",
    name: "Realms",
    component: () => import("../views/more/realms.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;