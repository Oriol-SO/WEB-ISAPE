<template>
  <div>
    <v-app>
      <v-main class="ma-0 pa-0" v-if="!loader">
        <navbar v-if="verificar"/>
          <router-view></router-view>
          <topbtn />
        <pie v-if="verificar"/>
      </v-main>
      <v-main v-else>
        <loader/>
      </v-main>
    </v-app>
  </div>
</template>
<script>
 import navbar from './components/navbar.vue';
 import pie from './components/footer.vue';
 import topbtn from './components/topbtn.vue';
 import loader from './components/loader.vue';
export default{
  components:{
    navbar,
    pie,
    topbtn,
    loader,
  },
  data(){
    return{
      rutas:['/inicio','/nosotros','/servicios','/contacto'],
      loader:true,
    }

  },
  metaInfo () {
    return {
      titleTemplate: `%s ISAPE`
    }
  },computed:{
    verificar(){
      return this.rutas.includes(this.$route.path)
    },

  },mounted(){
    setTimeout(() => {
            this.loader=false;
    },1500);
  }

}
</script>


