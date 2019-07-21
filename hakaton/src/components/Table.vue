<template>
  <div>
    <table class="table text-center">
      <thead class="thead-dark">
        <tr>
          <th>№</th>
          <th>Описание</th>
          <th>Дата начала</th>
          <th>Дата конца</th>
          <th>Ответсвенный</th>
          <th>Мероприятия</th>
          <th>Ознакомление</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in $store.state.db" :key="index">
          <th scope="row">{{index++}}</th>
          <td>Сертификат №{{item.id}}</td>
          <td>{{item.dateStart}}</td>
          <td>{{item.dateEnd}}</td>
          <td>{{item.Author}}</td>
          <td>Смотреть</td>
          <router-link style="cursor:pointer;" tag="td" :to="'/document/'+item.id" :key="item.id">Открыть документ полностью</router-link>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>

