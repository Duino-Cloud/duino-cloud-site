<template>
    <div>
      <title>Galactiq | Free</title>
      <section class="content-row content-gamebanner">
        <div class="container">
          <header
            class="content-header content-gamename content-header-small content-header-uppercase"
          >
            <h1>
              Minecraft Free
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
              Minecraft Free
            </h2>
          </header>
          <div class="column-row align-center-bottom">
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://cdn.galactiq.net/images/game-icons/minecraft/free/mcfree.png" alt="" height="64px">
                  <h4 style="margin-top: 20px">
                    Minecraft Free Plan
                  </h4>
                  <p>Minecraft Free<br /></p>
                  <small
                    ><a href="/network">View Locations</a></small
                  >
                </div>
                <div class="product-price">
                  ${{ $root.$children[0].floatPriceToString(0)
                  }}<span class="term">/ month</span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>∞</strong> CPU core</li>
                    <li><strong>3 GB</strong> RAM</li>
                    <li><strong>10 GB</strong> Disk space</li>
                    <li><strong>20</strong> Playerslots</li>
                  </ul>
                  <ul>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    href="https://console.galactiq.net/order?category=minecraft&subcategory=free"
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
                Minecraft Addons
              </caption>
              <tbody>
                <tr>
                  <td>Addons are not available for free servers.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section class="content-row content-row-color">
        <div class="column-row align-center-bottom">
          <div class="column-10">
            <img src="https://cdn.galactiq.net/images/assets/search-man.svg" class="imgText searchMan" />
          </div>
          <div class="column-90">
            <div class="container">
              <header class="content-header">
                <h2>
                  Ready for the full experience?
                </h2>
                <p>
                  Check out our Paid Minecraft Plans!<br /><br />
                  <router-link class="button button-secondary" to="/hosting/minecraft/standard">
                    <i class="fas fa-arrow-right icon-left"></i>Standard Plans
                  </router-link>
                </p>
              </header>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  .content-gamebanner {
    background: url(https://cdn.galactiq.net/images/game-backdrops/mcfree.jpg) center center no-repeat;
    background-size: cover;
    height: 250px;
    color: white;
  }
  .content-gamename {
    text-align: left !important;
    margin-left: 0px !important;
  }
  </style>
  