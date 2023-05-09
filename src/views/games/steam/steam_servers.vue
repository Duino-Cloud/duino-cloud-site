<template>
  <div>
    <title>Galactiq | Steam</title>
    <section class="content-row content-row-gray">
      <div class="container">
        <header class="content-header">
          <h1>
            Steam Servers
          </h1>
        </header>
        <div class="column-row align-center-bottom">
          <div
            class="column-33 gamebg gamebg-vrising"
            @click="open('/hosting/steam/vrising/')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">V Rising</div>
              <div class="content-game-subtitle">
                Starting at just $6.00<small>/month</small>
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-mindustry"
            @click="open('/hosting/mindustry')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Mindustry</div>
              <div class="content-game-subtitle">
                Starting at just $1.00<small>/month</small>
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-terraria"
            @click="open('/hosting/steam/terraria')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Terraria</div>
              <div class="content-game-subtitle">
                Starting at just $1.00<small>/month</small>
              </div>
            </div>
          </div>
        </div>
          
        <div class="column-row align-center-bottom">
          <div
            class="column-33 gamebg gamebg-unturned"
            @click="open('/hosting/steam/unturned/')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Unturned</div>
              <div class="content-game-subtitle">
                Starting at just $1.00<small>/month</small>
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-csgo"
            @click="open('/hosting/steam/csgo')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">CS:GO</div>
              <div class="content-game-subtitle">
                Starting at just $4.00<small>/month</small>
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-rust"
            @click="open('/hosting/steam/rust/')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Rust</div>
              <div class="content-game-subtitle">
                Starting at just $10.00<small>/month</small>
              </div>
            </div>
          </div>
        </div>

        <div class="column-row align-center-bottom">
          <div
            class="column-33 gamebg gamebg-fivem"
            @click="open('/hosting/steam/fivem/')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">FiveM</div>
              <div class="content-game-subtitle">
                Starting at just $3.00<small>/month</small>
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-factorio"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Factorio (Coming Soon)</div>
              <div class="content-game-subtitle">
                Starting at just $5.00<small>/month</small>
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-gmod"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Gmod (Coming Soon)</div>
              <div class="content-game-subtitle">
                Starting at just $5.00<small>/month</small>
              </div>
            </div>
          </div>
        </div>

        <div class="column-row align-center-bottom">
          <div
            class="column-33 gamebg gamebg-scp"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">SCP Secret Laboratory (Coming Soon)</div>
              <div class="content-game-subtitle">
                Starting at just $5.00<small>/month</small>
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-satisfactory"
            @click="open('/hosting/steam/satisfactory/')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Satisfactory</div>
              <div class="content-game-subtitle">
                Starting at just $8.00<small>/month</small>
              </div>
            </div>
          </div>

          <div
            class="column-33 gamebg gamebg-valheim"
            @click="open('/hosting/steam/valheim')"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Valheim</div>
              <div class="content-game-subtitle">
                Starting at just $8.00<small>/month</small>
              </div>
            </div>
          </div>
        </div>

        <div class="column-row align-center-bottom">
          <div
            class="column-33 gamebg gamebg-stardew"
          >
            <div class="bluebg"></div>
            <div class="colum-game-content">
              <div class="content-game-title">Stardew Valley (Coming Soon)</div>
              <div class="content-game-subtitle">
                Starting at just $5.00<small>/month</small>
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
.gamebg-terraria {
  background: url(https://cdn.galactiq.net/images/game-banners/terraria.png) center center no-repeat;
}
.gamebg-mindustry {
  background: url(https://cdn.galactiq.net/images/game-banners/mindustry.webp) center center no-repeat;
}
.gamebg-vrising {
  background: url(https://cdn.galactiq.net/images/game-banners/vrising.png) top center no-repeat;
}
.gamebg-factorio {
  background: url(https://cdn.galactiq.net/images/game-banners/factorio.png) top center no-repeat;
}
.gamebg-csgo {
  background: url(https://cdn.galactiq.net/images/game-banners/csgo.webp) top center no-repeat;
}
.gamebg-rust {
  background: url(https://cdn.galactiq.net/images/game-banners/rust.webp) top center no-repeat;
}
.gamebg-fivem {
  background: url(https://cdn.galactiq.net/images/game-banners/fivem1.webp) top center no-repeat;
}
.gamebg-unturned {
  background: url(https://cdn.galactiq.net/images/game-banners/unturned.jpg) top center no-repeat;
}
.gamebg-gmod {
  background: url(https://cdn.galactiq.net/images/game-banners/gmod.png) top center no-repeat;
}
.gamebg-scp {
  background: url(https://cdn.galactiq.net/images/game-banners/scp.jpg) top center no-repeat;
}
.gamebg-satisfactory {
  background: url(https://cdn.galactiq.net/images/game-banners/satisfactory.jpg) top center no-repeat;
}
.gamebg-valheim {
  background: url(https://cdn.galactiq.net/images/game-banners/valheim.jpg) top center no-repeat;
}
.gamebg-stardew {
  background: url(https://cdn.galactiq.net/images/game-banners/stardew.webp) top center no-repeat;
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
