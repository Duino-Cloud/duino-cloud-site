<template>
    <div>
      <title>Galactiq | SlimeTB</title>
        <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Redirecting
          </h1>
        </header>
        <div class="loader-root" :style="`height: fit-content`">
            <span class="loader" :style="`height: ${size * 1.5}px; width: ${size * 1.5}px;  border-width: ${(size / 4) - 0.5}px; top: ${margin_top}px`"></span>
        </div>
      </div>
    </section>
    </div>
  </template>
  <style scoped>
  .loader {
          
  border: 5px solid #36373C;
  border-bottom-color: #39CC64;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
  position: relative;
  top: 1.25px;
  }
      
  .loader-root {
  width: fit-content;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  }
      
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
      
    100% {
        transform: rotate(360deg);
      }
    }
  </style>
<script>
export default {
  props: {
        size: {
            type: String,
            default: '24'
        },
        margin_top: {
            type: String,
            default: '0'
        }
    },
  mounted() {
    setTimeout(() => {
    window.location.href = "https://console.galactiq.net/ref/zgqijIDPT5S9UO1OlUDbefzTRUw2";    
    }, 2000);
  },

};
</script>