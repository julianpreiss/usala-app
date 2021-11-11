<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-layout>
        <v-flex>
          <v-list dark>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6">John Leider</v-list-item-title>
                <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list nav dense dark>
            <v-list-item-group v-model="selectedItem" color="pink darken-1">
              <v-list-item links v-for="item in items" :key="item.title" :to="item.path">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="logoUsala">
        <v-img src="../src/assets/logo-usala.png"></v-img>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null, 
      selectedItem: 0,
      items: [
        { title: 'Inicio', icon: 'mdi-home', path: '/' },
        { title: 'Salas', icon: 'mdi-music-box-multiple', path: '/rooms' },
        { title: 'Mis Reservas', icon: 'mdi-check', path: '/reservas' },
        { title: 'Registrar Sala', icon: 'mdi-calendar-plus', path: '/registroroom' },
        { title: 'Iniciar Sesión', icon: 'mdi-login-variant', path: '/login' },
        { title: 'Registrar Usuario', icon: 'mdi-account-plus', path: '/registrouser' },
      ],
    })
  }
</script>
<!-- Se puede pasar todo el css a un archivo independiente?? -->
<style scoped> 
  .logoUsala{
    width: 100px;
    height: 50px;
    margin-top: 0;
    margin-left: 0;
  }
  .theme--light.v-app-bar.v-toolbar.v-sheet{
    background: #051A26 !important;
  }
  .theme--light.v-navigation-drawer{
    background: #051A26;
    color: white;
  }
</style>