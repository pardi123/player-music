<template>
    <v-app>

    <div class="login">
            <v-row justify="center" class="pt-16 mt-15">
        <v-col cols="4" class="pt-16 mt-10">
          <v-card id="background-image" dark class="pl-5 pr-5 ">
              <v-card-title class="justify-center">
                Login
              </v-card-title>
              <v-divider></v-divider>
                <v-text-field 
                    outlined 
                    label="Username"
                ></v-text-field>
                <v-text-field 
                     outlined label="Password" 
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off' " 
                ></v-text-field>
                <v-row>
                  <v-col cols="6">
                      <v-btn color="btn" to="/signup" class="mr-2" @click="toSignup()">Sign Up</v-btn>
                    <v-btn color="btn" @click="toPlayer()">Login</v-btn>

                  </v-col>

                </v-row>
          </v-card>
        </v-col>
    </v-row>
    </div>
    </v-app>

</template>
<script>

export default {
    data: () => ({
        showPassword: false,
    }),
    methods: {
        toSignup(){
            this.$router.push('/signup')
        },
        toPlayer(){
            this.$router.push('/home')
        }
    }
}
</script>
<style >
    .login{
    background-image: url('../assets/bg.jpg');
    height: 700px;
 
}
</style>