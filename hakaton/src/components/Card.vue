<template>
  <div>
    <div v-for="(item,index) in $store.state.db" :key="index">
      <div class="d-flex justify-content-center">
        <div class="mb-5 col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
          <div class="card" style="border-radius: 20px;">
            <div class="card-header header" style="border-radius: 20px 20px 0px 0px;">
              <h3>{{item.title}}</h3>
              <router-link
                tag="h6"
                v-if="$store.state.user.access>1"
                to="/adminpanel"
                style="cursor:pointer"
              >Редактировать</router-link>
            </div>

            <div class="card-body">
              <p class="card-text">
                {{item.text}}
                <strong>№{{item.id}}</strong>
              </p>
              <p class="card-text">
                Ответственное лицо:
                <strong>{{item.Author}}</strong>
              </p>
              <p class="card-text">
                Стороны Соглашения:
                <strong>{{item.sideOne}}</strong> и
                <strong>{{item.sideTwo}}</strong>
              </p>
              <p class="card-text">
                Начало работы:
                <strong>{{item.dateStart}}</strong>
              </p>

              <p class="card-text">
                Конец работ:
                <strong>{{item.dateEnd}}</strong>
              </p>
              <router-link tag="div" :to="'/document/'+item.id" :key="item.id">
                <b class="ssilka">Открыть документ полностью</b>
              </router-link>
              <br />
              <div class="tabl_min">
              <p class="card-text">
                <strong>Мероприятия:</strong>
              </p>
              <div class="d-flex justify-content-center">
                <table class="table table_mini table-sm text-center" style="font-size: 13px">
                  <thead class="thead-light">
                    <tr>
                      <th>№</th>
                      <th>Описание</th>
                      <th>Дата</th>
                      <th>Ответственный</th>
                      <th>Проверено</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in $store.state.db[index].holiday" :key="index">
                      <td>Мероприятие №{{index}}</td>
                      <td>{{item.description}}</td>
                      <td>{{item.Date}}</td>
                      <td>{{item.Author}}</td>
                      <td>
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="feedback">
                <div>
                  <img
                    v-animate-css.click="'tada'"
                    @click.once="like(item.id)"
                    width="24px"
                    height="24px"
                    src="../assets/like.png"
                  />
                  {{item.like}}
                </div>
                <div>
                  <img
                    v-animate-css.hover="'pulse'"
                    @click="showComment(item.id)"
                    width="24px"
                    height="24px"
                    src="../assets/comment.png"
                  />
                </div>
                <div>
                  {{item.dislike}}
                  <img
                    v-animate-css.click="'tada'"
                    @click.once="dislike(item.id)"
                    width="24px"
                    height="24px"
                    src="../assets/dislike.png"
                  />
                </div>
              </div>
              <slide :active="item.showMored">
                <div class="comments">
                  <div class="comment" v-for="(el,index) in item.comments" :key="index">
                    <hr />
                    <p>
                      <b>{{el.name}}</b>
                    </p>
                    <p>{{el.text}}</p>
                  </div>
                </div>
                <hr />
                <div v-if="$store.state.user.access>0">
                  <textarea style="border-radius: 15px" class="col-12" v-model="textComm" />
                  <button @click="addComm(item.id)" class="btn btn-secondary">Отправить</button>
                </div>
                <div v-else>
                  <b>Только авторизованные пользователи могут оставлять сообщения.</b>
                </div>
              </slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arr from "./cards.js";
import { setTimeout } from "timers";
export default {
  data() {
    return {
      cards: arr,
      textComm: ""
    };
  },
  methods: {
    showComment(ind) {
      this.$store.state.db.forEach(item => {
        if (item.id == ind) {
          item.showMored = !item.showMored;
        }
      });
    },
    addComm(ind) {
      let names = this.$store.state.user.name;
      this.$store.commit("addComm", [
        { name: names, text: this.textComm },
        ind
      ]);
      this.textComm="";
    },
    like(ind) {
      this.$store.commit("addLike", ind);
    },
    dislike(ind) {
      this.$store.commit("addDislike", ind);
    }
  }
};
</script>


<style scoped>
@media (max-width: 768px) {
  .tabl_min {
    display: none;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
textarea {
  outline: none;
  padding: 10px;
  height: 100px !important;
}
.ssilka {
  cursor: pointer;
  border-bottom: 1px solid black;
}
.card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.btn {
  border-radius: 25px;
}
.feedback {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

