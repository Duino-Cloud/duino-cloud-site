<template>
    <div>
      <title>Galactiq | Folia</title>
        <section class="content-row content-gamebanner">
      <div class="container">
        <header
          class="content-header content-gamename content-header-small content-header-uppercase"
        >
          <h1>
            Redirecting
          </h1>
        </header>
      </div>
    </section>
    </div>
  </template>
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
    window.location.href = "https://github.com/PaperMC/Folia#overview";
    }, 2000);
  },

};
</script>