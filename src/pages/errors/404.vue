<template>
    <div :class="carga?'cont_principal_error cont_error_active':'cont_principal_error'" >
        <div class="cont_error">
        
        <h1>404</h1>  
        <p>La página que estás buscando no está aquí</p>
        <v-btn to="/inicio" x-large>Inicio</v-btn>
        </div>
        <div class="arua_err_1"></div>
        <div class="arua_err_2"></div>
    </div>
</template>
<script>

export default{
    data(){
        return{
            carga:false,
        }
    },
    mounted(){
        setTimeout(() => {
            this.carga=true;
        }, 100);
    },
}
</script>
<style>

.cont_principal_error {
    position: relative;  
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align:center;
}
.cont_error {
    position: absolute;
    width: 100%;
    height: 300px;
    top: 50%;
    margin-top:-150px;
    z-index: 2;
}

.cont_error > h1  {
    font-family: 'Lato', sans-serif;  
    font-weight: 400;
    font-size:150px;
    color:#000000;
    position: relative;
    left:-100%;
    transition: all 0.5s;
}


.cont_error > p  {
    font-family: 'Lato', sans-serif;  
    font-weight: 300;
    font-size:24px;
    letter-spacing: 5px;
    color:#9294AE;
    position: relative;
    left:100%;
    transition: all 0.5s;
        transition-delay: 0.5s;
    -webkit-transition: all 0.5s;
    -webkit-transition-delay: 0.5s;
}

.arua_err_1 {
    position:absolute;
    width:300px;
    height: 120%;
    top:25px;
    right: -340px;
    background-color: #0d70b7;
    box-shadow: 0px 0px 60px 10px rgba(1, 84, 201, 0.5),0px 0px  20px  0px  rgba(14, 97, 230, 0.273);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}

.arua_err_2 {
    position:absolute;
    width:100%;
    height: 300px;
    right:-10%;
    bottom:-301px;
    background-color: #ed9e35;
    box-shadow: 0px 0px  60px  20px  rgba(255, 176, 30, 0.218);

    z-index:5;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}

.cont_error_active > .cont_error > h1 {
  left:0%;
}
.cont_error_active > .cont_error > p {
  left:0%;
}

.cont_error_active > .arua_err_2 {
    animation-name: animation_error_2;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform: rotate(-20deg);    
}
.cont_error_active > .arua_err_1 {
    transform: rotate(20deg);
    right:-170px;
    animation-name: animation_error_1;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@-webkit-keyframes animation_error_1 {
  from {
    -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  }
  to {  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  }
}
@-o-keyframes animation_error_1 {
  from {
    -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  }
  to {  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  }

}
@-moz-keyframes animation_error_1 {
  from {
    -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  }
  to {  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  }

}
@keyframes animation_error_1 {
  from {
    -webkit-transform: rotate(20deg);
  transform: rotate(20deg);
  }
  to {  -webkit-transform: rotate(25deg);
  transform: rotate(25deg);
  }
}




@-webkit-keyframes animation_error_2 {
  from { -webkit-transform: rotate(-15deg); 
  transform: rotate(-15deg);
  }
  to { -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  }
}
@-o-keyframes animation_error_2 {
  from { -webkit-transform: rotate(-15deg); 
  transform: rotate(-15deg);
  }
  to { -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  }
}

@-moz-keyframes animation_error_2 {
  from { -webkit-transform: rotate(-15deg); 
  transform: rotate(-15deg);
  }
  to { -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  }
}
@keyframes animation_error_2 {
  from { -webkit-transform: rotate(-15deg); 
  transform: rotate(-15deg);
  }
  to { -webkit-transform: rotate(-20deg);
  transform: rotate(-20deg);
  }
}

@media (max-width: 960px) {
    .arua_err_1{
      top: 350px !important;
    }
}

</style>