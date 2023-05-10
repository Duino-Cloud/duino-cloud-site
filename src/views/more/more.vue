<template>
  <div>
    <title>Duco Cloud | More</title>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h2>
            More Products
          </h2>
        </header>
        <div class="column-row align-center-bottom">
          <div
            class="column-33 gamebg gamebg-database"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Databases (Coming Soon)</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-baremetal"
            @click="open('/contact/bare-metal')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Dedicated Servers</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-storage"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Cloud Storage (Coming Soon)</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>
        </div>

        <div class="column-row align-center-bottom">
          <div
            class="column-33 gamebg gamebg-apps"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Cloud Apps (Coming Soon)</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-duinocloud"
            @click="open('/hosting/duino')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Duino Cloud</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-owncast"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">OwnCast (Coming Soon)</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>
        </div>

        <div class="column-row align-center-bottom">
          <div
            class="column-33 gamebg gamebg-auctions"
            @click="open('/hosting/auctions')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Auctions</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    open(page) {
      this.$router.push({
        path: page,
      });
    },
  },
};
</script>

<style scoped>
.gamebg-discord {
  background: url(https://cdn.galactiq.net/images/game-banners/discord.png) center center no-repeat;
}
.gamebg-database {
  background: url(https://cdn.galactiq.net/images/game-banners/database.png) center center no-repeat;
}
.gamebg-storage {
  background: url(https://cdn.galactiq.net/images/game-banners/cloud-storage.png) center center no-repeat;
}
.gamebg-apps {
  background: url(https://cdn.galactiq.net/images/game-banners/app.png) center center no-repeat;
}
.gamebg-auctions {
  background: url(https://cdn.galactiq.net/images/game-banners/auctions.png) center center no-repeat;
}
.gamebg-owncast {
  background: url(https://cdn.galactiq.net/images/game-banners/owncast.png) center bottom no-repeat;
}
.gamebg-baremetal {
  background: url(https://cdn.galactiq.net/images/game-banners/dedicated-server-bg.jpg) center bottom no-repeat;
}
.gamebg-duinocloud {
  background: url(https://cdn.galactiq.net/images/game-banners/duino1.avif) center center no-repeat;
}
.gamebg {
  padding: 0px;
  border-radius: 12px;
  background-size: cover;
  margin: 8px;
  max-width: 420px;
  height: 170px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.gamebg:hover {
  transition: 0.25s;
  transform: scale(1.02);
  cursor: pointer;
}
.gamebg:hover .bluebg {
  opacity: 1;
}

.gamebg:hover .colum-game-content {
  position: absolute;
  bottom: 0px;
  margin: auto;
  color: white;
}
.colum-game-content {
  padding: 30px;
  padding-bottom: 20px;
  position: absolute;
  bottom: 0;
  margin: auto;
  color: white;
}
.content-game-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}
.content-game-subtitle {
  font-size: 18px;
  filter: opacity(0.9);
}

.bluebg {
  z-index: 1000;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: #10b981c9;
  content: " ";
  border-radius: 12px;

  transition: 0.25s;
  opacity: 0;
  top: 0;
}
</style>
