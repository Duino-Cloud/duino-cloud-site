<template>
  <div>
    <title>Galactiq | DEN</title>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            DEN
          </h1>
          <p>
            DEN's are essentially dedicated servers, except we manage the backend and let you make whatever
            game server you want without worrying about system stability.
          </p>
        </header>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h2>
            DEN
          </h2>
          <p>
            "Currently DEN's are on a per order basis, and must be requested
            in the CrewCraft Hosting Discord. This page may contain outdated information,
            you can always join the discord and talk to us about available hardware"
          </p>
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
                <img src="https://cdn.galactiq.net/images/logos/intel.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  DEN 1
                </h4>
                <p>RX11<br /></p>
                <small
                  >Oklahoma (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(5.00)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1x</strong> Intel® Core™2 Duo Processor E7400</li>
                  <li><strong>* 4 GB</strong> RAM</li>
                  <li>(2C/2T)</li>
                  <li><strong>100 GB</strong> HDD Storage</li>
                  <li>Unmetered Bandwidth</li>
                </ul>
                <ul>
                  <li>
                    Located in Oklahoma, USA
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Available (2)
                </a>
              </div>
            </div>
          </div>

          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/logos/intel.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  DEN 2
                </h4>
                <p>RX12<br /></p>
                <small
                  >Oklahoma (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(15)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1x</strong> Intel® Core™ i3-530 Processor</li>
                  <li><strong>* 8 GB</strong> RAM</li>
                  <li>(2C/4T)</li>
                  <li><strong>320 GB</strong> HDD Storage</li>
                  <li>Unmetered Bandwidth</li>
                </ul>
                <ul>
                  <li>
                    Located in Oklahoma, USA
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Order (4+)
                </a>
              </div>
            </div>
          </div>

          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/logos/intel.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  DEN 3
                </h4>
                <p>RX13<br /></p>
                <small
                  >Oklahoma (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(20)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1x</strong> Intel® Core™ i3-550</li>
                  <li><strong>* 8 GB</strong> RAM</li>
                  <li>(2C/4T)</li>
                  <li><strong>320 GB</strong> HDD space</li>
                  <li>Unmetered Bandwidth</li>
                </ul>
                <ul>
                  <li>
                    Located in Oklahoma, USA
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Order (1)
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="column-row align-center-bottom">
          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/logos/intel.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  DEN 4
                </h4>
                <p>RX14<br /></p>
                <small
                  >Oklahoma (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(30)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1x</strong> Intel® Core™ i5-3570K Processor</li>
                  <li><strong>* 8 GB</strong> RAM</li>
                  <li>(4C/4T)</li>
                  <li><strong>320 GB</strong> HDD Storage</li>
                  <li>Unmetered Bandwidth</li>
                </ul>
                <ul>
                  <li>
                    Located in Oklahoma, America
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Order (2)
                </a>
              </div>
            </div>
          </div>

        <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/logos/intel.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  DEN 5
                </h4>
                <p>RX15<br /></p>
                <small
                  >Oklahoma (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(45)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1x</strong> Intel® Core™ i7-4770</li>
                  <li><strong>* 16 GB</strong> RAM</li>
                  <li>(4C/8T)</li>
                  <li><strong>320 GB</strong> HDD space</li>
                  <li>Unmetered Bandwidth</li>
                </ul>
                <ul>
                  <li>
                    Located in Oklahoma, USA
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Coming Soon
                </a>
              </div>
            </div>
          </div>

          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/logos/amd-green.png" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  DEN 6
                </h4>
                <p>RX16<br /></p>
                <small
                  >Oklahoma (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(55)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1x</strong> AMD Ryzen™ 3 3100</li>
                  <li><strong>* 16 GB</strong> RAM</li>
                  <li>(4C/8T)</li>
                  <li><strong>320 GB</strong> HDD space</li>
                  <li>Unmetered Bandwidth</li>
                </ul>
                <ul>
                  <li>
                    Located in Oklahoma, USA
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Coming Soon
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="column-row align-center-bottom">
          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/logos/intel.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  DEN R1
                </h4>
                <p>RXR1<br /></p>
                <small
                  >Texas (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(90)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1x</strong> Intel® Xeon® Processor E3-1231 v3</li>
                  <li><strong>32 GB</strong> RAM</li>
                  <li>(4C/8T)</li>
                  <li><strong>2 TB</strong> HDD Storage</li>
                  <li><strong>1 Gbps</strong> Uplink</li>
                  <li><strong>20 TB</strong> Monthly Bandwidth</li>
                </ul>
                <ul>
                  <li>
                    Located in Texas, America
                  </li>
                  <li>
                    More Locations available, contact for a list
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Order (10+)
                </a>
              </div>
            </div>
          </div>

          <div class="column-33">
            <div class="product-box">
              <div class="product-header">
                <img src="https://cdn.galactiq.net/images/logos/intel.svg" alt="" height="64px">
                <h4 style="margin-top: 20px">
                  DEN R2
                </h4>
                <p>RXR2<br /></p>
                <small
                  >Washington D.C. (US)</small
                >
              </div>
              <div class="product-price">
                ${{ $root.$children[0].floatPriceToString(148)
                }}<span class="term">/ month</span>
              </div>
              <div class="product-features">
                <ul>
                  <li><strong>1x</strong> Intel® Xeon® E-2174G Processor</li>
                  <li><strong>* 32 GB</strong> RAM</li>
                  <li>(4C/8T)</li>
                  <li><strong>1 TB</strong> HDD Storage</li>
                  <li><strong>1 Gbps</strong> Uplink</li>
                  <li><strong>20 TB</strong> Monthly Bandwidth</li>
                </ul>
                <ul>
                  <li>
                    Located in Washington D.C., America
                  </li>
                  <li>
                    More Locations available, contact for a list
                  </li>
                </ul>
              </div>
              <div class="product-order">
                <a
                  class="button button-secondary"
                  href="https://discord.gg/MEMzSkeTTc"
                  target="_blank"
                >
                  <i class="fas fa-shopping-cart icon-left"></i>Order (10+)
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
              All our DEN's come with the option to add aditional hardware without upgrading packages.
              Any package that can be upgraded will have a * next to the hardware in question.
            </p>
            <p>
              <small class="text-color-gray"
                >Please note that the upgrades will arrive within 24 hours during work hours (mon-fri 9 AM - 10:00 PM CST) 
                </small
              >
            </p>
          </div>
          <div class="column-50">
            <table>
              <caption>
                DEN Upgrades
              </caption>
              <tbody>
                <tr>
                  <td>Additional Remote Database (max 10)</td>
                  <td>$0.50 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>Additional CPU</td>
                  <td>$25.00 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>Memory Upgrade 8GB -> 16GB</td>
                  <td>$10.00 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>Memory Upgrade 16GB -> 32GB</td>
                  <td>$20.00 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>Memory Upgrade 32GB -> 64GB</td>
                  <td>$40.00 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>(RXR) Memory Upgrade 32GB -> 64GB</td>
                  <td>$50.00 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>Change Hard Drive (1TB)</td>
                  <td>$15.00 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>Backup USB (32gb)</td>
                  <td>$8.00 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>Backup USB (128gb)</td>
                  <td>$16.00 <small>/ month</small></td>
                </tr>
                <tr>
                  <td>Change to NVME SSD (512GB)</td>
                  <td>N/A <small>/ month</small></td>
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
.content-gamebanner {
  background: url(https://cdn.galactiq.net/images/game-backdrops/minecraft-den.png) center center no-repeat;
  background-size: cover;
  height: 250px;
  color: white;
}
.content-gamename {
  text-align: left !important;
  margin-left: 0px !important;
}
</style>
