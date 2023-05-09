<template>
    <div>
      <title>Galactiq | Bare Metal</title>
      <section class="content-row content-gamebanner">
        <div class="container">
          <header
            class="content-header content-gamename content-header-small content-header-uppercase"
          >
            <h1>
              Bare Metal
            </h1>
          </header>
        </div>
      </section>
      <section class="content-row content-row-gray">
        <div class="container">
          <header class="content-header">
            <p>
              "This is just example pricing with hardware we have at the time of writing or have sold in the past. By no means is this an updated list of offers."
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
                    i7 4770
                  </h4>
                  <small
                    >New York (US)</small
                  >
                </div>
                <div class="product-price">
                  ${{ $root.$children[0].floatPriceToString(55.00)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong></strong> Intel Core i7 4770</li>
                    <li><strong>32GB</strong> DDR3</li>
                    <li>(4C/8T) @ 3.40 GHz</li>
                    <li><strong>2x1TB HD</strong></li>
                    <li>Unmetered Bandwidth</li>
                  </ul>
                  <ul>
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://cdn.galactiq.net/images/logos/intel.svg" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    i7 4790
                  </h4>
                  <small
                    >New York (US)</small
                  >
                </div>
                <div class="product-price">
                  ${{ $root.$children[0].floatPriceToString(49)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong></strong> Intel Core i7 4790</li>
                    <li><strong>16GB</strong> DDR3</li>
                    <li>(24/8T) @ 3.60 GHz</li>
                    <li><strong>2TB HD</strong></li>
                    <li>Unmetered Bandwidth</li>
                  </ul>
                  <ul>
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://cdn.galactiq.net/images/logos/intel.svg" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    Xeon E3 1240 V6
                  </h4>
                  <small
                    >Los Angeles (US)</small
                  >
                </div>
                <div class="product-price">
                  ${{ $root.$children[0].floatPriceToString(69)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong></strong> Intel Xeon E3 1240 V6</li>
                    <li><strong>64GB</strong> DDR4</li>
                    <li>(4C/8T) @ 3.70 GHz</li>
                    <li><strong>1TB SSD</strong></li>
                    <li>Unmetered Bandwidth</li>
                  </ul>
                  <ul>
                  </ul>
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
                    Xeon E5620
                  </h4>
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
                    <li><strong>2x</strong> Intel Xeon E5620</li>
                    <li><strong>32 GB</strong> DDR3</li>
                    <li>(4C/8T) @ 2.40 GHz</li>
                    <li><strong>1x120GB SSD + 1x320GB HD</strong></li>
                    <li>Unmetered Bandwidth</li>
                  </ul>
                  <ul>
                  </ul>
                </div>
              </div>
            </div>
  
          <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://cdn.galactiq.net/images/logos/amd-green.svg" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    Ryzen 5600X
                  </h4>
                  <small
                    >Miami (US)</small
                  >
                </div>
                <div class="product-price">
                  ${{ $root.$children[0].floatPriceToString(119)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong></strong> AMD Ryzen 5600X</li>
                    <li><strong>128GB</strong> DDR4</li>
                    <li>(6C/12T) @ 3.70 GHz</li>
                    <li><strong>1TB NVMe</strong></li>
                    <li>Unmetered Bandwidth</li>
                  </ul>
                  <ul>
                  </ul>
                </div>
              </div>
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
  