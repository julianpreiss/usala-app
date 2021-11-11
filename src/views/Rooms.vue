<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="mx-auto my-2" max-width="374" v-for="room in rooms" :key="room.id">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>
          <v-img height="250" :src="room.img"></v-img>
          <v-card-title v-text="room.name"></v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
              <div class="grey--text ms-4"> 4.5 (413)</div>
            </v-row>
            <v-card-title class="text-subtitle-1" v-text="room.address"></v-card-title>
            <div>
              <p>{{room.description}}</p>
              <p>{{room.price}}</p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="pink darken-1 lighten-2" text>Reservar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        rooms: [],
        baseUrl: 'http://localhost:8001/api/rooms' //llamara a la api en un archivo js
      };
    },
    created(){
      this.getRooms();
    },
    methods:{
      async getRooms(){
        const res = await this.axios.get( this.baseUrl ) //Repasar el tallar para ver si podemos cambiar axios por otra conexión
        this.rooms = res.data
      }
    }
  }
</script>
