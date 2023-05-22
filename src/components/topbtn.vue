<template>
    <v-btn v-if="showbtn"  @click="scrollToTop" class="btn-scroll-top " fab dark small > <v-icon dark>mdi-arrow-up</v-icon></v-btn>
</template>
<script>
export default{
    name:'topbtn',
    data(){
        return{
            showbtn:false,
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },   
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll() {
         this.showbtn = window.scrollY > 0;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Animación de desplazamiento suave
            });
        },
    }
}
</script>
<style scoped>
.btn-scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  padding: 0;
  margin: 0;
  border-radius: 50%;
}
</style>