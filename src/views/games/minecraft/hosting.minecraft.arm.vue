<template>
  <div>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Minecraft ARM
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
            Minecraft ARM
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
                <h4>
                  MCARM1
                </h4>
                <p>MCARM1<br /></p>
                <small
                ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(8)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>2</strong> CPU core</li>
                  <li><strong>4 GB</strong> DDR4 memory</li>
                  <li><strong>∞ GB</strong> Disk space</li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="#"
                  target=""
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Unavailable
                </a>
              </div>
            </div>
          </div>

          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <h4>
                  MCARM2
                </h4>
                <p>MCARM2<br /></p>
                <small
                ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(12)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>2</strong> CPU cores</li>
                  <li><strong>6 GB</strong> DDR4 memory</li>
                  <li><strong>∞ GB</strong> Disk space</li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="#"
                  target=""
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Order Now
                </a>
              </div>
            </div>
          </div>

          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <h4>
                  Minecraft 3
                </h4>
                <p>MCJ3<br /></p>
                <small
                ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(16)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>2</strong> CPU cores</li>
                  <li><strong>8 GB</strong> DDR4 memory</li>
                  <li><strong>∞ GB</strong> Disk space</li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="#"
                  target=""
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
              Minecraft Standard Addons
            </caption>
            <tbody>
              <tr>
                <td>Additional port (max 3)</td>
                <td>FREE</td>
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
  </div>
</template>

<style scoped>
.content-gamebanner {
  background: url(https://cdn.galactiq.net/img/games/game-mcarm.jpg) center center no-repeat;
  background-size: cover;
  height: 250px;
  color: white;
}
.content-gamename {
  text-align: left !important;
  margin-left: 0px !important;
}
</style>
