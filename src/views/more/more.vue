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
            class="column-33 gamebg gamebg-pool"
            @click="open('/pages/pool-hosting')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Pool Hosting</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-dedicated"
            @click="open('/pages/dedicated-miner')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Dedicated Miners</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-import"
            @click="open('/pages/server-import')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Server Import</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>
        </div>

        <div class="column-row align-center-bottom">
          <div
            class="column-33 gamebg gamebg-contribute"
            @click="open('/pages/sell-hardware')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Sell Hardware</div>
              <div class="content-game-subtitle">
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-jellyfin"
            @click="open('/services/jellyfin')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Jellyfin</div>
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
.gamebg-pool {
  background: url(https://assets.theedgemarkets.com/Bitcoin%20_20210902171420_bloomberg_5.jpg?RfxsYeSJbMgNbnCJBWNFSWYEkfKsSfie) center center no-repeat;
}
.gamebg-dedicated {
  background: url(https://www.hetzner.com/assets/Uploads/seasonspecial-spring-dark-big-matrix.jpg) center center no-repeat;
}
.gamebg-import {
  background: url(https://s3.us-east-2.amazonaws.com/networkbuilders-cdn/inb_technical-spotlight-2112.jpg) center center no-repeat;
}
.gamebg-jellyfin {
  background: url(https://shotdeck.com/assets/images/shotdeck_video_3.jpg) center center no-repeat;
}
.gamebg-contribute {
  background: url(https://d3smn0u2zr7yfv.cloudfront.net/uploads/article/main_image/103/primary_open-source-head2__1_.png) center center no-repeat;
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
