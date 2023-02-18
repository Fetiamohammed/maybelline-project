<template class="Signup-mobile">
  <!-- sign up form, v-modal is used to let users write info.
    custom event is used to emits  the event on"console" with an object
    containing the name and email and it will render a message,
    it won't show if it is empty. this page is completed-->
  <h3 class="members-Message">
    Members deals!<br />
    Register and Get Discount Code
  </h3>
  <div class="MemberShipBox">
    <div class="sign-up-box">
      <form class="memberContainer" @submit.prevent="submitForm">
        <h4 class="member-list-box">SignUp form</h4>
        <div class="member-list-box">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" />
        </div>
        <div class="member-list-box">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" />
        </div>
        <div class="member-list-box">
          <label for="passWord">PassWord</label>
          <input type="text" id="passWord" v-model="passWord" />
        </div>
        <button class="member-Container-btn" type="submit">Sign up</button>
      </form>
      <div class="Welcome-signup" v-if="showWelcome">
        <h3 style="color: Purple">Welcome {{ name }} !!</h3>
        <h5>
          You get welcome discount : DISCOUNT20 <br />
          Use the code to get 20% off on your firs purchase
        </h5>
      </div>
    </div>
    <div class="Saleimg-box">
      <img class="sale-img" src="../assets/img/sale-1.jpeg" alt="sale" />
      <img class="sale-img" src="../assets/img/saleImage.jpeg" alt="sale" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      passWord: "",
      showWelcome: false,
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email) {
        this.showWelcome = true;
        this.$emit("signup-complete", { name: this.name, email: this.email });
      }
    },
  },
};
</script>
<style>
.members-Message {
  width: 83vw;
  height: 100px;
  margin-right: 18vw;
  margin-left: 8vw;
  align-items: center;
  padding: 20px;
  background-color: rgb(219, 234, 229);
  justify-content: center;
}
.MemberShipBox {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
}
.sign-up-box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
  width: 400px;
  height: auto;
}
.memberContainer {
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
  padding-left: 10px;
  background-color: rgb(238, 230, 239);
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.member-list-box {
  width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: rgb(238, 230, 239);
  margin: 10px;
  padding: 10px;
}
.member-Container-btn {
  width: 280px;
  margin: 20px;
  border-radius: 10px;
}
.Saleimg-box {
  width: 400px;
  height: auto;
  margin: 10px;
  padding: 10px;
}
.sale-img {
  width: 380px;
  height: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.Welcome-signup {
  background-color: rgb(228, 221, 228);
  width: 30vw;
  height: 200px;
  margin: 40px 20px 20px 20px;
  padding: 10px;
  justify-content: center;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .Signup-mobile {
    width: 100%;
    height: auto;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
}
</style>
