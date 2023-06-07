<template>
    <div>
        <div :class="$store.state.About?'animacion-about':''">

            <v-responsive
              class="d-flex align-center mx-auto "
              height="100%"
              max-width="100%"      
              style="margin-top: 55px;"
            >   
                    <v-card-title class=" d-flex justify-center mb-2">
                        <div style="width: 50px; height: 6px; background-color: orange;"></div>
                    </v-card-title>
                    <v-card-title class="text-h3 d-flex justify-center" style="color:#0d70b7; font-weight:450">
                        CONTACTANOS
                    </v-card-title>
                    <v-container  >
                        <div class="d-flex justify-space-around " style="flex-wrap: wrap; ">
                            <div class="d-flex align-center pa-3" style="flex-direction: column;">
                                <v-avatar color="black" size="50">
                                    <v-icon dark>
                                        mdi-map-marker
                                    </v-icon>
                                </v-avatar>
                                <div class="d-flex align-center" style="flex-direction: column;">
                                    <strong>Direccion</strong> 
                                    <span style="color:#0d70b7;">MZ B1 Asoc. Risso </span>
                                    <span style="color:#0d70b7;"> Vitarte, Lima</span>                          
                                </div>
                            </div>    
                            <div class="d-flex align-center pa-3" style="flex-direction: column;">
                                <v-avatar color="black" size="50">
                                    <v-icon dark>
                                        mdi-phone
                                    </v-icon>
                                </v-avatar>
                                <div class="d-flex align-center" style="flex-direction: column;">
                                    <strong>Telefonos</strong> 
                                    <span style="color:#0d70b7"> +51 995 484 268</span>
                                    <span style="color:#0d70b7;">+51 963 903 492</span>    
                                    <span style="color:#0d70b7;">+51 941 706 977</span>     
                                </div>
                            </div>  
                            <div class="d-flex align-center pa-3" style="flex-direction: column;">
                                <v-avatar color="black" size="50">
                                    <v-icon dark>
                                        mdi-email
                                    </v-icon>
                                </v-avatar>
                                <div class="d-flex align-center" style="flex-direction: column;">
                                    <strong>Correo</strong> 
                                    <a href="mailto:gerencia@isapesac.com" style="color:#0d70b7; text-decoration: none;">gerencia@isapesac.com</a>                      
                                </div>
                            </div>  
                        </div>
                    </v-container>
            </v-responsive>
           <v-container>
                <v-row>
                    <v-col cols="12" md="5">
                        <v-card>
                            <v-card-title>
                                Envíanos un mensaje
                            </v-card-title>
                            <v-card-text>
                                <form @submit.prevent="submit">
                                    <v-row class="py-0 my-0">
                                        <v-col
                                            cols="12"
                                            class="py-0"
                                        >
                                            <v-text-field
                                            label="Nombre y Apellidos"
                                            required
                                            outlined
                                            dense
                                            v-model="form.nombre"
                                            ></v-text-field>
                                     
                                            <v-text-field
                                            label="correo"
                                            dense
                                            required
                                            type="email"
                                            outlined
                                            v-model="form.correo"
                                            ></v-text-field>
                                  
                                            <v-text-field
                                            label="asunto"
                                            outlined
                                            dense
                                            required
                                            v-model="form.subject"
                                            ></v-text-field>
                                            <v-textarea
                                            label="Mensaje"
                                            auto-grow
                                            required
                                            dense
                                            outlined
                                            v-model="form.mensaje"
                                            >
                                            </v-textarea>
                                        </v-col>
                                    </v-row>
                                    <v-alert 
                                        :type="type"
                                        :color="color"
                                        dense 
                                        dismissible
                                        class="mx-auto my-0 py-o"
                                        v-if="mensaje"
                                        >
                                            {{ mensaje }}
                                            {{ verificaralert }}
                                    </v-alert>
                                    <v-card-actions>
                                        <v-btn
                                        color="warning"
                                        class="text-capitalize"
                                        type="submit"
                                        :loadin="loader"
                                        :disabled="loader"
                                        >Enviar mensaje
                                        </v-btn>
                                  
                                    </v-card-actions>
                                </form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="7" class="d-flex justify-center align-center">
                        <div style="width: 90%; height: 500px;">
                            <mapa />
                        </div>
                       
                    </v-col>
                </v-row>
           </v-container>
           <div class="mt-16">

           </div>
        </div>
    </div>
</template>

<script>
import mapa from '../../components/mapa.vue'
export default{
    components:{
        mapa,
    },
    data(){
        return{
            form:{
                nombre:'',
                correo:'',
                subject:'',
                mensaje:'',
            },
            loader:false,
            mensaje:'',
            type:'',
            color:'',
        }
    },
    methods:{
        async submit(){
            try{
                this.loader=true;
                this.type='success'
                this.color='green accent-3'
                this.mensaje='';
                const response = await fetch('https://formspree.io/f/xpzeelqj', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                });
                if (response.ok) {
                    this.mensaje = 'Mensaje enviado';
                    this.loader=false;
                    this.form.correo = '';
                    this.form.subject = '';
                    this.form.mensaje = '';
                } else {
                    throw new Error('Error en el envío del formulario');
                }
            }catch(error){
                this.mensaje = 'Error al enviar el mensaje';
                this.type='error'
                this.color='red'
                this.loader=false;
            }
        },

        desctivaralert(){
            setTimeout(() => {
                this.mensaje ='';
            },3000);
        }
    },
    computed:{
        verificaralert(){
            if(this.mensaje && !this.loader){
               this.desctivaralert()
            }
            return '.';
        }
    }
}
</script>

<style>

</style>