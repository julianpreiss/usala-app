<template>
  <v-container>
    <Search />
    <CardsHome />
  </v-container>
</template>

<script>
  import Search from '../components/Search.vue'
  import CardsHome from '../components/CardsHome.vue'

  export default {
    name: 'Home',

    components: {
      Search,
      CardsHome
    },
  }
</script>

