<template>
  <div>
    
    <br>
    <tables class="tabl"></tables>
    <card></card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: ""
    };
  },
  computed: {
    
  }
};
</script>


<style>

@media (max-width: 768px) { 
  .tabl {
    display: none;
  }
 }
</style>

