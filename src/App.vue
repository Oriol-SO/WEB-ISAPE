<template>
  <div>
    <v-app>
      <v-main class="ma-0 pa-0">
        <navbar v-if="verificar"/>
          <router-view></router-view>
          <topbtn />
        <pie v-if="verificar"/>
      </v-main>
    </v-app>
  </div>
</template>
<script>
 import navbar from './components/navbar.vue';
 import pie from './components/footer.vue';
 import topbtn from './components/topbtn.vue'
export default{
  components:{
    navbar,
    pie,
    topbtn,
  },
  data(){
    return{
      rutas:['/inicio','/nosotros',]//'/servicios','/contacto']
    }

  },
  metaInfo () {
    return {
      titleTemplate: `%s - ISAPE`
    }
  },computed:{
    verificar(){
      return this.rutas.includes(this.$route.path)
    }
  },

}
</script>


