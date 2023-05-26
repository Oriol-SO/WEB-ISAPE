<template>
    <div :class="$store.state.About?'animacion-about':''">
        <v-img
        src="/img/nosotros.jpg"
        :aspect-ratio="16/5"
        style="  height: 40vh ; magin:0; background-size: cover;" 
        gradient="to bottom,rgb(255 255 255), rgb(184 195 255 / 53%)"
        class="white--text" 
        >
        <v-responsive
              class="d-flex align-center mx-auto"
              height="100%"
              max-width="100%"            
            >   
                 <v-card-title class=" d-flex justify-center mb-2">
                    <div style="width: 50px; height: 6px; background-color: orange;"></div>
                </v-card-title>
                <v-card-title class="text-h2 d-flex justify-center" style="color:#0d70b7; font-weight:450">
                    CONÓCENOS
                </v-card-title>
                <v-card-title class=" d-flex justify-center text-h6 " style="color:black; text-align: center;">
                    Contamos con profesionales altamente capacitados
                </v-card-title>
        </v-responsive>

        </v-img>
        <div>
        <v-container>
            <v-card elevation="0">
                <v-card-text class="pa-5" >
                    <div>
                        <p class="d-flex " style="text-align: center; font-size: 1.1rem;">
                            ISAPE es una empresa especializada en brindar soluciones en los sectores
                            de minería, industria y energía. Desde nuestra fundación, hemos
                            desarrollado una sólida experiencia en la provisión de servicios de
                            ingeniería, mantenimiento mecánico y eléctrico, fabricación en metal
                            mecánica, montaje de equipos en plantas concentradoras y construcción de
                            obras civiles.
                        </p> 
                        <p class="d-flex" style="text-align: center; font-size: 1.1rem;">
                            
                            En ISAPE, nuestra prioridad es ofrecer soluciones eficientes y efectivas a
                            nuestros clientes. Por ello, trabajamos con un equipo de profesionales
                            altamente capacitados y comprometidos con la satisfacción del cliente.
                            Nuestro equipo de ingenieros, técnicos y personal de apoyo cuenta con una
                            amplia experiencia en la industria, lo que nos permite brindar un servicio de
                            alta calidad que cumpla con las expectativas de nuestros clientes.
                        </p>
                    </div>
                    
                </v-card-text>
            </v-card>            
        </v-container>
        </div>
        <div  class="pt-5">
            <div class="px-5">
                <v-container>
                    <v-row >
                        <v-col cols="12" md="6" class="px-4">
                            <v-card elevation="0" style="border-radius: 15px; height: 100%;">
                                <v-img
                                src="/img/mision.jpg"
                                :aspect-ratio="16/6"
                                height="95%"
                                gradient="to bottom,rgba(0, 0, 10, 0.19), rgb(34 39 61 / 81%)"
                                >
                                <v-card-title style="justify-content: center;" class="text-h3 white--text">
                                    Misión 
                                </v-card-title>
                                <v-card-text class="pt-4" >
                                        <p class="px-16 white--text " style=" text-align: center; font-size: 1.1rem;" >
                                            Proporcionar soluciones eficientes y efectivas que
                                            agreguen valor a nuestros clientes y les permitan alcanzar
                                            sus objetivos de negocio de manera exitosa. Nos
                                            esforzamos por brindar servicios de alta calidad,
                                            seguridad y medio ambiente, cumpliendo siempre con los
                                            más altos estándares.
                                        </p>
                                </v-card-text>
                                
                                </v-img>
                            
                            </v-card>
                    
                        </v-col>
                        <v-col cols="12" md="6" class="px-4">
                            <v-card elevation="0" style="border-radius: 15px; height: 100%;">
                                <v-img
                                src="/img/vision.jpg"
                                :aspect-ratio="16/6"
                                height="95%"
                                gradient="to bottom,rgba(0, 0, 10, 0.19), rgb(34 39 61 / 81%)"
                                >
                                <v-card-title style="justify-content: center;" class="text-h3 white--text ">
                                    Visión
                                </v-card-title>
                                <v-card-text class="pt-4" >
                                        <p class="px-16 white--text " style="text-align: center; font-size: 1.1rem;" >
                                            Nos esforzamos por ser líderes en el mercado de
                                            soluciones para los sectores de minería, industria y
                                            energía. Buscamos siempre innovar y mejorar nuestros
                                            servicios, con el objetivo de superar las expectativas de
                                            nuestros clientes y ser reconocidos como un socio
                                            confiable y de calidad.
                                        </p>
                                </v-card-text>
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <div class="px-10">
                <v-card-title class="text-h3 my-0 d-flex justify-center"  >
                    ¿Por que elegirnos? 
                </v-card-title>
               
                <v-card elevation="0">
                    <v-divider inset class="pb-5"></v-divider>
                    <v-row>     
                        <v-col cols="12" md="3" sm="6" class="d-flex justify-center"
                        v-for="(item,i) in items" :key="i" >
                            <div class="card ">
                                <div class="circle" :style="'background-color:'+item.color">
                                    <h2>{{item.title}}</h2>
                                </div>
                                <div class="content">
                                    <p>{{ item.text }}</p>
                                </div>
                            </div>
                        </v-col>
                    
                    </v-row>
                </v-card>
            </div>
            
            <div>
                <v-card-title class="text-h3 mt-5 d-flex justify-center">
                  Nuestros valores 
                </v-card-title>
                <div>
                    <valores/>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import valores from '../../components/valores.vue'
export default{
    components:{
        valores,
    },
    metaInfo(){
        return{title:'Nosotros'}
    },
    mounted(){
        this.$store.commit('disableloader','About')
    },
    data(){ 
        return{
            items:[
                {   color:'#faa038',
                    title:'Experiencia y conocimientos técnico',
                    text:'En ISAPE, contamos con una amplia experiencia en la provisión de servicios de ingeniería, mantenimiento mecánico y eléctrico, fabricación en metal mecánica, montaje de equipos en plantas concentradoras y construcción de obras civiles.'
                },
                {   color:'#12bb5a',
                    title:'Compromiso con la calidad y la seguridad',
                    text:'En ISAPE, la calidad y la seguridad son nuestras principales prioridades. Trabajamos con los más altos estándares en estas áreas para asegurarnos de que nuestras soluciones sean efectivas y seguras.'
                },
                {   color:'#5a33dc',
                    title:'Innovación y tecnología',
                    text:'En ISAPE, estamos comprometidos con la innovación y la tecnología. Buscamos estar a la vanguardia en estas áreas para ofrecer soluciones eficientes y efectivas a nuestros clientes.'
                },
                {   color:'#6790a2',
                    title:'Servicio personalizado',
                    text:'En ISAPE, entendemos que cada cliente tiene necesidades y requisitos únicos. Por ello, ofrecemos un servicio personalizado que se adapta a las necesidades específicas de cada cliente..'
                },

            ]
        }
    }
}
</script>
<style>
.animacion-about .v-image__image{
  animation:hacer-zoom-inverso 1s ease-in-out;
}
.v-image{
    border-radius: 0px;
}
.card {
    position: relative;
    width: 290px;
    height: 400px;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 25px rgba(0,0,0,0.2);
    transition: 0.5s;
}
 .card .circle {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    clip-path: circle(180px at center 0);
    text-align: center;
}

 .card .circle h2 {
    color: #fff;
    font-size: 1.2rem;
    padding: 40px 0;
}

 .card .content {
    position: absolute;
    bottom: 10px;
    padding: 8px;
    page-break-after: 20px;
    text-align: center;
}

 .card .content p {
    color: #666;
}


</style>