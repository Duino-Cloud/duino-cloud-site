<template>
  <div>
    <title>Galactiq | Cloud</title>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Virtual Private Servers
          </h1>
          <p>
            Blazing fast virtual servers with NVMe storage, AMD Ryzen CPUs,
            DDR5 ECC Memory and free DDoS protection.
          </p>
        </header>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
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
                <img src="https://cdn.galactiq.net/images/game-icons/vps.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  VPS 1
                </h4>
                <p>CVX1<br /></p>
                <small><a href="/network">View Locations</a></small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(3.60)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>2</strong> CPU core</li>
                  <li><strong>2 GB</strong> DDR4 Memory</li>
                  <li><strong>30 GB</strong> NVMe disk</li>
                </ul>
                <ul>
                  <li>
                    Dedicated IPv6 Address
                  </li>
                  <li>
                    Unlimited bandwidth
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary" 
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                <i class="fa-brands fa-discord icon-left"></i>Coming Soon
                </a>
              </div>
            </div>
          </div>
          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/game-icons/vps.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  VPS 2
                </h4>
                <p>CVX2<br /></p>
                <small><a href="/network">View Locations</a></small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(6.20)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>4</strong> CPU cores</li>
                  <li><strong>4 GB</strong> DDR4 memory</li>
                  <li><strong>40 GB</strong> NVMe disk</li>
                </ul>
                <ul>
                  <li>
                    Dedicated IPv6 Address
                  </li>
                  <li>
                    Unlimited bandwidth
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary" 
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                <i class="fa-brands fa-discord icon-left"></i>Coming Soon
                </a>
              </div>
            </div>
          </div>

          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/game-icons/vps.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  VPS 3
                </h4>
                <p>CVX3<br /></p>
                <small><a href="/network">View Locations</a></small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(7.30)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>4</strong> CPU cores</li>
                  <li><strong>4 GB</strong> DDR4 memory</li>
                  <li><strong>60 GB</strong> NVMe disk</li>
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
                <a
                  class="button button-secondary" 
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                <i class="fa-brands fa-discord icon-left"></i>Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="column-row align-center-bottom">
          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/game-icons/vps.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  VPS 4
                </h4>
                <p>CVX4<br /></p>
                <small><a href="/network">View Locations</a></small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(14.30)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>6</strong> CPU cores</li>
                  <li><strong>8 GB</strong> DDR4 memory</li>
                  <li><strong>120 GB</strong> NVMe disk</li>
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
                <a
                  class="button button-secondary" 
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                <i class="fa-brands fa-discord icon-left"></i>Coming Soon
                </a>
              </div>
            </div>
          </div>
          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/game-icons/vps.png" alt="" height="96px">
                <h4 style="margin-top: 20px">
                  VPS 5
                </h4>
                <p>CVX5<br /></p>
                <small><a href="/network">View Locations</a></small>
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(28.40)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>8</strong> CPU cores</li>
                  <li><strong>16 GB</strong> DDR4 memory</li>
                  <li><strong>240 GB</strong> NVMe disk</li>
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
                <a
                  class="button button-secondary" 
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                <i class="fa-brands fa-discord icon-left"></i>Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <div class="column-row">
          <div class="column-50">
            <h3>
              <i class="fas fa-plus-circle icon-feature-inline"></i>Available
              Addons
            </h3>
            <p>
              All of our VPS's come with the option to add additional
              IP's without upgrading to a higher package.
            </p>
            <p>
              <small class="text-color-gray"
                >You don't necessarily need an IPv4 address, most of the
                internet is moving to IPv6 and most of the websites you visit
                and services you use already support it.</small
              >
            </p>
          </div>
          <div class="column-50">
            <table>
              <caption>
                VPS Addons
              </caption>
              <tbody>
                <tr>
                  <td>Additional IPv6 (no limit)</td>
                  <td>$0.02 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>IPv4 (max 1)</td>
                  <td>$3.50 <small>/ month </small></td>
                </tr>
                <tr>
                  <td>Snapshots</td>
                  <td>20% <small>/ month</small></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-gamebanner::before {
  content: "";
  background: url(https://cdn.galactiq.net/images/game-backdrops/vps.png) bottom center no-repeat;
  filter: blur(4px) opacity(0.7);
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-gamebanner {
  height: 275px;
  color: white;
}
.content-gamename {
  text-align: left !important;
  margin-left: 0px !important;
  padding: 10px;
  backdrop-filter: blur(-4px);
}
</style>
