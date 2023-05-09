<template>
  <div>
    <title>Galactiq | Discord Auctions</title>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Discord Bot Auctions
          </h1>
          <p>
            Get your Discord Bot hardware at 20% reduced pricing!
          </p>
        </header>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <div>
          <table>
            <caption>
              Discord Bot Addons
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

<style scoped>
.content-gamebanner::before {
  content: "";
  background: url(https://cdn.galactiq.net/images/game-backdrops/auctions.png) bottom center no-repeat;
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