<template>
  <v-form class="my-3">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            ref="name"
            v-model="name"
            label="Nombre de usuario"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Contraseña"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <div class="text-center">
            <v-btn medium rounded class="btn-buscar" dark >Iniciar Sesión</v-btn>
          </div>
           <div class="text-center">
            <v-btn class="btn-buscar">Registrarse</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data () {
      return {
        errorMessages: '',
        name: null,
        show1: false,
        password: '12345678',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
    computed: {
      form () {
        return {
          name: this.name,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },
  }
</script>