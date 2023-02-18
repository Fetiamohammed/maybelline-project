<script>
import axios from "axios";
import HeroImage from "../components/HeroImage.vue";
import ProductCard from "../components/ProductCard.vue";
import DisplayContainer from "../components/DisplayContainer.vue";
import CategoryBox from "../components/CategoryBox.vue";
import ShowModal from "../components/ShowModal.vue"; //it is not working for now
import SignUp from "../components/SignUp.vue";
// fetching data axios from json file and rendernig it is succeded.
// the page is responsive.
export default {
  components: {
    HeroImage,
    ProductCard,
    DisplayContainer,
    CategoryBox,
    ShowModal,
    SignUp,
  },
  data() {
    return {
      selectedCategory: "all",
      products: [],
    };
  },
  computed: {
    filteredProducts() {
      if (this.selectedCategory === "all") {
        return this.products;
      } else {
        return this.products.filter(
          (product) => product.category === this.selectedCategory
        );
      }
    },
  },
  methods: {
    CategorySelection(category) {
      this.selectedCategory = category;
    },
    handleSignupComplete(user) {
      console.log("User signed up:", user);
    },
  },
  mounted() {
    axios
      .get("product.json")
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error(error));
      });
  },
};
</script>

<template class="Home-Style-Container">
  <HeroImage />
  <DisplayContainer />
  <CategoryBox />
  <ShowModal />
  <div class="container text-center">
    <div class="row align-items-start">
      <div class="product-list">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
  <div class="home-image-box">
    <img id="home-img" src="../assets/img/lip-orange.jpeg" alt="lipstick" />
    <img
      id="home-img"
      src="../assets/img/alexander-grey-.jpeg"
      alt="eye shadow"
    />
    <img id="home-img" src="../assets/img/makeupcollection.jpeg" alt="" />
  </div>
  <div>
    <SignUp @signup-complete="handleSignupComplete" />
  </div>
</template>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  width: 300px;
  margin: 20px;
  padding: 10px;
  justify-content: center;
}
.home-image-box {
  margin: 10px 30px 10px 30px;
  padding: 10px;
  width: auto;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#home-img {
  width: 350px;
  height: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .Home-Style-Container {
    width: 100%;
    align-items: center;
  }

  .home-image-box {
    margin: 10px 30px 10px 30px;
    padding: 10px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #home-img {
    width: 350px;
    height: 330px;
    display: flex;
    flex-direction: columns;
  }
  .product-list {
    margin-top: 10vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .product-card {
    width: 300px;
    height: auto;
    margin-top: 10px 20px 20px 20px;
    justify-content: center;
    padding: 10px;
    justify-content: center;
    justify-content: space-around;
  }
}
</style>
