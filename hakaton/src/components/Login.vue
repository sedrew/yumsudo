<template>
  <div>
    <b-modal class="modal" no-close-on-backdrop hide-header hide-footer v-model="visible">
      <a
        tag="button"
        href="https://www.gosuslugi.ru/"
        class="btn btn-outline-primary col-12"
      >Войти с помощью Госуслуг</a>
      <hr />
      <label for="name">Введите ваше имя учетной записи:</label>
      <input id="name" v-model="name" class="form-control" />
      <label for="password">Введите пароль:</label>
      <input id="password" v-model="password" class="form-control" />
      <br />
      <slide :active="showErr">
        <div class="alert alert-danger" role="alert">
          <strong>Произошла ошибка.</strong> Проверьте правильность вводимых данных!
        </div>
      </slide>
      <div class="btn_gr">
        <button @click="close" style="margin:0" class="btn btn-danger">Закрыть</button>
        <button @click="ok" class="btn btn-success">Подтвердить</button>
      </div>
    </b-modal>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      showErr: false,
      visible: true
    };
  },
  methods: {
    ok() {
      //Проверка админа
      if (this.password == "123" && this.name.replace(/\s+/g, "") == "admin") {
        if (this.name != "" && this.name != " " && this.name.length > 3) {
          this.$store.commit('login',[this.name,2]);
          this.$emit("closeModal", false);
        }
      } else {
        this.showErr = true;
      }
      //Проверка пользователя
      if (this.password == "1234" && this.name.replace(/\s+/g, "") == "user") {
        if (this.name != "" && this.name != " " && this.name.length > 3) {
          this.$store.commit('login',[this.name,1]);
          this.$emit("closeModal", false);
        }
      } else {
        this.showErr = true;
      }
    },
    close() {
      this.$store.state.login = 0;
      this.$store.state.user.access = 0;
      this.$emit("closeModal", false);
    }
  }
};
</script>


<style>
.modal-content {
  margin: 50% auto !important;
}
label {
  color: black !important;
}
.btn_gr {
  display: flex;
  justify-content: space-between;
}
</style>