<template>
  <div>
    <title>Galactiq | Discord</title>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Discord
          </h1>
          <p>
            Host your discord bot on powerful hardware to make sure it always gets the job done
          </p>
        </header>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h2>
            Discord Bot Hosting
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
                <img src="https://cdn.galactiq.net/images/game-icons/discord.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Discord 1
                </h4>
                <p>DCBOT1<br /></p>
                <small
                    ><a href="/network">View Locations</a></small
                  >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(0.75)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>0.5</strong> CPU cores</li>
                  <li><strong>128 MB</strong> RAM</li>
                  <li><strong>1 GB</strong> Disk space</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/discord.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Discord 3
                </h4>
                <p>DCBOT3<br /></p>
                <small
                    ><a href="/network">View Locations</a></small
                  >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(1.25)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1</strong> CPU core</li>
                  <li><strong>1 GB</strong> RAM</li>
                  <li><strong>4 GB</strong> Disk space</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/discord.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Discord 4
                </h4>
                <p>DCBOT4<br /></p>
                <small
                    ><a href="/network">View Locations</a></small
                  >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(2.25)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1</strong> CPU core</li>
                  <li><strong>2 GB</strong> RAM</li>
                  <li><strong>10 GB</strong> Disk space</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/discord.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Discord 5
                </h4>
                <p>DCBOT5<br /></p>
                <small
                    ><a href="/network">View Locations</a></small
                  >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(3.35)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1</strong> CPU core</li>
                  <li><strong>3 GB</strong> RAM</li>
                  <li><strong>15 GB</strong> Disk space</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/discord.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  Discord 6
                </h4>
                <p>DCBOT6<br /></p>
                <small
                    ><a href="/network">View Locations</a></small
                  >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(4.45)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1.5</strong> CPU core</li>
                  <li><strong>4 GB</strong> RAM</li>
                  <li><strong>20 GB</strong> Disk space</li>
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
              Discord Bot Addons
            </caption>
            <tbody>
              <tr>
                <td>Additional port (max 5)</td>
                <td>$1.30 <small>/ month</small></td>
              </tr>
              <tr>
                <td>1GB Extra storage (max 100)</td>
                <td>$0.20 <small>/ month</small></td>
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
  background: url(https://cdn.galactiq.net/images/game-backdrops/discord.png) center center no-repeat;
  background-size: cover;
  height: 250px;
  color: white;
}
.content-gamename {
  text-align: left !important;
  margin-left: 0px !important;
}
</style>
