<template>
  <base-section id="theme-features">
    <base-section-heading title="Notre savoir-faire">
      Après des années d'expérience dans l'evenmentiel dans les boites de nuit et organisations d'vement....
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Mariage',
          icon: 'mdi-fountain-pen-tip',
          text: 'Le plus beau jours de la vie... jusqu 500pax.',
        },
        {
          title: 'Anniversaire',
          icon: 'mdi-cellphone',
          text: 'Le plus beau jours de la vie... jusqu 500pax.',
        },
        {
          title: 'Baby shower',
          icon: 'mdi-pencil-box-outline',
          text: 'On ferait tout pour nos petits bout de choux',
        },
        {
          title: 'EVJF,EVG',
          icon: 'mdi-image-size-select-actual',
          text: 'La dernière soirée avant la corde au cou',
        },
        {
          title: 'Divorce',
          icon: 'mdi-ice-pop',
          text: 'Enfin libéré, délivéré, Lets party',
        },
        {
          title: 'Evenements personnalisé',
          icon: 'mdi-help-circle-outline',
          text: 'un besoin en particulier, nous sommes à lecoute',
        },
      ],
    }),
  }
</script>
