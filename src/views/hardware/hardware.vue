<template>
    <div>
    <title>Duco Cloud | Hardware</title>
      <section class="content-row content-row-gray">
        <div class="container">
          <header class="content-header">
            <h1>
              Choose Hardware Type
            </h1>
          </header>
          <div class="column-row align-center-bottom" >
            <div
              class="column-33 gamebg gamebg-game"
              @click="open('/hardware/duco-hardware/')"
            >
              <div class="bluebg"></div>
              <div class="colum-game-content">
                <div class="content-game-title">Duco Hardware</div>
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
  .gamebg-game {
    background: url(https://cdn.galactiq.net/images/hardware/game.png) center center no-repeat;
  }
  .gamebg-vps {
    background: url(https://cdn.galactiq.net/images/hardware/vps.jpg) top center no-repeat;
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
  
  