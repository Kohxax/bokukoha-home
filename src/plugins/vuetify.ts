/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import { createVuetify } from 'vuetify'
import { de } from 'vuetify/locale'
import { createApp } from 'vue'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'koha',
    themes: {
      koha: {
        dark: true,
        colors: {
          background: '#303030',
          surface: '#303030',
          sheet: '#424242'
        }
      }
    }
  }   
})
