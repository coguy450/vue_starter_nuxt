<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 >
      <div class="text-center">
        Logos can go here
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to Your butt
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>

          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
 
          <hr class="my-3">
          <a href="https://nuxtjs.org/" target="_blank"> Nuxt Documentation</a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
          >Nuxt GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
  }
}
</script>
