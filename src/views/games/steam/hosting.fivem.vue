<template>
    <div>
      <title>Galactiq | FiveM</title>
      <section class="content-row content-gamebanner">
        <div class="container">
          <header
            class="content-header content-gamename content-header-small content-header-uppercase"
          >
            <h1>
               FiveM
            </h1>
            <p>
                FiveM: Enabling you to play multiplayer on customized dedicated servers
            </p>
          </header>
        </div>
      </section>
      <section class="content-row content-row-gray">
        <div class="container">
          <header class="content-header">
            <h2>
              FiveM
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
                <img src="https://cdn.galactiq.net/images/game-icons/fivem.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  FiveM 1
                </h4>
                <p>FM1<br /></p>
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
                  <li><strong>2 GB</strong> RAM</li>
                  <li><strong>20 GB</strong> Disk space</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/fivem.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                    FiveM 2
                </h4>
                <p>FM2<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(5)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>∞</strong> CPU cores</li>
                  <li><strong>4 GB</strong> RAM</li>
                  <li><strong>20 GB</strong> Disk space</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/fivem.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                    FiveM 3
                </h4>
                <p>FM3<br /></p>
                <small
                  ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(7.50)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>∞</strong> CPU cores</li>
                  <li><strong>6 GB</strong> RAM</li>
                  <li><strong>40 GB</strong> Disk space</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/fivem.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                    FiveM 4
                </h4>
                <p>FM4<br /></p>
                <small
                ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(14)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>∞</strong> CPU cores</li>
                  <li><strong>10 GB</strong> RAM</li>
                  <li><strong>80 GB</strong> Disk space</li>
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
                <img src="https://cdn.galactiq.net/images/game-icons/fivem.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                    FiveM 5
                </h4>
                <p>FM5<br /></p>
                <small
                ><a href="/network">View Locations</a></small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(25)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>∞</strong> CPU cores</li>
                  <li><strong>16 GB</strong> RAM</li>
                  <li><strong>150 GB</strong> Disk space</li>
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
              FiveM Addons
            </caption>
            <tbody>
            <tr>
                <td>Additional Backup (max 4)</td>
                <td>$1.00 /month</td>
            </tr>
            <tr>
                <td>Additional Database (max 4)</td>
                <td>$0.25 /month</td>
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
    background: url(https://cdn.galactiq.net/images/game-backdrops/fivem4.webp) center center no-repeat;
    background-size: cover;
    height: 250px;
    color: white;
  }
  .content-gamename {
    text-align: left !important;
    margin-left: 0px !important;
  }
  </style>