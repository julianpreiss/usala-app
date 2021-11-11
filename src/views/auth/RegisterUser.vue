<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-form method="post" action="#" enctype="multipart/form-data">
        <v-card ref="form" class="my-3">
          <v-card-text>
            <v-text-field 
              ref="name" 
              v-model="name"
              :rules="[() => !!name || 'Este campo es obligatorio']"
              :error-messages="errorMessages"
              label="Nombre"
              required
            ></v-text-field>
            <v-text-field 
              ref="last_name" 
              v-model="last_name"
              :rules="[() => !!last_name || 'Este campo es obligatorio']"
              :error-messages="errorMessages"
              label="Apellido"
              required
            ></v-text-field>
            <v-textarea
              ref="description"
              v-model="description"
              :rules="[() => !!description || 'Este campo es obligatorio']"
              :error-messages="errorMessages"
              label="Descripción de la Sala"
              ></v-textarea>
            <v-text-field
              ref="address"
              v-model="address"
              :rules="[
                () => !!address || 'Este campo es obligatorio',
                addressCheck
              ]"
              label="Dirección"
              placeholder="Av. Belgrano 2186"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'Este campo es obligatorio']"
              label="Ciudad"
              placeholder="Ciudad Autónoma de Buenos Aires"
              required
            ></v-text-field>
            <v-file-input
                :rules="rules"
                ref="image"
                v-model="image"
                accept="image/png, image/jpeg, image/bmp"
                prepend-icon="mdi-camera"
                label="Imagenes de la Sala"
            ></v-file-input>
            <v-text-field
              ref="price"
              v-model="price"
              :rules="[() => !!price || 'Este campo es obligatorio']"
              label="Precio/hora"
              required
              placeholder="$"
            ></v-text-field>
            <v-text-field
              ref="m2"
              v-model="m2"
              :rules="[() => !!m2 || 'Este campo es obligatorio']"
              label="Mts² de la Sala"
              required
              placeholder="35m²"
            ></v-text-field>
            <v-combobox
              v-model="select"
              :items="services"
              label="Servicios"
              multiple
              chips
            ></v-combobox>
            <v-row>
              <v-col cols="11" sm="5">
                <v-menu
                    ref="menu"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="timeOpen"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="timeOpen"
                        label="Horario de Apertura"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menu2"
                    v-model="timeOpen"
                    full-width
                    @click:minute="$refs.menu.save(timeOpen)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="11" sm="5">
                <v-dialog
                    ref="dialog"
                    v-model="modal2"
                    :return-value.sync="timeOut"
                    persistent
                    width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="timeOut"
                        label="Horario de Cierre"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="modal2"
                    v-model="timeOut"
                    full-width
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(timeOut)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="mt-2"></v-divider>
          <v-card-actions class="m-auto">
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon class="my-0" v-bind="attrs" @click="resetForm" v-on="on">
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <!-- Centrar el boton -->
            <v-btn class="btn-buscar" dark rounded text @click="submit">Registrar Sala</v-btn>          
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      types: ['Sala de Ensayo', 'Estudio de Grabación'],
      errorMessages: '',
      name: null,
      description: null,
      address: null,
      city: null,
      image: null,
      price: null,
      m2: null,
      type: null,
      select: [],
      services: [
        'Wifi',
        'Alquiler de Instrumentos',
        'Adaptadores para Instrumentos',
        'Aire Acondicionado'
      ],
      rules: [
          value => !value || value.size < 2000000 || 'El tamaño de la imagen debe ser menor a 2 MB!',
      ],
      timeOpen: null,
      timeOut: null,
      menu2: false,
      modal2: false,
      formHasErrors: false,
    }),
    computed: {
      form () {
        return {
          name: this.name,
          description: this.description,
          address: this.address,
          city: this.city,
          image: this.image,
          price: this.price,
          m2: this.m2,
          type: this.type,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `Hey! I'm required`
          : ''
        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false
        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false
        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true
          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>

<style scoped>
</style>