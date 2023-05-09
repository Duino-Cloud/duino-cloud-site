<template>
  <div>
    <title>Galactiq | Budget</title>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Minecraft
          </h1>
          <p>
            With new games, new updates, and new ways to play! Join one of the
            largest communities in gaming and start building today!
          </p>
        </header>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h2>
            Minecraft Budget
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
                <img src="https://cdn.galactiq.net/images/game-icons/minecraft/budget/deadbush.webp" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Deadbush
                </h4>
                <p>Minecraft Deadbush<br /></p>
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
                  <li><strong>∞</strong> CPU core</li>
                  <li><strong>1 GB</strong> RAM</li>
                  <li><strong>10 GB</strong> Disk space</li>
                  <li><strong>0</strong> Backups</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/minecraft/budget/stick.webp" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Stick
                </h4>
                <p>Minecraft Stick<br /></p>
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
                  <li><strong>∞</strong> CPU cores</li>
                  <li><strong>2 GB</strong> RAM</li>
                  <li><strong>20 GB</strong> Disk space</li>
                  <li><strong>1</strong> Backups</li>
                  <li><strong>1</strong> Databases</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/minecraft/budget/wooden_pickaxe.webp" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Wooden Pickaxe
                </h4>
                <p>Minecraft Wooden Pickaxe<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(3)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>∞</strong> CPU cores</li>
                  <li><strong>3 GB</strong> RAM</li>
                  <li><strong>30 GB</strong> Disk space</li>
                  <li><strong>1</strong> Backups</li>
                  <li><strong>1</strong> Databases</li>
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

        <div class="column-row align-center-bottom">
          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/game-icons/minecraft/budget/stone_pickaxe.webp" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Stone Pickaxe
                </h4>
                <p>Minecraft Stone Pickaxe<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(4)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>∞</strong> CPU cores</li>
                  <li><strong>4 GB</strong> RAM</li>
                  <li><strong>40 GB</strong> Disk space</li>
                  <li><strong>1</strong> Backups</li>
                  <li><strong>1</strong> Databases</li>
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
              Minecraft Budget Addons
            </caption>
            <tbody>
              <tr>
                <td>Additional port (max 3)</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>Custom Subdomain (max 1)</td>
                <td>$1.00/month</td>
              </tr>
              <tr>
                <td>Dedicated IPv6 (max 10)</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>Additional Backup (max 4)</td>
                <td>$1.00/month</td>
              </tr>
              <tr>
                <td>Additional Database (max 5)</td>
                <td>$0.50/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <div>
          <table>
            <caption>
              More Addon Services
            </caption>
            <tbody>
              <tr>
                <td>Dedicated Physical Backup (max 1)</td>
                <td>$15.00/month</td>
                <td><a href="/addon-info">More Info</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="content-row content-row-color">
      <div class="column-row align-center-bottom">
        <div class="column-10">
          <img src="https://cdn.galactiq.net/uploads/search-man.svg" class="imgText searchMan" />
        </div>
        <div class="column-90">
          <div class="container">
            <header class="content-header">
              <h2>
                Need Something Stronger?
              </h2>
              <p>
                Check out our Minecraft Standard Plans!<br /><br />
                <router-link class="button button-secondary" to="/hosting/minecraft/standard">
                  <i class="fas fa-arrow-right icon-left"></i>Standard Plans
                </router-link>
              </p>
            </header>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-gamebanner {
  background: url(https://cdn.galactiq.net/images/game-backdrops/2023-02-06_01.25.41.png) center center no-repeat;
  background-size: cover;
  height: 250px;
  color: white;
}
.content-gamename {
  text-align: left !important;
  margin-left: 0px !important;
}
</style>
