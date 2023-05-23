<template>
    <GmapMap :center="center" :zoom="zoom" style="width: 100%; height: 100%;">
      <GmapMarker :position="markerPosition"></GmapMarker>
    </GmapMap>
  </template>
  
  <script>
  export default {
    data() {
      return {
        center:{lat:-12.028167183762156, lng:-76.93167179049733}, // Coordenadas del centro del mapa
        zoom: 16, // Nivel de zoom inicial del mapa
        markerPosition: {lat:-12.028167183762156, lng:-76.93167179049733}, // Coordenadas del marcador
      };
    },
  };
  </script>