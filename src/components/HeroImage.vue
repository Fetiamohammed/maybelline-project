<template>
  <div class="heroimage">
    <!-- rendering heroimage with v-bind in short form is succeded and it is responsive-->
    <img :src="heroImage" alt="MakeUp" class="first-hero" />
    <div class="text">
      <h1 class="title">MAKE UP STUDIO</h1>
      <p>Play with the virtual makeup tool and stay updated on new products.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      heroImage: "src/assets/img/HeroImage.jpeg",
    };
  },
};
</script>

<style scoped>
.heroimage {
  margin: auto;
  height: 100vh;
  overflow-x: hidden;
}
img {
  width: 100%;
  height: 90vh;
}
.text {
  margin: 20px;
  align-items: center;
  justify-content: center;
  color: purple;
}
.heroimage,
h1 {
  top: 20%;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .heroimage {
    width: 100%;
    height: auto;
    justify-content: center;
  }
}
</style>
