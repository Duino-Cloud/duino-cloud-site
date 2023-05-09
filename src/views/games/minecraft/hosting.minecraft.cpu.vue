<template>
  <div>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Minecraft CPU
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
            Minecraft Dedicated CPU Servers
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
                <img src="https://cdn.galactiq.net/images/game-icons/dcpu.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Minecraft 1
                </h4>
                <p>MCCPU1<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(6.25)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>2</strong> CPU cores</li>
                  <li><strong>1.5 GB</strong> DDR4 memory</li>
                  <li><strong>40 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    Minecraft Java
                  </li>
                  <li>
                     1 Gbps
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
                <img src="https://cdn.galactiq.net/images/game-icons/dcpu.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Minecraft 2
                </h4>
                <p>MCCPU2<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(13.21)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>3</strong> CPU cores</li>
                  <li><strong>3 GB</strong> DDR4 memory</li>
                  <li><strong>75 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    Minecraft Java
                  </li>
                  <li>
                     1 Gbps
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
                <img src="https://cdn.galactiq.net/images/game-icons/dcpu.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Minecraft 3
                </h4>
                <p>MCCPU3<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(21.28)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>4</strong> CPU cores</li>
                  <li><strong>7 GB</strong> DDR4 memory</li>
                  <li><strong>150 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    Minecraft Java
                  </li>
                  <li>
                     1 Gbps
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

        <div class="column-row align-center-bottom">
          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/game-icons/dcpu.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Minecraft 4
                </h4>
                <p>MCCPU4<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(40.12)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>8</strong> CPU cores</li>
                  <li><strong>15 GB</strong> DDR4 memory</li>
                  <li><strong>220 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    Minecraft Java
                  </li>
                  <li>
                    1000 Mbit&sup2;
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
                <img src="https://cdn.galactiq.net/images/game-icons/dcpu.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Minecraft 5
                </h4>
                <p>MCCPU5<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(88.42)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>16</strong> CPU cores</li>
                  <li><strong>31 GB</strong> DDR4 memory</li>
                  <li><strong>350 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    Minecraft Java
                  </li>
                  <li>
                    1000 Mbit&sup2;
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
          <table>
            <caption>
              Minecraft Dedicated CPU Addons
            </caption>
            <tbody>
              <tr>
                <td>Additional port (max 10)</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>Additional IPv4 (max 2)</td>
                <td>$4.00/month</td>
              </tr>
              <tr>
                <td>Dedicated IPv6 (max 10)</td>
                <td>FREE</td>
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
        
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-gamebanner {
  background: url(https://cdn.galactiq.net/images/game-backdrops/minecraft-dcpu.png) center center no-repeat;
  background-size: cover;
  height: 250px;
  color: white;
}
.content-gamename {
  text-align: left !important;
  margin-left: 0px !important;
}
</style>
