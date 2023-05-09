<template>
  <div class="loader-root" :style="`height: fit-content`">
      <span class="loader" :style="`height: ${size * 1.5}px; width: ${size * 1.5}px;  border-width: ${(size / 4) - 0.5}px; top: ${margin_top}px`"></span>
  </div>
</template>
<template>
  <div class="footer-dark">
    <header id="header" class="header-dynamic header-shadow-scroll">
      <div class="container">
        <router-link class="logo" to="/">
          <img src="https://cdn.galactiq.net/images/logos/galactiq/galactiq-banner-no-subtitle-transparent.png" alt="" height="120px" />
        </router-link>
        <nav>
          <ul class="nav-primary">
            <li>
              <router-link to="/hosting/games">Game Hosting</router-link>
            </li>
            <li>
              <router-link to="/hosting/vps">Cloud</router-link>
            </li>
            <li>
              <router-link to="/contact/bare-metal">Dedicated Servers</router-link>
            </li>  
            <li>
              <router-link to="/hosting/discord">Discord Bots</router-link>
            </li>
            <li>
              <a style="cursor: pointer">Galactiq</a>
              <ul>
                <li>
                  <router-link to="/hardware">Hardware</router-link>
                </li>
                <li>
                  <router-link to="/network">Network</router-link>
                </li>             
                <li>
                  <router-link to="/partners">Partners</router-link>
                </li>
                <li>
                  <router-link to="/team">Team</router-link>
                </li>

                <li>
                  <router-link to="/blogs">Blog</router-link>
                </li>
                <li>
                  <a href="https://merch.galactiq.net" target="_blank">Merch</a>
                </li>
                <li>
                  <a href="https://forms.gle/C6Gn74opDjKXUPFc6" target="_blank">Careers</a>
                </li>
              </ul>                          
            </li>
            <li>
              <a class="button button-secondary" target="" href="/login">
              <i class="fa-solid fa-fingerprint icon-left"></i>Login</a>
            </li>
          </ul>
          <ul class="nav-secondary">
            <li></li> 
            <li> 
              <a href="/contact" target=""
                ><i class="fa-solid fa-address-book icon-left" style="margin-right: 4px"></i>Contact
                Us</a
              >
            </li>
             <li> 
              <a href="https://status.galactiq.net/" target="_blank"
                ><i class="fa-solid fa-signal-bars-good icon-left" style="margin-right: 0px"></i>Service
                Status</a
              >
            </li>
            <li>
              <a href="https://discord.gg/MEMzSkeTTc" target="_blank">
                <i class="fab fa-discord icon-left"></i>Join Discord Server</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <router-view id="content"></router-view>
    <footer id="footer">
      <section class="footer-primary">
        <div class="container">
          <div class="column-row">
            <div class="column-33">
              <h5>
                <img src="https://cdn.galactiq.net/images/logos/galactiq-banner-no-subtitle-transparent.png" alt="" width="200px">
              </h5>
              <p>
                Galactiq has been providing Minecraft servers and discord bots 
                to small and big customers since 2019. We want
                to give everyone the opportunity to not have to worry about
                service quality and pricing and instead focus on the growth of
                their community.
              </p>
            </div>
            <div class="column-75">
              <div class="column-row align-right-top">
                <div class="column-25">
                  <h5>
                    Products and Services
                  </h5>
                  <ul>
                    <li>
                      <router-link to="/hosting/minecraft/"
                        >Minecraft</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/hosting/vps">Cloud</router-link>
                    </li>  
                    <li>
                      <router-link to="/hosting/discord"
                        >Discord Bots</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/hosting/steam/"
                        >Steam Servers</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/hosting/more/"
                        >More</router-link
                      >
                    </li>
                  </ul>
                </div>
                <div class="column-25">
                  <h5>
                    Resources
                  </h5>
                  <ul>
                    <li>
                      <router-link to="/terms-of-service"
                        >Terms of Service</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/privacy-policy"
                        >Privacy Policy</router-link
                      >
                    </li>
                    <li>
                        <a href="https://cdn.galactiq.net/partner-resources/assets.zip" target="_blank">
                        <i class=""></i>Creator Resources</a>
                    </li>
                    <li>
                      <router-link to="/education"
                        >Education</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/npo">Non-Profit</router-link>
                    </li>
                    <li>
                      <router-link to="/contact">Contact</router-link>
                    </li>
                  </ul>
                </div>
                <div class="column-25">
                  <h5>
                    Tools
                  </h5>
                  <ul>
                    <li>
                      <router-link to="/redirects/paste">Paste Server</router-link>
                    </li>
                    <li>
                      <router-link to="/server-jars">Server Jars</router-link>
                    </li>
                  </ul>
                </div>
                <div class="column-25">
                  <h5>
                    Socials
                  </h5>
                  <ul>
                    <li>
                      <a href="https://www.youtube.com/@galactiqnetwork5124">YouTube <i class="fa-brands fa-youtube"></i></a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@galactiq_network">TikTok <i class="fa-brands fa-tiktok"></i></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/galactiq_network/">Instagram <i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Galactiq_Net">Twitter <i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="https://www.trustpilot.com/evaluate/galactiq.net" target="_blank">Review Us <i class="fa-regular fa-star-sharp-half-stroke"></i></a>
                    </li>    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-secondary">
        <div class="container">
          <p>Copyright 2023 &copy; Galactiq<br /></p>
        </div>
      </section>
    </footer>
  </div>
</template>

<style></style>

<script>
import Tawk from "vue-tawk";
import Vue from "vue";

Vue.use(Tawk, {
  tawkSrc: "https://embed.tawk.to/605930b8f7ce18270932d0fa/1f1e6ck72",
});

export default {
  watch: {
    $route() {
      window.scrollTo(0, 0);
      this.$forceUpdate();
      window.scrollTo(0, 0);
    },
  },
  data() {
    return {
      period: 1,
      priceIndex: 1,
    };
  },
  methods: {
    setPeriod(per) {
      if (per == 1) {
        this.priceIndex = 1;
        this.period = 1;
      }

      if (per == 3) {
        this.priceIndex = 0.975;
        this.period = 3;
      }

      if (per == 6) {
        this.priceIndex = 0.96;
        this.period = 6;
      }
      if (per == 12) {
        this.priceIndex = 0.95;
        this.period = 12;
      }
      this.$forceUpdate();
    },
    floatPriceToString(input) {
      if (input == undefined) return;

      input = input * this.priceIndex;

      if (input.toString().includes(".")) {
        var returnStr = (Math.round(input * 100) / 100)
          .toString()
          .replace(",", ".");
        if (returnStr.split(".")[1] && returnStr.split(".")[1].length == 1)
          returnStr += `0`;

        if (returnStr.split(".")[1] == null) returnStr += `${"."}00`;

        return returnStr;
      } else {
        return input + `${"."}00`;
      }
    },
  },
};
</script>

<style>
#footer {
  background-color: #0e0f0f;
}
.content-slider {
  background-color: #19212c;
}

.content-row {
  background-color: #111827 !important;
  color: #a39e94;
}
.content-row-gray {
  background-color: #111827 !important;
}
.content-row-color {
  background-color: #111827 !important;
}

.product-box {
  background-color: #1F2937 !important;
  border-color: #00b07800;
  color: #E5E7EB;
  transition: all .15s ease-in-out;
}

.product-box:hover{
  transform: scale(1.03);
  animation: pulse 2s;
}

.pulse {
  margin:100px;
  display: block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 0 #059669;
  animation: pulse 2s infinite;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 #059669;
  }
  70% {
      -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 #059669;
    box-shadow: 0 0 0 0 #059669;
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}

.product-box .product-price {
  border-bottom: 1px solid #00b07800;
}
.product-box.product-box-popular {
  border-color: #00b07800 !important;
}
.product-box .product-popular {
  background-color: #10B981 !important;
}
.tab-group.tab-group-switch-style > ul {
  background-color: #0C111B !important;
}
.tab-group.tab-group-switch-style > ul > li {
  background-color: #111827 !important;
}
.tab-group.tab-group-switch-style > ul li.active {
  background-color: #059669 !important;
  box-shadow: 1px 5px 5px #046647;
}
table caption {
  background-color: #059669 !important;
}
table {
  border-color: #131313;
  background-color: #181A1B;
  color: white;
}
table tr td,
table tr th {
  border-color: #131313 !important;
}
tbody {
  background-color: #181a1b !important;
}
th {
  background-color: #0e0f0f !important;
  color: white !important;
}
.tab-group.tab-group-switch-style > ul {
  border-color: #131313 !important;
}
#content {
  background-color: #181a1b !important;
}
</style>
