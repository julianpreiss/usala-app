<template>
    <v-form method="post" action="#" enctype="multipart/form-data">
        <v-container ref="form">
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="name"
                    :counter="10"
                    label="Nombre"
                    required
                    ></v-text-field>
                    {{name}}
                </v-col>
        
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="last_name"
                    :counter="10"
                    label="Apellido"
                    required
                    ></v-text-field>
                </v-col>
        
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="date_birth"
                    label="Fecha de nacimiento"
                    required
                    ></v-text-field>
                </v-col>
        
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="phone"
                    :counter="10"
                    label="Teléfono"
                    required
                    ></v-text-field>
                </v-col>
        
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="user_name"
                    label="Nombre de usuario"
                    required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                    v-model="password"
                    label="Contraseña"
                    required
                    ></v-text-field>
                </v-col>

            </v-row>

            <v-btn
                class="mr-4"
                type="submit"
            >
                registrarse
            </v-btn>
        </v-container>
    </v-form>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    data () {
        return {
            user: [],
            name: null,
            last_name: null,
            email: null,
            date_birth: null,
            phone: null,
            user_name: null,
            password: null,
            type: "user",
            owner: false,
            baseUrl: 'http://localhost:8001/api/users'
        }
    },
    computed: {
      form () {
        return {
          name: this.name,
          last_name: this.last_name,
          email: this.email,
          date_birth: this.date_birth,
          phone: this.phone,
          user_name: this.user_name,
          password: this.password,
          type: this.type,
          owner: this.owner
        }
      },
    },
    created(){
        this.creatUser();
    },
    methods:{
        async creatUser(){
            const body = this.form
            //new [],
            /*body [
                name =  this.name,
                last_name = this.last_name,
                email = this.email,
                date_birth = this.date_birth,
                phone = this.phone,
                user_name = this.user_name,
                password = this.password,
                type = this.type,
                owner = this.owner
            ]*/
            const res = await this.axios.post(this.baseUrl, body )
            this.user = res.data.id
            console.log(this.user)
        },
        submitAction () {
            this.$emit('submit')
        },
    }, 
    name: 'RegistroUser',
}
</script>