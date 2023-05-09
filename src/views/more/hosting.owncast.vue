<template>
    <div>
      <title>Galactiq | Owncast</title>
      <section class="content-row content-gamebanner">
        <div class="container">
          <header
            class="content-header content-gamename content-header-small content-header-uppercase"
          >
            <h1>
              OwnCast
            </h1>
            <p>
              Have complete control over your stream with OwnCast
            </p>
          </header>
        </div>
      </section>
      <section class="content-row content-row-gray">
        <div class="container">
          <header class="content-header">
            <h2>
              OwnCast Hosting
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
                  <img src="https://owncast.online/images/owncast-logo-1000x1000.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    OwnCast 1
                  </h4>
                  <p>OwnCast 1<br /></p>
                  <small><a href="/network">View Locations</a></small>
                  <p>Suitable for 720p - 960p Streams</p>
                </div>
                <div class="product-price">
                  ${{ $root.$children[0].floatPriceToString(1.00)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>1</strong> CPU core</li>
                    <li><strong>512 MB</strong> RAM</li>
                    <li><strong>∞ GB</strong> Disk space</li>
                  </ul>
                  <ul>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    href="https://console.galactiq.net"
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
                  <img src="https://owncast.online/images/owncast-logo-1000x1000.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    OwnCast 2
                  </h4>
                  <p>OwnCast 2<br /></p>
                  <small><a href="/network">View Locations</a></small>
                  <p>Suitable for 1080p Streams</p>
                </div>
                <div class="product-price">
                  ${{ $root.$children[0].floatPriceToString(2.00)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>2</strong> CPU cores</li>
                    <li><strong>1 GB</strong> RAM</li>
                    <li><strong>∞ GB</strong> Disk space</li>
                  </ul>
                  <ul>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    href="https://console.galactiq.net"
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
    </div>
  </template>
  
  <style scoped>
  .content-gamebanner {
    background: url(https://i.pcmag.com/imagery/reviews/07iIL7MPOAldTRfB6qyG0rY-1.fit_lim.size_1050x591.v1617389687.png) center center no-repeat;
    background-size: cover;
    height: 250px;
    color: white;
  }
  .content-gamename {
    text-align: left !important;
    margin-left: 0px !important;
  }
  </style>
  