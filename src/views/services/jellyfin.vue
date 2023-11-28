<template>
    <div>
      <title>Duco Cloud | Jellyfin</title>
      <section class="content-row content-gamebanner">
        <div class="container">
          <header
            class="content-header content-gamename content-header-small content-header-uppercase"
          >
            <h1>
              Jellyfin
            </h1>
            <p>
              Watch movies and shows with a subscription of DUCO
            </p>
          </header>
        </div>
      </section>
      <section class="content-row content-row-gray">
        <div class="container">
          <header class="content-header">
            <h2>
              Jellyfin Streaming
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
                  <img src="https://cdn.galactiq.net/duinocloud/cdn.duinocloud.com/services/jellyfin/stream-jellyfin.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    Stream
                  </h4>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(150.00)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-price">
                  Σ{{ $root.$children[0].floatPriceToString(60)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-price">
                  Ð{{ $root.$children[0].floatPriceToString(0.06)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>Features</strong></li>
                    <li>Jellyfin Access</li>
                    <lo>Request Content</lo>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    href="https://discord.gg/MVaJW8rqmH"
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
              Jellyfin Addons
            </caption>
            <tbody>
              <tr>
                <td>Additional user session (max 5)</td>
                <td>ᕲ3.00/month</td>
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
    background: url(https://wallpapercave.com/wp/wp11246988.jpg) center center no-repeat;
    background-size: cover;
    height: 250px;
    color: white;
  }
  .content-gamename {
    text-align: left !important;
    margin-left: 0px !important;
  }
  </style>
  