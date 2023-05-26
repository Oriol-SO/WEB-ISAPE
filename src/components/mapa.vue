<template>
  <div style="width: 100%; height: 100%;">
    <GmapMap :center="center" :zoom="zoom" style="width: 100%; height: 100%;">
      <GmapMarker :position="center">
      </GmapMarker>
    </GmapMap>
    <v-btn  color="primary" class="text-capitalize ma-2" small @click="openGoogleMaps" >Ir</v-btn>
  </div>
  </template>
  
  <script>
  export default {

    data() {
      return {
        center:{lat:-12.028167183762156, lng:-76.93167179049733}, // Coordenadas del centro del mapa
        zoom: 16, // Nivel de zoom inicial del mapa
      };
    },methods:{
      openGoogleMaps() {
        const latitude = this.center.lat;
        const longitude = this.center.lng;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        // Abrir en una nueva pestaña del navegador
        window.open(url, '_blank');
      }
    }

  };
  </script>
  <style>
  .open-maps-button {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
  }
  </style>