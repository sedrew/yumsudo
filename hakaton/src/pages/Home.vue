<template>
  <div class="container col-6">
    <input class="form-control" type="text" v-model="text" />
    <br />
    <button class="btn btn-primary" @click="send">Отправить</button>
    <div v-for="item in text_server">{{item.name}}: {{item.age}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: "",
      text_server: ""
    };
  },
  methods: {
    send() {
      axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: `http://localhost:3030/`,
        data: {
          name: this.text,
          age: 12
        }
      }).then(response => {
        console.log(response.data);
        this.text_server = response.data;
      });
    }
  },
  computed: {},
  mounted() {
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: `http://localhost:3030/`,
      data: {}
    }).then(response => {
      console.log("моунтед");
      this.text_server = response.data;
    });
  },
  updated() {}
};
</script>

<style>
</style>

