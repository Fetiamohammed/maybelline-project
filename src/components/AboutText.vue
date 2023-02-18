<template class="about-mobile-view">
  <div class="aboutBox">
    <div class="imgBoxAb">
      <div class="flexboxAb">
        <img class="imgabout" src="../assets/img/slide/slide5.jpeg" alt="" />
      </div>
      <div class="flexboxAb">
        <h4 class="AboutTitle">
          MAKEUP<br />
          Has No Rules!!
        </h4>
      </div>
      <div class="flexboxAb">
        <img class="imgabout" src="../assets/img/lipstickRedbg.jpeg" alt="" />
      </div>
    </div>
  </div>
  <!--paragragh with dropdown button and v-if directive to make it show & unshow
  "event(v-on)"" and conditional operator is used.-->
  <div class="aboutText">
    <h3>
      MAYBELLINE <br />
      Newyork
    </h3>
    <p>
      Maybelline Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
      autem? Vitae libero, molestias quis, voluptates nihil, quos maiores
      dignissimos accusantium excepturi eaque temporibus laborum repellat! .
    </p>

    <p v-if="showMore">
      autem? Vitae libero, molestias quis, voluptates nihil, quos maiores
      dignissimos accusantium excepturi eaque temporibus laborum repellat! .
      autem? Vitae libero, molestias quis, voluptates nihil, quos maiores
      dignissimos accusantium excepturi eaque temporibus laborum repellat! .
    </p>
    <button class="btnShow" @click="showMore = !showMore">
      {{ showMore ? "Read Less" : "Read More" }}
    </button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const showMore = ref(false);
    return {
      showMore,
    };
  },
};
</script>
<style>
.aboutBox {
  width: auto;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.imgBoxAb {
  width: auto;
  height: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.flexboxAb {
  height: 350px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.imgabout {
  width: 370px;
  height: 350px;
  display: flex;
}
.AboutTitle {
  width: 370px;
  height: 350px;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: bolder;
  background-color: #e5e0ff;
  padding: 70px;
  font-family: sans-serif;
  font-style: normal;
  font-size: xx-large;
}
.aboutText {
  margin-left: 4.5rem;
  margin-right: 4.5rem;
  margin-bottom: 4rem;
  padding: 20px;
  text-align: center;
  font-size: large;
  background-color: #f2e7f3;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .about-mobile-view {
    width: 100%;
    height: auto;
  }
  .imgabout {
    width: 100%;
    height: 350px;
    display: flex;
    margin: 30px;
  }
}
</style>
