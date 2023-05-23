import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCgTEOACnjcY8tjaqBvnPSMoWY4nNAgdkU',
    libraries: 'places', // Opcional, puedes agregar otras bibliotecas que necesites
  },
});
