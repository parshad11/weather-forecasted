<template>
  <div class="d-flex align-items-center p-2">
    <img src="@/assets/logo.png" alt="Weather Logo" class="img-fluid me-2" />
    <h3 class="m-0">Weather Forecast</h3>
    <div class="ms-auto">
      <UserDropdown v-if="isLoggedIn()" />
    </div>
  </div>
</template>

<script>
import UserDropdown from './UserDropdown.vue';

export default {
  name: 'WeatherLogo',
  components: {
    UserDropdown,
  },
  computed:{
    getLoginUser(){
      return this.$store.getters.getUser;
    }
  },
  methods:{
    isLoggedIn(){
      return Object.keys(this.getLoginUser).length > 0;
    }
  },
};
</script>

<style scoped>
img {
  width: 50px;
  height: auto;
}
</style>
