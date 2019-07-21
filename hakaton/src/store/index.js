import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: 0,
    count: 0,
    user: {
      name: 'Guest_' + Math.round(Math.random() * (100 - 0) + 0),
      access: 0
    },
    db: [{
      id: 12,
      link: "https://drive.google.com/open?id=1arx-AK2QgNaAop5pO75zBGSVr0cR7oJ4",
      title: "Строительство Дороги",
      text: "Соглашение",
      sideOne: "АО Ланит",
      sideTwo: "AO Ипопат",
      sidePresentOne: "Васильев Виктор Генадьевич",
      sidePresentTwo: "Вологжанин Никита Андреевиич",
      Author: "Владислав Минин",
      dateStart: "20.07.2019",
      dateEnd: "25.07.2019",
      showMored: false,
      like: 12,
      holiday: [
        { id: 134, Date: '22.08.2019', Author: "Василий Пупкин", description: "Привезти гравий." },
        { id: 131, Date: '21.07.2019', Author: "Василий Генадьевич", description: "Закупить дорожное полотно." },
        { id: 123, Date: '23.07.2019', Author: "Василий Морозов", description: "Подготовить технику." }
      ],
      dislike: 2,
      comments: [
        { name: "Danil", text: "Привет,все отлично,спасибо за выполнение работ!" },
        { name: "Sergey", text: "Так держать,всегда там езжу,теперь с комфортом." }
      ]
    },
    {
      id: 14,
      title: "Строительство Дома",
      text: "Соглашение",
      sideOne: "АО Кокон",
      sideTwo: "ООО Газлок",
      Author: "Алексей Быков",
      dateStart: "24.07.2019",
      dateEnd: "29.07.2019",
      showMored: false,
      like: 13,
      dislike: 1,
      holiday: [
        { id: 213, Date: '22.08.2019', Author: "Василий Пупкин", description: "Привезти гравий." },
        { id: 131, Date: '21.07.2019', Author: "Василий Генадьевич", description: "Закупить дорожное полотно." },
        { id: 123, Date: '23.07.2019', Author: "Василий Морозов", description: "Подготовить технику." }
      ],
      comments: [
        { name: "Danil", text: "Где отчеты?" },
        { name: "Sergey", text: "Почему не обновляете информацию?" }
      ]
    },
    {
      id: 38,
      title: "Ремонт газоснабжения.",
      text: "Соглашение",
      sideOne: "АО ГАЗПРОМ",
      sideTwo: "ООО УралБетон",
      Author: "Дмитрий Синистренко",
      dateStart: "24.07.2019",
      dateEnd: "29.07.2019",
      showMored: false,
      like: 13,
      dislike: 1,
      holiday: [
        { id: 131, Date: '21.07.2019', Author: "Василий Генадьевич", description: "Заплатить за аренду транспорта." },
        { id: 213, Date: '22.07.2019', Author: "Кирилл Леонидович", description: "Закупить строй-материалы." },
        { id: 123, Date: '23.07.2019', Author: "Лев Георгиевич", description: "Подготовить технику." }
      ],
      comments: [
        { name: "Danil", text: "Уже 21 число,а отчетов нету! Не хорошо!" },
        { name: "Sergey", text: "Что за хамство? Где отчеты???" }
      ]
    }
    ]
  },
  plugins: [createPersistedState()],
  mutations: {
    login(state, payload) {
      state.login = 1;
      state.user.name = payload[0],
        state.user.access = payload[1];
    },
    logout(state) {
      state.login = 0;
      state.user.name = 'Guest_' + Math.round(Math.random() * (100 - 0) + 0);
      state.user.access = 0;
    },
    addComm(state, payload) {
      state.db.forEach(item => {
        if (item.id == payload[1]) {
          item.comments.push(payload[0]);
        }
      })
    },
    addLike(state, payload) {
      state.db.forEach(item => {
        if (item.id == payload) {
          item.like++;
        }
      })
    },
    addDislike(state, payload) {
      state.db.forEach(item => {
        if (item.id == payload) {
          item.dislike++;
        }
      })
    }
  }
})

