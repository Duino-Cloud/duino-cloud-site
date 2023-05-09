<template>
  <section id="content">
    <title>Galactiq | Hosting</title>
    <!-- Notification -->

    <section
      id="notification"
      data-dismissible="true"
      data-title=""
      data-expires=""
    >
      <div class="container">
        <p>
          VPS's have released!! --
          <a href="/hosting/vps/">See Cloud
            <i class="fas fa-angle-right icon-right"></i
          ></a>
          </p>
      </div>
    </section>

    <!-- Content Row -->
    <section class="content-row content-row-color content-gamebanner">
          <div class="container">
            <header
              class="content-header content-header-large content-header-uppercase">
              <h1><mark>Minecraft</mark> Hosting</h1>
              <p>
                Galactiq strives to provide affordable hosting to users around the world. We do our best to give you the best possible connection to your services at an affordable price.
              </p>
              <p></p>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="/hosting/minecraft"
                  target=""
                >
                  <i class="fas fa-shopping-cart icon-left"></i>See Plans
                </a>
              </div>
            </header>
          </div>
    </section>
    <!-- Content Row -->
    <section class="content-row">
      <div class="container">
        <div class="trustpilot-widget" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="643cbc6867553cda6c2f577f" data-style-height="50px" data-style-width="300%" data-theme="dark" data-min-review-count="0" data-without-reviews-preferred-string-id="3" data-style-alignment="center">
          <a href="https://www.trustpilot.com/review/galactiq.net" target="_blank" rel="noopener">Trustpilot</a>
        </div>
        <div class="column-row">
          <div class="column-50">
            <h3>
              <i class="fa-solid fa-microchip icon-feature-inline"> </i>High Performance
            </h3>
            <p>
              Your server is only as good as the hardware it's hosted on which is why we take advantage of stable and fast CPU's.
            </p>
          </div>
          <div class="column-50">
            <h3>
              <i class="fa-solid fa-shield-exclamation icon-feature-inline"></i>Enterprise DDoS Protection
            </h3>
            <p>
              We use the latest and greatest DDoS protection on a multi-terabit scale. This time around nobody will be able to ruin your fun.
            </p>
          </div>
        </div>

        <div class="column-row">
          <div class="column-50">
            <h3>
              <i class="fa-solid fa-check-double icon-feature-inline"></i>Fully Redundant
            </h3>
            <p>
              Our servers use triple power supplies and failover ethernet connections.
            </p>
          </div>
          <div class="column-50">
            <h3>
              <i class="fa-solid fa-wave-pulse icon-feature-inline"></i>Instant
              Activation
            </h3>
            <p>
              All products and services we provide come with instant activation,
              so your server will be ready in seconds.
            </p>
          </div>
          <div class="column-50">
            <h3>
              <i class="fa-solid fa-timer icon-feature-inline"></i>Free
              Trial
            </h3>
            <p>
              Our Minecraft Servers come with a free 1 day trial so you can feel confident
              in our services.
            </p>
          </div>
          <div class="column-50">
            <h3>
              <i class="fa-solid fa-lock icon-feature-inline"></i>Security
            </h3>
            <p>
              We adapt and adopt new forms of Security in order to make sure that we can protect your data from falling into
              the wrong hands.
            </p>
          </div>
        </div>
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
                <img src="https://cdn.galactiq.net/images/game-icons/vps.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  VPS 2
                </h4>
                <p>CVX2<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(6.20)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>4</strong> CPU cores</li>
                  <li><strong>4 GB</strong> RAM</li>
                  <li><strong>40 GB</strong> NVMe disk</li>
                </ul>
                <ul>
                  <li>
                    Dedicated IPv6 Address
                  </li>
                  <li>
                    Unlimited bandwith
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <router-link
                  class="button button-secondary"
                  to="/hosting/vps"
                >
                  <i class="fas fa-eye icon-left"></i>View all Cloud Packages
                </router-link>
              </div>
            </div>
          </div>

          <div class="column-33">
            <div class="product-box product-box-popular">
              <div class="product-popular">
                Sale!! $0.90/GB
              </div>
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/game-icons/minecraft/standard/iron.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Iron
                </h4>
                <p>Minecraft Iron<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(3.69)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>∞</strong> CPU cores</li>
                  <li><strong>4 GB</strong> RAM</li>
                  <li><strong>∞ GB</strong> Disk space</li>
                  <li><strong>3</strong> Backups</li>
                  <li><strong>2</strong> Databases</li>
                </ul>
                <ul>
                </ul>
              </div>
              <div class="product-order">
                <router-link
                  class="button button-secondary"
                  to="/hosting/minecraft/standard"
                >
                  <i class="fas fa-eye icon-left"></i>View all Standard packages
                </router-link>
              </div>
            </div>
          </div>

          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/game-icons/discord.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Discord 2
                </h4>
                <p>DCBOT2<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(0.90)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>0.5</strong> CPU cores</li>
                  <li><strong>256 MB</strong> RAM</li>
                  <li><strong>2 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    Discord.js (NodeJs) & Discord.py (Python)
                  </li>
                  <li>
                     1 Gbps
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <router-link
                  class="button button-secondary"
                  to="/hosting/minecraft/standard"
                >
                  <i class="fas fa-eye icon-left"></i>View all Discord packages
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Content Row -->
			<section class="content-row">
				<div class="container">
					<header class="content-header">
						<h2>
							Global Network
						</h2>
						<p>
							We try to cover as much ground as possible, so we offer services in a wide variety of locations. 
              If we don't have any servers near you, you can always request a location. We actively monitor location requests.
						</p>
            <a href="https://forms.gle/Do33xnHZXznoTiRi8">
                <button type="submit" style="width: 200px; background-color: #0C111B; border: #111827; color: #00B079" >Request Location</button>
              </a>
					</header>
					<div class="network-map">
						<ul>
                <li class="pulse" style="top: 38%; left: 26%;">
									<span class="label-top-right">Beauharnois</span>
								</li>
                <li class="pulse" style="top: 38%; left: 26%;">
									<span class="label-pulse"></span>
								</li>
								<li class="pulse" style="top: 42%; left: 25%;">
									<span class="label-bottom-right">Virginia</span>
								</li>
								<li class="pulse" style="top: 44%; left: 19.5%;">
									<span class="label-top-left">Oklahoma</span>
								</li>
								<li class="pulse" style="top: 44%; left: 16.1%;">
									<span class="label-bottom-left">Arizona</span>
								</li>
								<li class="pulse" style="top: 48%; left: 24.2%;">
									<span class="label-bottom-left">Florida</span>
								</li>
								<li class="pulse" style="top: 31.5%; left: 48.6%;">
									<span class="label-top-left">Zuid-Holland</span>
								</li>
								<li class="pulse" style="top: 34%; left: 49.5%;">
									<span class="label-bottom-left">Falkenstein</span>
								</li>
								<li class="pulse" style="top: 28%; left: 50.9%;">
									<span class="label-top-right">Helsinki</span>
								</li>
						</ul>
						<img src="img/layout/map-light.svg" alt="">
					</div>
				</div>
			</section>
    <!-- Content Row -->
    <section class="content-row content-row-color">
      <div class="column-row align-center-bottom">
        <div class="column-90">
          <div class="container">
            <header class="content-header">
              <h2>
                Cannot find what you are looking for?
              </h2>
              <p>
                Contact one of our staff members and see if we can create a
                custom package for you to suite your hosting needs.<br /><br />
                <router-link class="button button-secondary" to="/contact">
                  <i class="fas fa-envelope icon-left"></i>Get in touch
                </router-link>
              </p>
            </header>
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
