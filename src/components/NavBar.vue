<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <!-- on the navebar i added sign in dropdown with v-moda and Conditional Rendering used
    watcher also used make text in the text field  be logg out to the consol when it finishs reloding
    it will render welcome message with the name. this page is completed-->
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MAYBELLINE <br />Newyork </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            MAYBELLINE <br />Newyork
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <RouterLink
                class="nav-link active"
                aria-current="page"
                href="#"
                to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" href="#" to="/about"
                >About</RouterLink
              >
            </li>
            <li class="nav-item dropdown" id=" NavSign">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SignIn
              </a>

              <ul class="dropdown-menu dropdown-menu-dark">
                <div id="sign-Drop">
                  <form @submit.prevent="submitForm">
                    <div class="dropdown-item">
                      <label class="dropdown-item" for="name">Full Name</label>
                      <input type="text" id="name" v-model="name" />
                    </div>
                    <div class="dropdown-item">
                      <label class="dropdown-item" for="email"
                        >Enter Email
                      </label>
                      <input type="email" id="email" v-model="email" />
                    </div>
                    <div class="dropdown-item">
                      <label class="dropdown-item" for="password">
                        Enter PassWord
                      </label>
                      <input type="text" id="password" v-model="password" />
                    </div>
                    <button class="dropdown-item" type="submit">Sign In</button>
                  </form>
                  <div class="dropdown-item" v-if="greeting">
                    {{ greeting }}
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      greeting: "",
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email && this.password) {
        this.greeting = `Welcome ${this.name}!`;
      }
    },
  },
  watch: {
    name(newName) {
      console.log(`you have written this ${newName}`);
      if (newName && this.email && this.password) {
        this.greeting = `Welcome ${newName}!`;
      } else {
        this.greeting = "";
      }
    },
    email() {
      this.greeting = "";
    },
    password() {
      this.greeting = "";
    },
  },
};
</script>

<style>
#NavSign {
  height: 350px;
  padding: 10px;
}
#sign-Drop {
  margin: 10px;
}
</style>
