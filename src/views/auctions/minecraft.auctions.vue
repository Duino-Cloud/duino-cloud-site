<template>
  <div>
    <title>Galactiq | Minecraft Auctions</title>
    <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Minecraft Server Auctions
          </h1>
          <p>
            Get your Minecraft server 20% off on our auctions!
          </p>
        </header>
      </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h2>
            Minecraft Standard
          </h2>
          <h2>
            Auctions have to be redeemed in our Discord Server or via Email.
          </h2>
        </header>
        </div>
    </section>
    <section class="content-row content-row-gray">
      <div class="container">
        <div>
          <table>
            <caption>
              Minecraft Standard Addons
            </caption>
            <tbody>
              <tr>
                <td>Additional port (max 3)</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>Custom Subdomain (max 1)</td>
                <td>$1.00/month</td>
              </tr>
              <tr>
                <td>Dedicated IPv6 (max 10)</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>Additional Backup (max 4)</td>
                <td>$1.00/month</td>
              </tr>
              <tr>
                <td>Additional Database (max 5)</td>
                <td>$0.50/month</td>
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