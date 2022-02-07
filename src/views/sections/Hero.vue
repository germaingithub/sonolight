<template>

  <section id="hero">
  <base-Loader />
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/sonofond.jpeg')"
      class="white--text"
      gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
          >
          <base-subheading
            weight="regular"
            title="Toujours à votre écoute"
          />

          <base-heading
            size="text-h2"
            title="Location & prestation sur mesure"
            weight="medium"
          />

          <base-body>
            Location de sonorisation et éclairage pour vos tous vos événements en Basse Normandie et Bretagne.
            Nous proposons enceinte, sono, éclairage, jeux de lumière, vidéo projecteur, machine à mousse...
            PME normande active depuis 2010 dans le domaine de la technique professionnelle du spectacle et de l’événementiel, concepteur et intégrateur basée en Basse Normandie.
          </base-body>
          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  import Loader from '@/components/base/Loader.vue'
  export default {
    name: 'SectionHero',
    components: {
      Loader,
    },
    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
    methods: {
      show () {
        setTimeout(() => {
          this.visibility = true
        }, 5000)
      },
    },
  }
</script>
<style scoped>
.home {
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
