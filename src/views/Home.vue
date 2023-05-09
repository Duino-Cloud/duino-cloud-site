<template>
  <section id="content">
    <title>Galactiq | Hosting</title>
    <!-- Notification -->

    <!-- Content Row -->
    <section class="content-row content-row-color content-gamebanner">
          <div class="container">
            <header
              class="content-header content-header-large content-header-uppercase">
              <h1><mark>DUCO</mark> Mining</h1>
              <p>
                Duco Cloud strives to provide affordable mining power to users around the world. We do our best to give you the best possible performance at an affordable price.
              </p>
              <p></p>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="/hosting/duino"
                  target=""
                >
                  <i class="fas fa-shopping-cart icon-left"></i>See Plans
                </a>
              </div>
            </header>
          </div>
    </section>

    <section class="content-row content-row-gray">
      <div class="tab-group tab-group-switch-style">
        <ul>
          <li
            :class="$root.$children[0].period == 1 ? `active` : ``"
            @click="$root.$children[0].setPeriod(1)"
          >
            1 month
          </li>
          <li
            :class="$root.$children[0].period == 3 ? `active` : ``"
            @click="$root.$children[0].setPeriod(3)"
          >
            3 months
          </li>
          <li
            :class="$root.$children[0].period == 6 ? `active` : ``"
            @click="$root.$children[0].setPeriod(6)"
          >
            6 months
          </li>
          <li
            :class="$root.$children[0].period == 12 ? `active` : ``"
            @click="$root.$children[0].setPeriod(12)"
          >
            12 months
          </li>
        </ul>
      </div>
    </section>

    <!-- Content Row -->
    <section class="content-row ">
      <div class="container">
        <header class="content-header">
          <h2>
            Our Products
          </h2>
        </header>
          <div class="column-row align-center-bottom">
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://github.com/revoxhere/duino-coin/raw/master/Resources/WebMiner.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    Web Miner 
                  </h4>
                  <p>DUCOMR1<br /></p>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(5.00)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>1</strong> CPU core</li>
                    <li><strong>3.00</strong> MH/s</li>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    href="https://discord.gg/MVaJW8rqmH"
                    target="_blank"
                  >
                    <i class="fas fa-shopping-cart icon-left"></i>Order Now
                  </a>
                </div>
              </div>
            </div>
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://github.com/revoxhere/duino-coin/raw/master/Resources/PCMiner.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    PC Miner
                  </h4>
                  <p>DUCOMR2<br /></p>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(10.00)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>2</strong> CPU cores</li>
                    <li><strong>7.00</strong> MH/s</li>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    href="https://discord.gg/MVaJW8rqmH"
                    target="_blank"
                  >
                    <i class="fas fa-shopping-cart icon-left"></i>Order Now
                  </a>
                </div>
              </div>
            </div>
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://github.com/revoxhere/duino-coin/raw/master/Resources/AVRMiner.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    AVR Miner
                  </h4>
                  <p>DUCOMR3<br /></p>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(15.00)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>4</strong> CPU cores</li>
                    <li><strong>15</strong> MH/s</li>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    href="https://discord.gg/MVaJW8rqmH"
                    target="_blank"
                  >
                    <i class="fas fa-shopping-cart icon-left"></i>Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
.searchMan {
  width: 80px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.imgText {
  max-height: 200px;
}
.content-gamebanner {
  background: url(https://cdn.galactiq.net/images/banners/linesbg.png) center center no-repeat;
  background-size: cover;
  height: 250px;
  color: white;
}
</style>
<style scoped>
.loader {
    
    border: 5px solid #36373C;
    border-bottom-color: #39CC64;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 0.75s linear infinite;
    position: relative;
    top: 1.25px;
}

.loader-root {
    width: fit-content;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

<script>
export default {
  name: "Home",
  components: {},
  beforeDestroy() {
    clearInterval(window.content_slider_rotation);
  },
};
</script>
<script>
export default {
    name: 'loadingSpinnerCenterLine',
    props: {
        size: {
            type: String,
            default: '24'
        },
        margin_top: {
            type: String,
            default: '0'
        }
    }
}
</script>
