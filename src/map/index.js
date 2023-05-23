import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg',
    libraries: 'places', // Opcional, puedes agregar otras bibliotecas que necesites
  },
});
