<template>
    <div>
        <v-img
        src="https://images.ecestaticos.com/Ahtod-lArarNWnMfXty0uHTtFkQ=/162x7:1253x825/1200x899/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fa05%2Fd10%2F20c%2Fa05d1020c0ad631e7554bdb443809b90.jpg"
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
                 <v-cart-title class=" d-flex justify-center mb-2">
                    <div style="width: 50px; height: 6px; background-color: orange;"></div>
                </v-cart-title>
                <v-cart-title class="text-h2 d-flex justify-center" style="color:#0d70b7; font-weight:450">
                    CONÓCENOS
                </v-cart-title>
                <v-card-title class=" d-flex justify-center text-h6 " style="color:black; text-align: center;">
                    Contamos con profesionales altamente capacitados
                </v-card-title>
        </v-responsive>

        </v-img>
        <div>
            <v-card elevation="0">
                <v-card-text class="pa-5" >
                    <p >
                        ISAPE es una empresa especializada en brindar soluciones en los sectores
                        de minería, industria y energía. Desde nuestra fundación, hemos
                        desarrollado una sólida experiencia en la provisión de servicios de
                        ingeniería, mantenimiento mecánico y eléctrico, fabricación en metal
                        mecánica, montaje de equipos en plantas concentradoras y construcción de
                        obras civiles.
                    </p> 
                    <p>
                        
                        En ISAPE, nuestra prioridad es ofrecer soluciones eficientes y efectivas a
                        nuestros clientes. Por ello, trabajamos con un equipo de profesionales
                        altamente capacitados y comprometidos con la satisfacción del cliente.
                        Nuestro equipo de ingenieros, técnicos y personal de apoyo cuenta con una
                        amplia experiencia en la industria, lo que nos permite brindar un servicio de
                        alta calidad que cumpla con las expectativas de nuestros clientes.
                    </p>
                    
                </v-card-text>
            </v-card>
        </div>
        <div  class="pr-5" style="padding-top: 80px;">
            <v-row>
                <v-col cols="12" md="6">
                    <v-card elevation="0">
                        <v-card-title style="justify-content: center;" class="text-h3">
                            Misión
                        </v-card-title>
                    </v-card>
             
                </v-col>
                <v-col cols="12" md="6">
                    <v-card elevation="0">
                        <v-card-title style="justify-content: center;" class="text-h3">
                            Visión
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default{
    metaInfo(){
        return{title:'Nosotros'}
    }
}
</script>