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
          <img src="https://cdn.ducocloud.com/logos/ducocloud.png" alt="" height="120px" />
        </router-link>
        <nav>
          <ul class="nav-primary">
            <li>
              <router-link to="/hosting/mining">Mining Hardware</router-link>
            </li>
            <li>
              <router-link to="/marketplace">MarketPlace</router-link>
            </li>
            <li>
              <router-link to="/hosting/more">More</router-link>
            </li>
            <!--<li>
              <router-link to="/hosting/discord">Discord Bots</router-link>
            </li>-->
            <li>
              <a style="cursor: pointer">DUCO CLOUD</a>
              <ul>
                <li>
                  <router-link to="/hardware">Hardware</router-link>
                </li>     
                <li>
                  <router-link to="/team">Team</router-link>
                </li>
                <li>
                  <router-link to="/hosting/minecraft">Minecraft Hosting</router-link>
                </li>
              </ul>                 
            </li>
            <li>
              <router-link to="/wiki">Wiki</router-link>
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
              <a href="https://discord.gg/MVaJW8rqmH" target="_blank">
                <i class="fab fa-discord icon-left"></i>Join Discord Server</a
              >
            </li>
            <li>
              <a href="https://ko-fi.com/pengucc" target="_blank">
                <i class="fa-solid fa-circle-dollar-to-slot icon-left"></i>Donate</a
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
                <img src="https://cdn.ducocloud.com/logos/ducocloud.png" alt="" width="200px">
              </h5>
              <p>
                Duco Cloud has been providing Duco Mining hardware since 2023 and aims
                to allow people to purchase more and more products with DUCO.
              </p>
            </div>
            <div class="column-75">
              <div class="column-row align-right-top">
                <div class="column-25">
                  <h5>
                    Resources
                  </h5>
                  <ul>
                    <li>
                      <router-link to="/github">GitHub</router-link>
                    </li>
                    <li>
                      <router-link to="/branding">Branding</router-link>
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
          <p>Copyright 2023 &copy; Duco Cloud<br /></p>
        </div>
      </section>
    </footer>
  </div>
</template>

<style></style>

<script>

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
  background-color: #0d0d2e;
}
.content-slider {
  background-color: #19212c;
}

.content-row {
  background-color: #07071a !important;
  color: #a39e94;
}
.content-row-gray {
  background-color: #07071a !important;
}
.content-row-color {
  background-color: #07071a !important;
}

.product-box {
  background-color: #080829 !important;
  border-color: #00B4D8;
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
  background: #00B4D8;
  box-shadow: 0 0 0 #00B4D8;
  animation: pulse 2s infinite;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 #00B4D8;
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
    -moz-box-shadow: 0 0 0 0 #00B4D8;
    box-shadow: 0 0 0 0 #00B4D8;
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
  background-color: #00B4D8 !important;
}
.tab-group.tab-group-switch-style > ul {
  background-color: #0C111B !important;
}
.tab-group.tab-group-switch-style > ul > li {
  background-color: #111827 !important;
}
.tab-group.tab-group-switch-style > ul li.active {
  background-color: #00B4D8 !important;
  box-shadow: 1px 5px 5px #0077B6;
}
table caption {
  background-color: #00B4D8 !important;
}
table {
  border-color: #131313;
  background-color: #181A1B;
  color: white;
}
table tr td,
table tr th {
  border-color: #03045E !important;
}
tbody {
  background-color: #181a1b !important;
}
th {
  background-color: #03045E !important;
  color: white !important;
}
.tab-group.tab-group-switch-style > ul {
  border-color: #00B4D8 !important;
}
#content {
  background-color: #181a1b !important;
}
</style>
