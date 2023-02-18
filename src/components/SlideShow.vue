<template>
  <div class="slideContainer">
    <img :src="images[currentIndex]" alt="Slide Show" class="slideImage" />
  </div>
</template>

<script>
// short form v-bind is used on the src attribute to make the image dynamically changes currentIndex
// props used to pass the data to the slide show
// the slideshow is working but needs modification...
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>
<style>
.slideContainer {
  width: auto;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  flex-direction: row;
}
.slideImage {
  margin-top: 0.5px;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: flex;
}
</style>
