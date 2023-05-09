<template>
    <div>
      <title>Galactiq | Blogs</title>
      <section class="content-row content-row-gray content-gamebanner">
        <div class="container">
          <header class="content-header">
            <h2>
              Blogs
            </h2>
          </header>
          <div class="column-row align-center-bottom">
            <div
              class="column-33 gamebg gamebg-minecraft"
              @click="open('/blogs/minecraft/')"
            >
              <div class="bluebg"></div>
              <div class="colum-game-content">
                <div class="content-game-title">Minecraft Articles</div>
              </div>
            </div>
            <div
              class="column-33 gamebg gamebg-galactiq"
              @click="open('/blogs/galactiq')"
            >
              <div class="bluebg"></div>
              <div class="colum-game-content">
                <div class="content-game-title">Company Articles</div>
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
  .gamebg-minecraft {
    background: url(https://cdn.galactiq.net/images/game-banners/minecraft-standard.png) top center no-repeat;
  }
  .gamebg-galactiq {
    background: url(https://cdn.galactiq.net/images/game-banners/banner-transparent.png) center center no-repeat;
  }
  .content-gamebanner {
    background: url(https://cdn.galactiq.net/images/assets/banner-custom-color.jpg) center center no-repeat;
    background-size: cover;
    height: 250px;
    color: white;
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
  
  