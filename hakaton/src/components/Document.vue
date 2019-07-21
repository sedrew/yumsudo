<template>
  <div>
    <br />
    <div class="d-flex justify-content-center">
      <div v-for="(item,index) in card" :key="index">
        <div>
          <a :href="item.link">Скачать экземпляр.</a>
        </div>
        <div>Соглашение №{{item.id}}</div>
        <div>Ответственное лицо: {{item.Author}}</div>
        <div>Дата заключения соглашения: {{item.dateStart}}</div>
        <div>Дата завершения поставленных задач: {{item.dateEnd}}</div>
        <div>Стороны соглашения: {{item.sideOne}} и {{item.sideTwo}}</div>
        <div>Лицо, курирующее Ответственного со стороны {{item.sideOne}}: {{item.sidePresentOne}}.</div>
        <div>Лицо, курирующее Ответственного со стороны {{item.sideTwo}}: {{item.sidePresentTwo}}.</div>
        <div>Лицо, подготавливающее документацию: {{item.sidePresentOne}}.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$router.currentRoute.params["id"],
      card: []
    };
  },
  methods: {
    check() {
      console.log(this.card);
    }
  },
  created() {
    this.$store.state.db.forEach(item => {
      if (item.id == this.id) {
        this.card.push(item);
      }
    });
  }
};
</script>

