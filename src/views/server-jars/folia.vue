<template>
    <div>
      <title>Galactiq | Woah!</title>
      <section
        class="content-row content-row-color content-row-clouds content-row-half-height"
      >
        <div class="container">
          <div class="column-row align-center">
            <div class="column-33 text-align-center">
              <div class="loader-root" :style="`height: fit-content`">
                <span class="loader" :style="`height: ${size * 10.5}px; width: ${size * 10.5}px;  border-width: ${(size / 2) - 0.5}px; top: ${margin_top}px`"></span>
              </div>
            </div>
            <div class="column-50">
              <header
                class="content-header content-header-large content-header-align-left"
              >
                <h3>
                  Woah!
                </h3>
                <p>
                  We're very sorry but Folia is not ready for Production yet!<br /><br />
                </p>                  
                  <router-link class="button button-secondary" to="/redirects/folia-github"
                    >Read About Folia's Development<i class="fas fa-chevron-right icon-right"></i
                  ></router-link>
                  <p> </p>
                  <router-link class="button button-secondary" to="/blog/mc-blogs/4-18-23-MC-FOLIA"
                    >Learn about how we'll implement Folia<i class="fas fa-chevron-right icon-right"></i
                  ></router-link>
              </header>
            </div>
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
      
      created() {
        window.location.href = "#";
      },
      
    };
    </script>
    <script>
      export default {
        name: 'loadingSpinnerCenterLine',
          props: {
            size: {
                type: String,
                default: '24'
              },
             margin_top: {
              type: String,
              default: '0'
            }
        }
    }
  </script>
  