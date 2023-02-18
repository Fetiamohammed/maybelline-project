<template class="dropdown-mobile">
  <!-- Added  buttons with the category name and it opens the droppdown and shows product
      but the background image need more styling
      on-click,v-for,v-bind short form,v-if, v-else-if directives used. the data fetched
      with axios and computed. it filters the product when the categories clicked.-->

  <div class="btn-dropbox">
    <div class="Box">
      <button @click="selectedCategory = 'EyeMakeUp'" class="Dropp" id="Eye">
        Eye MakeUp
      </button>
      <button
        @click="selectedCategory = 'Foundation'"
        class="Dropp"
        style="background-color: #ebb67c"
      >
        Foundation
      </button>
      <button
        @click="selectedCategory = 'Mascara'"
        class="Dropp"
        id="Mas"
        style="background-color: #ede4e0"
      >
        Mascara
      </button>
      <button
        @click="selectedCategory = 'LipGloss'"
        class="Dropp"
        id="lip"
        style="background-color: #ffd4d4"
      >
        LipGloss
      </button>
      <button
        @click="selectedCategory = 'Powder'"
        class="Dropp"
        id="pow"
        style="background-color: #eddbc7"
      >
        Powder
      </button>
    </div>

    <div v-if="selectedCategory" class="DropContainer">
      <div
        v-if="selectedCategory === 'EyeMakeUp'"
        id="productFilter"
        class="card"
      >
        <ul class="list-group list-group-flush">
          <li
            v-for="product in eyeMakeUp"
            :key="product.name"
            class="list-group-item"
          >
            <img
              :src="product.image"
              alt="Eye MakeUp"
              id="filterImage"
              class="card-img-top"
            />
            <p>{{ product.name }} - {{ product.price }}</p>
            <button @click="addToBasket(product)">Add to basket</button>
          </li>
        </ul>
      </div>
      <div
        v-else-if="selectedCategory === 'Foundation'"
        id="productFilter"
        class="card"
      >
        <ul class="list-group list-group-flush">
          <li
            v-for="product in foundation"
            :key="product.name"
            class="list-group-item"
          >
            <img
              :src="product.image"
              alt="Foundation"
              id="filterImage"
              class="img-top"
            />
            <p>{{ product.name }} - {{ product.price }}</p>
            <button @click="addToBasket(product)">Add to basket</button>
          </li>
        </ul>
      </div>
      <div
        v-if="selectedCategory === 'Mascara'"
        id="productFilter"
        class="card"
      >
        <ul class="list-group list-group-flush">
          <li
            v-for="product in Mascara"
            :key="product.name"
            class="list-group-item"
          >
            <img
              :src="product.image"
              alt="Mascara"
              id="filterImage"
              class="card-img-top"
            />
            <p>{{ product.name }} - {{ product.price }}</p>
            <button @click="addToBasket(product)">Add to basket</button>
          </li>
        </ul>
      </div>
      <div
        v-else-if="selectedCategory === 'LipGloss'"
        id="productFilter"
        class="card"
      >
        <ul class="list-group list-group-flush">
          <li
            v-for="product in LipGloss"
            :key="product.name"
            class="list-group-item"
          >
            <img
              :src="product.image"
              alt="LipGloss"
              id="filterImage"
              class="card-img-top"
            />
            <p>{{ product.name }} - {{ product.price }}</p>
            <button @click="addToBasket(product)">Add to basket</button>
          </li>
        </ul>
      </div>
      <div
        v-else-if="selectedCategory === 'Powder'"
        id="productFilter"
        class="card"
      >
        <ul class="list-group list-group-flush">
          <li
            v-for="product in Powder"
            :key="product.name"
            class="list-group-item"
          >
            <img
              :src="product.image"
              alt="Powder"
              id="filterImage"
              class="card-img-top"
            />
            <p>{{ product.name }} - {{ product.price }}</p>
            <button @click="addToBasket(product)">Add to basket</button>
          </li>
        </ul>
      </div>
      <button
        @click="selectedCategory = null"
        style="width: 70px; border: 0.5px"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedCategory: null,
      products: [],
      basket: [],
    };
  },
  // fetching the product with axios .
  created() {
    axios.get("product.json").then((response) => {
      this.products = response.data;
    });
  },
  computed: {
    eyeMakeUp() {
      return this.products.filter(
        (product) => product.category === "EyeMakeUp"
      );
    },
    foundation() {
      return this.products.filter(
        (product) => product.category === "Foundation"
      );
    },
    Mascara() {
      return this.products.filter((product) => product.category === "Mascara");
    },
    LipGloss() {
      return this.products.filter((product) => product.category === "LipGloss");
    },
    Powder() {
      return this.products.filter((product) => product.category === "Powder");
    },
    // Added computed properties.
  },
  methods: {
    addToBasket(product) {
      this.basket.push(product);
      alert("You added the product to the basket");
    },
  },
};
</script>
<style>
.btn-dropbox {
  margin: 8px;
  padding: 10px;
}
.Box {
  width: auto;
  height: 300px;
  margin: 10px;
  margin-left: 20px;
  padding: 20px;
}
.Dropp {
  display: inline;
  width: 170px;
  height: 170px;
  margin: 10px 30px 0px 30px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  justify-content: center;
}
.DropContainer {
  width: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
#productFilter {
  width: 300;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.list-group {
  display: flex;
  flex-direction: row;
}
#Eye {
  background-color: #ecc8de;
}
#filterImage {
  width: 220px;
  height: 200px;
}
@media only screen and (max-width: 768px) {
  .dropdown-mobile {
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
}
/* For mobile phones: */
</style>
