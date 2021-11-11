<template>
  <v-card>
    <v-card-title class="text-h5 font-weight-regular white--text buscador">Buscar en tu zona </v-card-title>
    <v-card-text>
      <v-form>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field
                    label="Barrio"
                    prepend-icon="mdi-map-marker"
                    ></v-text-field>
                </v-col>
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-col
                        cols="12"
                        >
                            <v-text-field
                                v-model="date"
                                label="Elegir fecha"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </v-col>
                    </template>
                    <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        class="btn-menu"
                        @click="menu = false"
                    >Cancelar</v-btn>
                    <v-btn
                        text
                        class="btn-menu"
                        @click="$refs.menu.save(date)"
                    >OK</v-btn>
                    </v-date-picker>
                </v-menu>
            </v-row>
        </v-container>
        <div class="text-center">
          <v-btn medium rounded class="btn-buscar" dark>Buscar</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      zone: '',
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false
    }),
  }
</script>

<style>
  .buscador{
    background: #051A26;
  }
  .btn-menu{
    color: #051A26;
  }
  .btn-buscar{
    background: #EA1F54 !important;
    width: 60%;
  }
</style>