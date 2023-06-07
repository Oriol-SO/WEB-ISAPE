<template>
    <div >
        <v-img
        src="https://www.foronuclear.org/wp-content/uploads/2010/06/central-hidroelectrica.jpg"
        :aspect-ratio="16/5"
        style="  height: 30vh ; magin:0; background-size: cover;" 
        gradient="to bottom,rgb(255 255 255), rgb(184 195 255 / 53%)"
        class="white--text" 
        >
            <v-responsive
                class="d-flex align-start  "
                height="100%"
                max-width="100%"   
                style="margin-top: 100px;"
                >   
                    <v-card-title class=" d-flex justify-center mb-2">
                        <div style="width: 50px; height: 6px; background-color: orange;"></div>
                    </v-card-title>
                    <v-card-title class="text-h4 d-flex justify-center" style="color:#0d70b7; font-weight:450">
                        NUESTROS SERVICIOS
                    </v-card-title>
                    
            </v-responsive>
        </v-img>
        <V-container>
            <servicios />
        </V-container>

        <v-container class="my-7">
            <v-card-title class="d-flex justify-center text-h5">
                 SOCIOS ESTRATEGICOS
            </v-card-title>
            <v-card elevation="0">
                <v-row>
                    <v-col cols="6"  sm="4" md="2"  v-for="(item,i) in socios" :key="i" class="d-flex justify-center">
                        <div style="width: 90%; box-shadow: 23px 30px 40px -20px grey; border-radius:10px" class="d-flex align-center justify-center" >
                            <v-img
                            :src="item"
                            contain
                            :aspect-ratio="2"
                            ></v-img>
                        </div>
                    </v-col>
                </v-row>
              
            </v-card>
        </v-container>
        
    </div>
</template>

<script>
import servicios from '../../components/servicios.vue'
export default{
    components:{
        servicios,
    },
    metaInfo () {
        return { title: 'Servicios -' }
    },
    data(){
        return{
            socios:[
                '/img/socio/3m.jpg',
                '/img/socio/afp.jpg',
                '/img/socio/aptus.jpg',
                '/img/socio/globalmedic.jpg',
                '/img/socio/layher.jpg',
                '/img/socio/mapfre.jpg',
                '/img/socio/miller.jpg',
                '/img/socio/msa.jpg',
                '/img/socio/natclar.jpg',
                '/img/socio/pacifico.jpg',
                '/img/socio/rvmedic.jpg',
                '/img/socio/sgs.jpg',
                '/img/socio/stanley.jpg',
                '/img/socio/tramontina.jpg',
                '/img/socio/victorl.jpg',
            ]
        }
    },
    mounted(){
      
    }
}
</script>