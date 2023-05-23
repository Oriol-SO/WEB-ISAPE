<template>
    <div class="valores">
        <div class="row1-container">
            <div class="box box-down cyan ">
                <h2>Seguridad</h2>
                <p>La seguridad es una prioridad absoluta en
                    todas las operaciones de ISAPE.
                    Trabajamos para asegurarnos de que
                    todas nuestras soluciones sean seguras y
                    confiables para nuestros clientes.
                    </p>
                <v-img
                src="/img/seguridad.png"
                contain
                :aspect-ratio="15/5"
                >
                </v-img>
            </div>

            <div class="box red">
                <h2>Trabajo en equipo</h2>
                <p>Valoramos y fomentamos el trabajo en
                equipo en todas nuestras operaciones.
                Creemos que el trabajo en equipo nos
                permite ofrecer soluciones más efectivas
                y eficientes a nuestros clientes.
                </p>
                <v-img
                src="/img/equipo.png"
                contain
                :aspect-ratio="15/5"
                >
                </v-img>
            </div>

            <div class="box box-down blue">
                <h2>Integridad</h2>
                <p>
                    En ISAPE nos guiamos por los más altos
                    estándares éticos y de integridad en
                    todas nuestras operaciones. Nos
                    aseguramos de actuar de manera
                    responsable y honesta en todo momento.
                </p>
                <v-img
                src="/img/integridad.png"
                contain
                :aspect-ratio="15/7"
                >
                </v-img>
            </div>
        </div>
        <div class="row2-container">
            <div class="box orange">
                <h2>Calidad</h2>
                <p>
                    En ISAPE estamos comprometidos con la
                    excelencia y la calidad en todo lo que
                    hacemos. Nos esforzamos por brindar
                    soluciones de alta calidad que satisfagan
                    las necesidades de nuestros clientes.
                </p>
                <v-img
                src="/img/calidad.png"
                contain
                :aspect-ratio="15/5"
                >
                </v-img>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'valores',
}
</script>

<style>
:root {
    --red: hsl(0, 78%, 62%);
    --cyan: hsl(180, 62%, 55%);
    --orange: hsl(34, 97%, 64%);
    --blue: hsl(212, 86%, 64%);
    --varyDarkBlue: hsl(234, 12%, 34%);
    --grayishBlue: hsl(229, 6%, 66%);
    --veryLightGray: hsl(0, 0%, 100%);
    --weight1: 200;
    --weight2: 400;
    --weight3: 600;
}

.valores {
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    background-color: var(--veryLightGray);
    display: flex;
    flex-direction: column;
    align-items: center;
}


.valores .box p {
    color: var(--grayishBlue);
}

.valores .box {
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px var(--grayishBlue);
    padding: 30px;
    margin: 20px;  
    background-color: #fff !important;
    flex-direction: column;
    min-width: 250px;
    max-width: 380px;
}



@media (max-width: 950px) and (min-width: 450px) {
    .box {
        text-align: center;
    }
}

.valores .cyan {
    border-top: 3px solid var(--cyan);
}
.valores .red {
    border-top: 3px solid var(--red);
    background-color: #fff !important;
}
.valores .blue {
    border-top: 3px solid var(--blue);
}
.valores .orange {
    border-top: 3px solid var(--orange);
}

.valores h2 {
    color: var(--varyDarkBlue);
    font-weight: var(--weight3);
}


@media (min-width: 950px) {
    .row1-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    
    .row2-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .box-down {
        position: relative;
        top: 150px;
    }
    
}

.v-application .box{
    background-color: #fff !important;
}
.valores .v-image__image{
    background-position: center right !important;
}
</style>