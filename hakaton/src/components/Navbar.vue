<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand>ProjectName</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/home" class="nav-link">Home</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right>
            <button class="btn">{{this.$store.state.user.name.toUpperCase()}}</button>
            <button class="btn" :class="loginBtn" @click="loginIn">{{loginText}}</button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <login @closeModal="login.showModal=false" v-if="login.showModal"></login>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        showModal: false,
        text: "Login"
      }
    };
  },
  methods: {
    loginIn() {
      if (this.$store.state.login == 0) {
        this.login.showModal = true;
      } else {
        console.log("Вы уже зашли");
        this.$store.commit('logout');
      }
    }
  },
  computed: {
    loginText() {
      if (this.$store.state.login == 1) {
        return "Logout";
      } else {
        return "Login";
      }
    },
    loginBtn() {
      if (this.$store.state.login == 1) {
        return "btn-danger";
      } else {
        return "btn-success";
      }
    }
  }
};
</script>


<style>
.router-link-active {
  font-weight: 600;
}

::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  background: #757474;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #969393;
  border-radius: 5px;
  height: 40px;
}
</style>
