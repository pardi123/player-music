<template>
    <div class="login">

      <v-row justify="center" class="pt-16 mt-15">
        <v-col cols="4" class="pt-16 mt-10">
          <v-card id="background-image" dark class="pl-5 pr-5 ">
              <v-card-title class="justify-center">
                Sign Up
              </v-card-title>
              <v-divider></v-divider>
                <v-text-field 
                    outlined 
                    label="Username"
                ></v-text-field>
                <v-text-field 
                    outlined 
                    label="email"
                ></v-text-field>
                <v-text-field 
                     outlined label="Password" 
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' " 
                ></v-text-field>
                <v-row>
                  <v-col cols="6">
                      <v-btn color="btn" class="mr-3" @click="toLogin()">Back</v-btn>
                    <v-btn color="btn" @click="toPlayer()">Sign Up</v-btn>

                  </v-col>

                </v-row>
          </v-card>
        </v-col>
    </v-row>
    </div>

</template>

<script>
export default {
    data: () => ({
        showPassword: false,
    }),
    methods: {
        toLogin(){
            this.$router.push('/')
        },
        toPlayer(){
            this.$router.push('/home')
        }
    }
}
</script>

<style>
    .login{
    background-image: url('../assets/bg.jpg');
    height: 700px;
 
}
</style>