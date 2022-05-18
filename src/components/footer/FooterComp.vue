<template>
  <v-footer
    dark
    padless
    color="primary lighten-1"
  >
    <v-card
      class="flex"
    color="#002b3f"
      flat
      tile
    >
     

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Play</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
      name:'footer-comp',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style>
.linkGetSounds{

}
</style>