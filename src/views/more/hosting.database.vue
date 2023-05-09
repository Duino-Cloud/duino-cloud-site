<template>
  <div>
    <title>Galactiq | Database</title>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h2>
            Database Hosting
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
                <img src="https://cdn.galactiq.net/images/game-icons/database2-white.svg" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Database 1
                </h4>
                <p>DB1<br /></p>
                <small>New York (US), Oklahoma (US)</small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(0.50)
                }}<span class="term">/ month*</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>0.5</strong> CPU cores</li>
                  <li><strong>512 MB</strong> RAM</li>
                  <li><strong>2 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    MongoDB
                  </li>
                  <li>
                    MariaDB
                  </li>
                  <li>
                    Redis
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
                <img src="https://cdn.galactiq.net/images/game-icons/database2-white.svg" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Database 2
                </h4>
                <p>DB2<br /></p>
                <small>New York (US), Oklahoma (US)</small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(1.00)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>0.5</strong> CPU cores</li>
                  <li><strong>512 MB</strong> RAM</li>
                  <li><strong>4 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    MongoDB
                  </li>
                  <li>
                    MariaDB
                  </li>
                  <li>
                    Redis
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
                <img src="https://cdn.galactiq.net/images/game-icons/database2-white.svg" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Database 3
                </h4>
                <p>DB3<br /></p>
                <small>New York (US), Oklahoma (US)</small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(1.50)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>0.5</strong> CPU cores</li>
                  <li><strong>512 MB</strong> RAM</li>
                  <li><strong>6 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    MongoDB
                  </li>
                  <li>
                    MariaDB
                  </li>
                  <li>
                    Redis
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
                <img src="https://cdn.galactiq.net/images/game-icons/database2-white.svg" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Database 4
                </h4>
                <p>DB4<br /></p>
                <small>New York (US), Oklahoma (US)</small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(2.00)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1</strong> CPU core</li>
                  <li><strong>1 GB</strong> RAM</li>
                  <li><strong>8 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    MongoDB
                  </li>
                  <li>
                    MariaDB
                  </li>
                  <li>
                    Redis
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
                <img src="https://cdn.galactiq.net/images/game-icons/database2-white.svg" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  Database 5
                </h4>
                <p>DB5<br /></p>
                <small>New York (US), Oklahoma (US)</small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(3.35)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>2</strong> CPU core</li>
                  <li><strong>2 GB</strong> RAM</li>
                  <li><strong>20 GB</strong> Disk space</li>
                </ul>
                <ul>
                  <li>
                    MongoDB
                  </li>
                  <li>
                    MariaDB
                  </li>
                  <li>
                    Redis
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
              Database Addons
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
