<template class="categoryBox">
  <!-- HTML-interpolering is used.
    -more image with html tag and the page is responsive-->
  <div id="flexBox">
    <div id="first">
      <img
        class="second"
        id=" expert"
        src="../assets/img/expertertips.jpeg"
        alt="Foundation"
      />
    </div>
    <div id="three">
      <img
        class="second"
        src="../assets/img/makeupfaceb.jpg"
        alt="makeupface"
      />
    </div>
  </div>
  <div id="box" v-html="text"></div>
</template>
<script>
export default {
  data() {
    return {
      text: "<h4>Just for you - Enjoy Our New In Collection!</h4>",
    };
  },
};
</script>
<style scoped>
#flexBox {
  display: flex;
  flex-direction: row;
  margin: 15px;
  padding: 10px;
  height: 370;
  flex-wrap: wrap;
  justify-content: center;
}

#first {
  align-items: center;
  justify-content: center;
}
.second {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 350px;
  flex-wrap: wrap;
  padding: 5px;
}
#box {
  display: flex;
  justify-content: center;
  color: purple;
  text-align: center;
  font-size: large;
  font-weight: bold;
  padding: 20px;
  background-color: rgb(255, 237, 247);
  margin: 30px;
  flex-wrap: wrap;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .categoryBox {
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  #flexBox {
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 10px;
    width: 350px;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
  }
  .second {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 20px;
    padding: 5px;
  }
}
</style>
