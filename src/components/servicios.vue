<template>
    <div class="contenedor-carousel">
      <v-carousel 
      height="700px"
      show-arrows-on-hover
      v-model="option"
      >
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            >       
            <div style="height: 100%;">
               <v-img
               :src="item.src"
               gradient="to bottom,rgba(15, 15, 15, 0.97), rgb(0 21 52 / 70%)"
               class="white--text" 
               >
               <v-responsive
                class="d-flex align-start mx-2 "
                height="100%"
                max-width="100%"  

                >  
                            <v-card-title class="text-h5 " style="color:orange; ">
                               {{ item.title }}
                            </v-card-title>
                            <v-card-text>
                                <p style="font-size: 1rem; max-width: 750px;" v-for=" (item,i) in item.conceptos" :key="i">
                                   {{ item}}
                                </p><br>
                                <div >
                                    <v-list  dark style="background-color: transparent;">
                                        <v-list-item v-for=" (item,i) in item.list" :key="i" style="min-height: 40px;">
                                            <v-list-item-icon class="my-auto">
                                                <v-icon dark>mdi-check-all</v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content class="white--text my-0 py-0">
                                                <v-list-item-title>{{ item }}</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </div>
                            </v-card-text>
                            <div>
            
                            </div>
                    </v-responsive>
                </v-img>
            </div>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default{
    data(){
        return{
            option:0,
            items: [
                {
                    src: 'https://www.foronuclear.org/wp-content/uploads/2010/06/central-hidroelectrica.jpg',
                    title:'Mantenimiento de centrales hidroeléctricas',
                    conceptos:["En ISAPE, nos enorgullece ofrecer servicios\
                                especializados de mantenimiento de centrales\
                                hidroeléctricas. Como parte de nuestros servicios,\
                                realizamos monitoreos constantes y llevamos controles\
                                de cada grupo hidroeléctrico y sistema común de la\
                                central, asegurando el correcto funcionamiento de la\
                                central hidroeléctrica"],
                    list:[
                        "Montaje y mantenimiento de trasformadores en alta, media y baja tensión.",
                        "Mantenimiento de tableros de distribución.",
                        "Instalación de bandejas eléctricas, cumpliendo estándares establecidas.",
                        "Elaboración y mantenimiento de pozas tierras.",
                        "Medición de espesor de tuberías de conductos hidráulicos.",
                        "Instalación y mantenimiento de bancos de condensado.",
                        "Mantenimiento de puentes grúas, etc.",
                    ]
                },
                {
                    src: 'https://www.villafloresmartin.com/es/wp-content/uploads/2019/08/mantenimiento-general-de-instalaciones-electricas-1280x720.jpg',
                    title:'Mantenimiento eléctrico e instrumentación',
                    conceptos:[`En ISAPE, brindamos servicios de mantenimiento eléctrico
                            e instrumentación. Nuestro equipo altamente capacitado
                            ofrece soluciones en instalación, reparación,
                            mantenimiento y montaje de equipos eléctricos e
                            instrumentación.`],
                    list:[
                        "Sub estaciones de alta, media y baja tensión.",
                        "Motores eléctricos.",
                        "Controladores de nivel, temperatura y presión",
                        "Bombas dosificadoras.",
                        "Válvulas neumáticas.",
                        "Tableros de control con PLV.",
                        "Variadores de velocidad, etc.",
                    ]
                },
                {
                    src: 'https://i0.wp.com/www.revistaseguridadminera.com/wp-content/uploads/2018/07/Como-trabajar-en-instalaciones-electricas-segun-la-normativa-de-seguridad-minera.jpg',
                    title:'Mantenimiento eléctrico en mina subterranea',
                    conceptos:[`En nuestra empresa brindamos servicios de instalación y
                            mantenimiento del sistema eléctrico en minas
                            subterráneas. Nos aseguramos de cumplir con todas las
                            normas establecidas para garantizar un trabajo seguro y
                            eficiente.`,
                            `Nuestro compromiso es garantizar la eficiencia y
                            confiabilidad de los sistemas eléctricos en minas
                            subterráneas, asegurando la seguridad de nuestros
                            clientes y trabajadores.`],
                    list:[
                        "Montaje y mantenimiento de sub estaciones eléctricas en media y baja tensión",
                        "Iluminación de rampas y galerías principales.",
                        "Mantenimiento e instalación de cámaras de bombeo",
                        "Instalación y mantenimiento de ventiladores y tableros de control .",
                        "Tendido de conductor eléctrico de media y baja tensión por galerías y chimeneas.",
                    ]
                },
                {
                    src: 'https://hips.hearstapps.com/vidthumb/images/gettyimages-1210224755.jpg',
                    title:'Mantenimiento general de estación de abastecimiento de combustible',
                    conceptos:[`Nuestro objetivo es garantizar el correcto funcionamiento
                                de la estación de abastecimiento de combustible,
                                cumpliendo con las normas y regulaciones establecidas, y
                                asegurando la seguridad del personal y el medio
                                ambiente.`],
                    list:[
                        "Mantenimiento y cambio de filtros de combustible",
                        "Mantenimiento y revisión de sistemas de bombeo y tuberías de trasiego de combustible.",
                        "Revisión y mantenimiento de sistemas eléctricos y de iluminación.",
                        "Mantenimiento y calibración de dispensadores de combustible y sistemas de medición.",
                        "Capacitación y entrenamiento del personal en temas de seguridad y manejo de emergencias.",
                    ]
                },
                {
                    src: 'https://i0.wp.com/grupocasalima.com/wp-content/uploads/2022/04/obras-de-construccion-corporacion-.webp',
                    title:'Obras civiles',
                    conceptos:[`En nuestra empresa brindamos servicios de Obras Civiles
                                con el objetivo de brindar soluciones integrales en
                                construcción, rehabilitación y mantenimiento de vías, así
                                como la construcción de estructuras para diversos fines.`
                                ,
                                `En cada uno de nuestros servicios, nos enfocamos en la
                                calidad, la seguridad y la eficiencia en la ejecución de los
                                proyectos, garantizando así la satisfacción de nuestros
                                clientes`
                                ],
                    list:[
                        "Construcción, rehabilitación y mantenimiento de vías en general.",
                        "Movimiento de tierra.",
                        "Construcción y mantenimiento de campamentos, viviendas, vestidores y servicios de primera necesidad.",
                        "Construcción de pozas de lixiviación, losas de concreto, muros de contención, canales, cunetas, alcantarillas, etc."
                    ]
                },
                {
                    src: 'https://www.elfinanciero.com.mx/resizer/7mds3HFuWXxO9fZ2LLHr-X4SVKY=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/LUB3OSLR5JFJDI54ZPO6EX2S54.jpeg',
                    title:'Mantenimiento mecánico',
                    conceptos:[`En ISAPE ofrecemos servicios de mantenimiento
                                mecánico para plantas concentradoras con planes de
                                aseguramiento metrológico, que incluyen mantenimiento
                                correctivo, predictivo, preventivo y selectivo. Contamos
                                con un equipo altamente capacitado para garantizar la
                                eficiencia de los equipos y la satisfacción del cliente.
                                Algunos de los equipos que atendemos son:`
                                ],
                    list:[
                        "Chancadoras",
                        "Zarandas",
                        "Fajas transportadoras.",
                        "Molinos ",
                        "Bombas",
                        "Celdas de flotación",
                        "Espesadores",
                        "Filtros, etc",
                    ]
                },
                {
                    src: 'https://www.drej.cl/wp-content/uploads/2023/02/54.jpg',
                    title:'Alineamiento de equipos',
                    conceptos:[`En nuestra empresa brindamos un servicio especializado
                                en el alineamiento de equipos y maquinarias, enfocado en
                                el cambio y mantenimiento de componentes críticos de
                                las plantas concentradoras. Nos encargamos de la
                                instalación, reemplazo y ajuste de elementos como
                                catalinas, ejes piñón, rodamientos, acoples, reductores y
                                poleas, garantizando un correcto funcionamiento y
                                minimizando los tiempos de parada. `
                                ],
                    list:[
                        "Alineamiento de ejes.",
                        "Alineamiento de acoples.",
                        "Alineamiento de poleas.",
                        "Alineamiento de catalinas.",
                        "Análisis vibracional.",
                        "Termografía.",
                        "Balanceo dinámico.",

                    ]
                },
                {
                    src: 'https://www.bardahlindustria.com/wp-content/uploads/2019/11/industria-metalmecanica-mexico-blog-bardahl-industria.jpg',
                    title:'Trabajos de Metal-Mecánica',
                    conceptos:[`En ISAPE ofrecemos servicios especializados en trabajos
                                de metal-mecánica para satisfacer las necesidades de
                                nuestros clientes. Nos aseguramos de cumplir con los
                                estándares de calidad, seguridad y medio ambiente, así
                                como los requisitos específicos de cada proyecto.
                                Algunos de los trabajos que realizamos son:`
                                ],
                    list:[
                        "Fabricación de estructuras metálicas en general.",
                        "Fabricación de tolvas.",
                        "Fabricación de chutes.",
                        "Fabricación de cajones, etc.",
                    ]
                },
                {
                    src: 'https://www.wuthco.cl/images/proyectos/9678384/img4192.jpg',
                    title:'Montaje de equipos de plantas concentradoras',
                    conceptos:[`En nuestra empresa brindamos servicio de montaje de
                                equipos de plantas concentradoras, donde nos
                                encargamos de la planificación, diseño y ejecución de
                                proyectos para la construcción y puesta en marcha de
                                plantas concentradoras. Nos aseguramos de cumplir con
                                las normas y estándares de calidad, seguridad y medio
                                ambiente, logrando una optimización y satisfacción del
                                cliente.`
                                ],
                    list:[
                        "Naves Industriales.",
                        "Chancadoras.",
                        "Zarandas.",
                        "Fajas transportadoras.",
                        "Molinos.",
                        "Bombas.",
                        "Celdas de flotación",
                        "Espesadores.",
                        "Filtros, etc.",
                    ]
                },
               
            ],
        }
    }
}
</script>

<style>
.contenedor-carousel .v-image{
    height: 100% !important;
}
.contenedor-carousel .v-carousel__controls .v-item-group {
    display: flex;
    overflow-y: hidden;
    overflow-x: auto;
}
.contenedor-carousel .v-list-item__title{
    white-space: normal;
    margin-top: 10px;
}

@media (max-width: 570px) {
    .contenedor-carousel .v-window,.v-window__container{
        height: 780px !important;
    }

}
</style>