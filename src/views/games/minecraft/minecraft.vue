<template>
  <div>
    <title>Galactiq | Minecraft</title>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h1>
            Minecraft Servers
          </h1>
        </header>
        <div class="column-row align-center-bottom" >
          <div
            class="column-33 gamebg gamebg-minecraftbg"
            @click="open('/hosting/minecraft/budget')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Minecraft Budget</div>
              <div class="content-game-subtitle">
                Starting at just $1.00<small>/GB</small>
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-minecraft"
            @click="open('/hosting/minecraft/standard')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Minecraft Standard</div>
              <div class="content-game-subtitle">
                Starting at just $2.00<small>/GB</small>
              </div>
            </div>
          </div>
        </div>

        <div class="column-row align-center-bottom" style="margin-top: 36px">
          <div
            class="column-80 gamebg gamebg-minecraftfree"
            @click="open('/hosting/minecraft/free')"
            style="max-width: unset;"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Minecraft Free</div>
              <div class="content-game-subtitle">
                Starting at just $0<small>/month!</small>
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
.gamebg-minecraftdcpu {
  background: url(https://cdn.galactiq.net/images/game-banners/minecraft-dcpu.png) center center no-repeat;
}
.gamebg-minecraft {
  background: url(https://cdn.galactiq.net/images/game-banners/minecraft-standard.png) top center no-repeat;
}
.gamebg-minecraftbg {
  background: url(https://cdn.galactiq.net/images/game-banners/minecraft-budget.png) top center no-repeat;
}
.gamebg-minecraftxe {
  background: url(https://cdn.galactiq.net/images/game-banners/mc-extreme.jpg) top center no-repeat;
}
.gamebg-minecraftfree {
  background: url(https://cdn.galactiq.net/images/game-banners/mcfree.jpg) center center no-repeat;
}
.gamebg-minecraft-versions {
  background: url(https://cdn.galactiq.net/images/game-banners/minecraft-versions.webp) center center no-repeat;
}

.gamebg {
  padding: 0px;
  border-radius: 12px;
  background-size: cover;
  margin: 8px;
  max-width: 420px;
  height: 200px;
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

