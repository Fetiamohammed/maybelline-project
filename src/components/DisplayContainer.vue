<template>
  <!-- showing catagory of productlist with image and catagoryname button to make the short filter method
    showing the list and the button succeded but the fillter does not work yet-->
  <div class="DisplayContainer">
    <div>
      <img
        class="img-display"
        src="../assets/img/foundation.jpeg"
        alt="foundation"
      />

      <input
        id="button"
        type="button"
        @click="onClick('Foundation')"
        value="Foundation"
      />
    </div>
    <div>
      <img
        class="img-display"
        src="../assets/img/concealer.jpeg"
        alt="concealer"
      />
      <input
        class="input-Displa-list"
        id="button"
        type="button"
        @click="onClick('Concealer')"
        value="Concealer"
      />
    </div>
    <div>
      <img class="img-display" src="../assets/img/bronzer.jpeg" alt="bronzer" />
      <input
        id="button"
        type="button"
        @click="onClick('Bronzer')"
        value="Bronzer"
      />
    </div>
    <div>
      <img
        class="img-display"
        src="../assets/img/lipstick.jpeg"
        alt="lipstick"
      />
      <input
        id="button"
        type="button"
        @click="onClick('Lip-gloss')"
        value="Lip-gloss"
      />
    </div>
    <div>
      <img class="img-display" src="../assets/img/mascara.jpeg" alt="mascara" />
      <input
        id="button"
        type="button"
        @click="onClick('Mascara')"
        value="Mascara"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick(category) {
      this.$emit("categorySelected", category);
    },
  },
};
</script>

<style scoped>
.DisplayContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  row-gap: 30px;
  padding: 10px;
  flex-wrap: wrap;
}
/* styling the images*/
.img-display {
  display: flex;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  padding: 10px;
  justify-content: space-between;
}
/* styling the button*/
input {
  background-color: white;
  border: none;
  color: rgb(11, 9, 9);
  text-align: center;
  display: inline-block;
  font-size: 20px;
  margin: 4px 8px 4px 30px;
  transition-duration: 0.4s;
  cursor: pointer;
}
/* making hover effect on the button*/
#button {
  color: black;
  border: 0.5px solid #e7e7e7;
  transition-duration: 0.4s;
}

#button:hover {
  background-color: #fbd7fb;
  color: black;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
}
</style>
