<template>
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between">
    <div id="product-card-Home" class="card">
      <img :src="product.image" class="card-img-top" alt="Product image" />
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ product.name }}</li>
        <li class="list-group-item">{{ product.price }}</li>
        <li class="list-group-item">
          <router-link
            @click="showModal = true"
            href="#"
            id="product-home-btn"
            class="btn"
            to=""
            >BUY</router-link
          >
          <span />
          <router-link href="#" id="product-home-btn" class="heart" to=""
            ><img src="../assets/img/icons8-favorite-50 (2).png" alt=""
          /></router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- the modal that shows the product on the cart needs some correction -->
  <ShowModal />
  <router-view />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import ShowModal from "../components/ShowModal.vue";
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
    ShowModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
#product-card-Home {
  height: 360px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 220px;
  margin: 20px;
}
#product-home-btn {
  margin: 0px 20px 0px 20px;
}
</style>
