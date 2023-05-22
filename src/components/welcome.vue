<template>
    <div  :class="$store.state.Home?'animacion-fondo':''" >
       <v-img
        src="/img/fondo.jpg"
        style="  height: 100vh ; magin:0; background-size: cover;" 
        gradient="to bottom,rgb(255 255 255), rgb(184 195 255 / 53%)"
        class="white--text "
       
       >
       
            <v-responsive
              class="d-flex align-center mx-auto"
              height="100%"
              max-width="100%"            
            >
   
              <div class="px-16 zoom-left" >
                <v-row>
                    <v-col cols="12" md="5">
                        <v-img
                        contain
                        src="/img/logo.svg"
                        aspect-ratio="2"
                        class="logo"
                        ></v-img>
                        <v-img
                        contain
                        class="eslogan"
                        :aspect-ratio="16/4"
                        src="/img/eslogan2.png"
                        ></v-img>
                    </v-col>
                    <v-col cols="12" md="7" class="d-flex " >
                        <div class="my-auto ">
                            <v-card   style="background-color:transparent;" elevation="0">
                                    <v-card-text class="text-h5" style="color:#0d70b7; font-weight: 450;">
                                        En ISAPE nos dedicamos al mantenimiento Preventivo
                                        y Montaje de Equipos para
                                        Plantas Industriales
                                    </v-card-text>
                            </v-card>
                           <tipado />
                            <v-card-text>
                                <v-btn color="#0d70b7" class="white--text"  to="/nosotros" >
                                    Empresa
                                </v-btn> 
                            </v-card-text>
                            <v-card-text class="redesso">
                                <v-btn
                                v-for="(item,i) in redes"
                                :key="i"
                                class="mx-4 white--text"
                                color="orange"
                                fab
                                small
                                dark
                                >
                                <v-icon size="24px" >
                                    {{ item.icon}}
                                </v-icon>
                                </v-btn>
                            </v-card-text>
                        </div>
                    </v-col>
                </v-row>
               
              </div>
            
            </v-responsive>
        </v-img>
    </div>
</template>

<script>
import tipado from './tipado.vue'
export default{
    name:'welcome',
    components:{
      tipado
    },
    data(){
        return{ 
            redes:[
                {icon:'mdi-facebook',link:''},
                {icon:'mdi-linkedin',link:''},
                {icon:'mdi-instagram',link:''},
            ],

        }
    },
    mounted(){
        this.$store.commit('disableloader','Home')
    },methods:{
       
    }
}
</script>
<style>
.texto {
  display: inline-block;
  color: #000;

}
.tamaño-t{
    font-size: 3rem;
    font-weight: 400;
    padding-top: 10px !important;
}

.cursor {
  opacity: 1;
  animation: blink 0.7s infinite;
}
.t-r{
    font-size: 1.5rem ;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: normal !important;
    font-family: "Roboto", sans-serif !important;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media (max-width: 820px) {
    .tamaño-t{
        font-size: 2rem;
    }
    .redesso{
        display: flex;
        justify-content: center;
    }
}
@media (max-width: 520px) {
    .tamaño-t{
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2rem;
        letter-spacing: normal !important;
        font-family: "Roboto", sans-serif !important;
    }
    .t-r{
        font-size: 1.3rem;
    }
 

}
.animacion-fondo .v-image__image{
  animation:hacer-zoom-inverso 1s ease-in-out;
}

.animacion-fondo .logo .v-image__image{
  animation: none;
}
.animacion-fondo .eslogan .v-image__image{
  animation: none;
}


@keyframes hacer-zoom-inverso {
  0% {
    opacity: 0;
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animacion-fondo .zoom-left {
  animation: zoom-izquierda 1s ease-in-out;
}

@keyframes zoom-izquierda {
  0% {
    transform: scale(0.4) translateX(-15%);
  }
  100% {
    transform: scale(1) translateX(0);
  }
}

</style>