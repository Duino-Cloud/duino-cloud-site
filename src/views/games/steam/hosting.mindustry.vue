<template>
  <div>
    <title>Galactiq | Mindustry</title>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Mindustry
          </h1>
          <p>
            An open-ended tower-defense game with a focus on resource management
          </p>
        </header>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h2>
            Mindustry
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
                <img src="https://cdn.galactiq.net/images/game-icons/mindustry/copper.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Copper
                </h4>
                <p>Mindustry Copper<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(1)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1</strong> CPU core</li>
                  <li><strong>512 MB</strong> RAM</li>
                  <li><strong>2 GB</strong> Disk space</li>
                  <li><strong>1 </strong> Backup</li>
                  <li><strong>0</strong> Databases</li>
                </ul>
                <ul>
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
                <img src="https://cdn.galactiq.net/images/game-icons/mindustry/graphite.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Graphite
                </h4>
                <p>Mindustry Graphite<br /></p>
                <small
                   ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(1.50)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1.5</strong> CPU core</li>
                  <li><strong>512 MB</strong> RAM</li>
                  <li><strong>2 GB</strong> Disk space</li>
                  <li><strong>1 </strong> Backups</li>
                  <li><strong>0</strong> Databases</li>
                </ul>
                <ul>
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
                <img src="https://cdn.galactiq.net/images/game-icons/mindustry/titanium.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Titanium
                </h4>
                <p>Mindustry Titanium<br /></p>
                <small
                   ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(2)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1.5</strong> CPU cores</li>
                  <li><strong>1 GB</strong> RAM</li>
                  <li><strong>6 GB</strong> Disk space</li>
                  <li><strong>2 </strong> Backups</li>
                  <li><strong>0</strong> Databases</li>
                </ul>
                <ul>
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
          <table>
            <caption>
              Mindustry Addons
            </caption>
            <tbody>
              <tr>
                <td>Subdomain (max 1)</td>
                <td>$1.00 <small>/ month</small></td>
              </tr>
              <tr>
                <td>Additional port (max 2)</td>
                <td>$0.20 <small>/ month</small></td>
              </tr>
              <tr>
                <td>1GB Extra storage (max 50)</td>
                <td>$0.15 <small>/ month</small></td>
              </tr>
              <tr>
                <td>0.5 Extra Cores (max 1)</td>
                <td>$1.50 <small>/ month</small></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-gamebanner {
  background: url(https://cdn.galactiq.net/images/game-backdrops/mindustry.webp) center center no-repeat;
  background-size: cover;
  height: 300px;
  color: white;
}
.content-gamename {
  text-align: left !important;
  margin-left: 0px !important;
}
</style>
