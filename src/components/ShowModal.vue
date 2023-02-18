<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <img :src="product.image" class="modal-image" />
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
      <router-link rel="" type="" href="">
        @click="showModal = true" class="btn" to="">BUY</router-link
      >
    </div>
  </div>
  <router-view />
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  components: {
    RouterLink,
    RouterView,
  },
  data() {
    return {
      showModal: false,
      cart: [],
    };
  },
  methods: {
    addToCart() {
      this.cart.push(this.product);
      this.showModal = false;
    },
  },
};
</script>
<style>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
}

.modal-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
</style>
