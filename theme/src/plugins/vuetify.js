// Vuetify Documentation https://vuetifyjs.com

import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#7c7c84',
        secondary: '#050B1F',
        accent: '#204165',
      },
      dark: {
        primary: '#50778D',
        secondary: '#0B1C3D',
        accent: '#204165',
      },
    },
  },
})
