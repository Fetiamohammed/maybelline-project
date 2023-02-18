<template class="about-style-container">
  <div class="aboutPage">
    <div>
      <slide class="ImageSlide">
        <SlideShow :images="images" />
      </slide>
    </div>
  </div>
  <!-- textinterpolening-->
  <div class="displayText">
    <h1 class="add">{{ add }}</h1>
    <h2 class="add-text">New Collection that complate your look.</h2>
  </div>
  <!--importing dropdown component and render it on this page -->
  <div class="dropdownBox"><DropDown /></div>
  <AboutText />
</template>
<script>
import SlideShow from "../components/SlideShow.vue";
import DropDown from "../components/DropDown.vue";

import AboutText from "../components/AboutText.vue";

export default {
  components: {
    SlideShow,
    DropDown,
    AboutText,
  },
  setup() {
    const showMore = ref(false);
    return {
      showMore,
    };
  },
  data() {
    return {
      images: [
        "src/assets/img/slide/makeup-1.jpeg",
        "src/assets/img/slide/makeup-2.jpeg",
        //"src/assets/img/slide/makeup-3.jpeg",
        "src/assets/img/slide/makeup-4.jpeg",
        "src/assets/img/slide/makeup-5.jpeg",
        "src/assets/img/slide/makeup-6.jpeg",
      ],
      selectedCategory: null,
      add: "Just for you. We have all you need !",
    };
  },
};

import { ref } from "vue";
</script>

<style>
.aboutPage {
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.displayText {
  margin-top: 20px;
  padding: 10px;
  color: purple;
}
.add {
  margin: 30px 10px 10px 30px;
}
.add-text {
  font-size: larger;
  margin-left: 40px;
  padding-left: 10px;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .about-style-container {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
