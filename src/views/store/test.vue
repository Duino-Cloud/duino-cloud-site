<template>
    <div>
      <title>Duco Cloud | Test Store</title>
      <section class="content-row content-gamebanner">
        <div class="container">
          <header
            class="content-header content-gamename content-header-small content-header-uppercase"
          >
            <h1>
              Test Store
            </h1>
            <p>
              Purchase real items for DUCO!!
            </p>
          </header>
        </div>
      </section>
      <section class="content-row content-row-gray">
        <div class="container">
          <header class="content-header">
            <h2>
              Test Store
            </h2>
          </header>
          <div class="column-row align-center-bottom">
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://cdn.galactiq.net/duinocloud/cdn.duinocloud.com/store/bread.png" alt="" height="145px">
                  <h4 style="margin-top: 20px">
                    Bread Pillow
                  </h4>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(100.00)
                  }}<span class="term"></span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>Size:</strong> 7.8in / 19.81cm</li>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    target=""
                  >
                    <i class="fas fa-shopping-cart icon-left"></i>Unavailable
                  </a>
                </div>
              </div>
            </div>
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://cdn.galactiq.net/duinocloud/cdn.duinocloud.com/store/cat.png" alt="" height="145px">
                  <h4 style="margin-top: 20px">
                    Cat Figure
                  </h4>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(120.00)
                  }}<span class="term"></span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>Color:</strong> Orange</li>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    target=""
                  >
                    <i class="fas fa-shopping-cart icon-left"></i>Unavailable
                  </a>
                </div>
              </div>
            </div>
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://cdn.galactiq.net/duinocloud/cdn.duinocloud.com/store/potato.png" alt="" height="146px">
                  <h4 style="margin-top: 20px">
                    Mr Potato
                  </h4>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(200.00)
                  }}<span class="term"></span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>Color:</strong> Potato :)</li>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    target=""
                  >
                    <i class="fas fa-shopping-cart icon-left"></i>Unavailable
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="column-row align-center-bottom">
            <div class="column-33">
              <div class="product-box">
                <div class="product-header">
                  <img src="https://cdn.galactiq.net/duinocloud/cdn.duinocloud.com/store/lenovo.png" alt="" height="145px">
                  <h4 style="margin-top: 20px">
                    Lenovo Thinkplus Headphones
                  </h4>
                </div>
                <div class="product-price">
                  ᕲ{{ $root.$children[0].floatPriceToString(10000.00)
                  }}<span class="term"></span>
                </div>
                <div class="product-features">
                  <ul>
                    <li><strong>Color:</strong> Beige White</li>
                  </ul>
                </div>
                <div class="product-order">
                  <a
                    class="button button-secondary"
                    target=""
                  >
                    <i class="fas fa-shopping-cart icon-left"></i>Unavailable
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
    background: url(https://wallet.duinocoin.com/img/yenn-sea-1.jpg) center center no-repeat;
    background-size: cover;
    height: 250px;
    color: white;
  }
  .content-gamename {
    text-align: left !important;
    margin-left: 0px !important;
  }
  </style>
  