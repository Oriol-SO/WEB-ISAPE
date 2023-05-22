<template>
 <v-card class="mt-5" style="background-color: transparent;" elevation="0" >
        <v-card-text  >
            <div class="texto" >
                <span class="t-r">Realizamos:</span><br><br>
                <span class="tamaño-t">{{ textoVisible }}</span>
                <span v-if="mostrarCursor" class="cursor tamaño-t">|</span>
            </div>
        </v-card-text>
    </v-card>
</template>
<script>
export default{
    name:'tipado',
    data(){
        return{
            palabras: ["Montaje de equipos", "Trabajos de Metal-Mecánica", "Alineamiento de equipos","Obras civiles"],
            palabraActual: "",
            textoVisible: "",
            mostrarCursor: true,
            indicePalabra: 0,
        }
    },mounted(){
        this.animarPalabras()
    },    
    methods:{
        animarPalabras() {
            if (this.indicePalabra >= this.palabras.length) {
                // Si hemos llegado al final del array, reiniciamos el índice
                this.indicePalabra = 0;
            }
            
            // Configuramos la palabra actual y restablecemos el texto visible
            this.palabraActual = this.palabras[this.indicePalabra];
            this.textoVisible = "";
            
            let index = 0;
            const interval = setInterval(() => {
                this.textoVisible += this.palabraActual.charAt(index);
                index++;
                if (index >= this.palabraActual.length) {
                clearInterval(interval);
                setTimeout(() => {
                    this.borrarPalabra();
                }, 1500); // Tiempo en milisegundos antes de borrar
                }
            }, 100); // Tiempo en milisegundos entre cada caracter
        },
        borrarPalabra() {
            const interval = setInterval(() => {
                this.textoVisible = this.textoVisible.slice(0, -1);
                if (this.textoVisible.length === 0) {
                clearInterval(interval);
                this.mostrarCursor = true;
                setTimeout(() => {
                    this.indicePalabra++;
                    this.animarPalabras();
                }, 1000); // Tiempo en milisegundos antes de pasar a la siguiente palabra
                }
            }, 50); // Tiempo en milisegundos entre cada borrado
        },
    }
}
</script>