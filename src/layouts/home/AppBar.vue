<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="80"
    >
      <base-img
        :src="require('@/assets/sono-logo.jpeg')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="120"
        width="100%"
      />

      <base-img
        contain
        max-width="96"
        width="100%"
      />

      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab>
          <router-link to="#features">Pro</router-link>
          </v-tab>
           <v-tab>
         <router-link to="#theme-features">Particuliers</router-link>
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'HomeAppBar',

    data: () => ({
      drawer: null,
      items: [
        'Home',
        'Pro',
        'Mariage',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
