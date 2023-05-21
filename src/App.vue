<template>
  <div>
    <v-app>
      <v-main class="ma-0 pa-0">
        <navbar/>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>
<script>
 import navbar from './components/navbar.vue';
export default{
  components:{
    navbar,
  },
  metaInfo () {
    return {
      titleTemplate: `%s - ISAPE`
    }
  },


}
</script>