<template>
    <div>
        <div :class="carga?'cont_principal animacion':'cont_principal'">
            <div class="contenido">
                <welcome/>
            </div>
            <div class="cont_aura_1"></div>
            <div class="cont_aura_2"></div>
        </div>
    </div>
</template>
<script>
import welcome from './welcome.vue'
export default{
    components:{
        welcome,
    },
    data(){
      return{
        carga:false,
      }
    },
    mounted(){
        setTimeout(() => {
            this.carga=true;
        },100);
    }
}
</script>
<style>

.cont_principal {
    position: relative;  
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
.contenido {
  position: absolute;
  width: 100%;
}

.cont_aura_1 {
    position:absolute;
    width:300px;
    height: 120%;
    top:25px;
    right: -340px;
    background-color: #ed9e35;
    box-shadow: 0px 0px  60px  20px  rgba(255, 176, 30, 0.218);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}

.cont_aura_2 {
    position:absolute;
    width:100%;
    height: 300px;
    right:-10%;
    bottom:-301px;
    background-color: #0d70b7;
    box-shadow: 0px 0px 60px 10px rgba(1, 84, 201, 0.5),0px 0px  20px  0px  rgba(14, 97, 230, 0.273);
    z-index:5;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}


.animacion > .cont_aura_2 {
    animation-name: animar2;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform: rotate(-20deg);    
}
.animacion > .cont_aura_1 {
    transform: rotate(20deg);
    right:-170px;
    animation-name: animar;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@-webkit-keyframes animar {
  from {
    -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  }
  to {  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  }
}
@-o-keyframes animar {
  from {
    -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  }
  to {  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  }

}
@-moz-keyframes animar {
  from {
    -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  }
  to {  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  }

}
@keyframes animar {
  from {
    -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  }
  to {  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  }
}


@-webkit-keyframes animar2 {
  from { -webkit-transform: rotate(-15deg); 
  transform: rotate(-15deg);
  }
  to { -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  }
}
@-o-keyframes animar2 {
  from { -webkit-transform: rotate(-15deg); 
  transform: rotate(-15deg);
  }
  to { -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  }
}

@-moz-keyframes animar2 {
  from { -webkit-transform: rotate(-15deg); 
  transform: rotate(-15deg);
  }
  to { -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  }
}
@keyframes animar2 {
  from { -webkit-transform: rotate(-15deg); 
  transform: rotate(-15deg);
  }
  to { -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  }
}


@media (max-width: 960px) {
    .cont_aura_1{
      top: 400px !important;
    }
}

</style>