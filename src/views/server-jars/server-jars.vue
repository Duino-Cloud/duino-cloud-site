<template>
    <div>
      <title>Galactiq | Jars</title>
      <section class="content-row content-row-gray">
        <div class="container">
          <header class="content-header">
            <h2>
              Server Jars
            </h2>
          </header>
          <div class="column-row align-center-bottom">
            <div
              class="column-33 gamebg gamebg-paper"
              @click="open('/server-jars/paper')"
            >
              <div class="bluebg"></div>
              <div class="colum-game-content">
                <div class="content-game-title">Paper</div>
                <div class="content-game-subtitle">
                </div>
              </div>
            </div>
  
            <div
              class="column-33 gamebg gamebg-purpur"
              @click="open('/server-jars/purpur')"
            >
              <div class="bluebg"></div>
              <div class="colum-game-content">
                <div class="content-game-title">Purpur</div>
                <div class="content-game-subtitle">
                </div>
              </div>
            </div>
          </div>
  
          <div class="column-row align-center-bottom">
            <div
              class="column-33 gamebg gamebg-pufferfish"
              @click="open('/server-jars/pufferfish')"
            >
              <div class="bluebg"></div>
              <div class="colum-game-content">
                <div class="content-game-title">Pufferfish</div>
                <div class="content-game-subtitle">
                </div>
              </div>
            </div>

            <div
              class="column-33 gamebg gamebg-folia"
              @click="open('/server-jars/folia')"
            >
              <div class="bluebg"></div>
              <div class="colum-game-content">
                <div class="content-game-title">Folia</div>
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
  .gamebg-paper {
    background: url(https://cdn.galactiq.net/images/server-jars/paper/paper.png) center center no-repeat;
  }
  .gamebg-purpur {
    background: url(https://cdn.galactiq.net/images/server-jars/purpur/purpur.png) center center no-repeat;
  }
  .gamebg-pufferfish {
    background: url(https://cdn.galactiq.net/images/server-jars/pufferfish/pufferfish.png) center center no-repeat;
  }
  .gamebg-folia {
    background: url(https://cdn.galactiq.net/images/server-jars/folia/Folia.png) center center no-repeat;
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
  