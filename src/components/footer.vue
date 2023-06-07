<template>
    <footer class="footer-distributed">

        <div class="footer-left">

            <div class="d-flex">
                <v-img
                src="/img/logo.svg"
                contain
                max-width="80"
                ></v-img>
                <v-img
                src="/img/eslogan2.png"
                max-width="200"
                contain
                ></v-img>         
            </div>

            <p class="footer-links">
                <v-btn text small dark to="/inicio" class="py-2" >Inicio</v-btn>
                <v-btn text small dark to="/nosotros" class="py-2">Nosotros</v-btn>
                <v-btn text small dark to="/servicios" class="py-2">Servicios</v-btn>
                <v-btn text small dark to="/contacto" class="py-2">Contacto</v-btn>                
            </p>

            <p class="footer-company-name">Todos los derechos reservados isape-sac.com ©  {{ new Date().getFullYear() }} </p>
        </div>

        <div class="footer-center">

            <div>
                <v-icon>mdi-map-marker</v-icon>
                <p><span>444 S. Ovalo</span> Vitarte Santanita, Lima</p>
            </div>

            <div>
                <v-icon>mdi-phone</v-icon>
                <p>+51 963 903 492 <br>+51 995 484 268<br> +51 941 706 977 </p>

            </div>

            <div>
                <v-icon>mdi-email</v-icon>
                <p><a href="mailto:gerencia@isapesac.com">Escribenos</a></p>
            </div>

        </div>

        <div class="footer-right">

            <p class="footer-company-about">
                <span>Sobre nuestra empresa</span>
                Somos una empresa que se dedica al mantenimiento preventivo y montaje de equipos para plantas industriales

            </p>

            <div class="footer-icons">

                <a href="https://www.facebook.com/" target="_blank"><v-icon dark>mdi-facebook</v-icon></a>
                <a href="https://www.instagram.com/" target="_blank"><v-icon dark>mdi-instagram</v-icon></a>
                <a href="https://wa.me/+51995484268" target="_blank"><v-icon dark>mdi-whatsapp</v-icon></a>
                <a href="https://www.linkedin.com/" target="_blank"><v-icon dark >mdi-linkedin</v-icon></a>

            </div>

        </div>

    </footer>
</template>
<script>
export default{
    name:'pie',

}
</script>
<style>

    


.footer-distributed{
	background: #14161b;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 55px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left{
	width: 40%;
}



.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
}

.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
  font-weight:400;
	text-decoration: none;
	color:  inherit;
}

.footer-distributed .footer-company-name{
	color:  #8b8b8b;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center{
	width: 35%;
}

.footer-distributed .footer-center i{
	background-color:  #33383b;
	color: #ffffff;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}

.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
  font-weight:400;
	vertical-align: middle;
	margin:0;
}

.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}

.footer-distributed .footer-center p a{
	color:  lightseagreen;
	text-decoration: none;;
}

.footer-distributed .footer-links a:before {
  content: "|";
  font-weight:300;
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

/* Footer Right */

.footer-distributed .footer-right{
	width: 20%;
}

.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}

.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 20px;
}

.footer-distributed .footer-icons{
	margin-top: 25px;
}

.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  #33383b;
	border-radius: 2px;

	font-size: 20px;
	color: #ffffff;
	text-align: center;
	line-height: 35px;

	margin-right: 3px;
	margin-bottom: 5px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {

	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}

	.footer-distributed .footer-center i{
		margin-left: 0;
	}

}
</style>