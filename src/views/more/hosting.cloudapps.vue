<template>
  <div>
    <title>Galactiq | Cloud Apps</title>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Cloud Apps
          </h1>
          <p>
            Cloud hosted Web apps
          </p>
        </header>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h2>
            Apps
          </h2>
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
        </header>
        <div class="column-row align-center-bottom">
          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/game-icons/apps.svg" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  App 1
                </h4>
                <p>APP1<br /></p>
                <small
                  >Finland (FI), Oklahoma (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(2)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>2</strong> CPU core</li>
                  <li><strong>2 GB</strong> RAM</li>
                  <li><strong>60 GB</strong> Disk space</li>
                  <li><strong>3 </strong> Backup</li>
                </ul>
                <ul>
                  <li>
                    1 Gbps shared link
                  </li>
                  <li>
                    VSCode, Haste Server, Gittea
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://console.galactiq.net"
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
                <img src="https://cdn.galactiq.net/images/game-icons/apps.svg" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  App 2
                </h4>
                <p>APP2<br /></p>
                <small
                   >Finland (FI), Oklahoma (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(4)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>2</strong> CPU core</li>
                  <li><strong>4 GB</strong> RAM</li>
                  <li><strong>80 GB</strong> Disk space</li>
                  <li><strong>4 </strong> Backups</li>
                </ul>
                <ul>
                  <li>
                    1 Gbps shared link
                  </li>
                  <li>
                    VSCode, Haste Server, Gittea
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://console.galactiq.net"
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
    <section class="content-row content-row-gray">
      <div class="container">
        <div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-gamebanner {
  background: url(https://cdn.galactiq.net/images/game-backdrops/app.png) center center no-repeat;
  background-size: cover;
  height: 300px;
  color: white;
}
.content-gamename {
  text-align: left !important;
  margin-left: 0px !important;
}
</style>
