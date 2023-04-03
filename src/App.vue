<template>
  <v-app>
    <v-main>
      <!-- <router-view/> -->
      <Login />
    </v-main>
  </v-app>
</template>
<script>
import Login from './views/Home.vue'
export default {
  name: 'App',
  components: {
    Login
  },
  data: () => ({

  }),
  
};
</script>


