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
                                    <v-row>
                                        <v-col
                                            cols="12"
                                        >
                                            <v-text-field
                                            label="Nombre y Apellidos"
                                            required
                                            outlined
                                            ></v-text-field>
                                     
                                            <v-text-field
                                            label="correo"
                                            required
                                            outlined
                                            ></v-text-field>
                                  
                                            <v-text-field
                                            label="asunto"
                                            outlined
                                            required
                                            ></v-text-field>
                                            <v-textarea
                                            label="Mensaje"
                                            auto-grow
                                            required
                                            >
                                            </v-textarea>
                                        </v-col>
                                    </v-row>
                                    <v-card-actions>
                                        <v-btn
                                        type="submit"
                                        >Enviar</v-btn>
                                    </v-card-actions>
                                </form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="7">

                    </v-col>
                </v-row>
           </v-container>
     
        </div>
    </div>
</template>

<script>
export default{
    data(){
            return{
                nombre:'',
                correo:'',
                asunto:'',
                mensaje:'',
    
            }
    },
    methods:{
        submit(){
            const formData = new FormData();
            formData.append('nombre', this.nombre);
            formData.append('correo', this.correo);
            formData.append('asunto', this.asunto);
            formData.append('mensaje',this.mensaje);

            console.log(formData)
        }
    }
}
</script>

<style>

</style>