<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid class="mt-3">
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Encontrá tu sala más cercana', src: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg', flex: 12 },
        { title: 'Estudios de grabación', src: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg', flex: 12 },
        { title: 'Salas de ensayo', src: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg', flex: 12 },
      ],
    }),
  }
</script>