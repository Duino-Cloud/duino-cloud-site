<template>
    <div>
      <title>Duco Cloud | Miners</title>
      <section class="content-row content-gamebanner">
        <div class="container">
          <header
            class="content-header content-gamename content-header-small content-header-uppercase"
          >
            <h1>
              Magi Cloud
            </h1>
            <p>
              Host your Magi Miner on our hardware for an easier mining experience!
            </p>
          </header>
        </div>
      </section>
      <section class="content-row content-row-gray">
        <div class="container">
          <header class="content-header">
            <h2>
              Magi Mining servers
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
                  <img src="https://cdn.ducocloud.com/img/products/workers/WebMiner.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    Magi Mini
                  </h4>
                  <p>XMRMR1<br /></p>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(2.50)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>1</strong> CPU cores</li>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    href="https://console.ducocloud.com"
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
                  <img src="https://cdn.ducocloud.com/img/products/workers/PCMiner.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    Magi Pro
                  </h4>
                  <p>XMRMR2<br /></p>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(25)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>4</strong> CPU cores</li>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    href="https://console.ducocloud.com"
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
    </div>
  </template>
  
  <style scoped>
  .content-gamebanner {
    background: url(https://magi.duinocoin.com/images/worldmap.png) center center no-repeat;
    background-size: cover;
    height: 250px;
    color: white;
  }
  .content-gamename {
    text-align: left !important;
    margin-left: 0px !important;
  }
  </style>
  