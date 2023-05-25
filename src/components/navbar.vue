<template>
    <div>
        <v-app-bar  
        lights-out prominent
        id="home-app-bar" 
        app 
        absolute
        color="transparent"
        elevation="0" elevate-on-escroll height="80" >

            <v-toolbar dense elevation="0" style=" background-color: transparent;  ">
                <v-img  class="ml-1 hidden-sm-and-down" max-width="68" src="/img/logo.svg" />
                <v-spacer></v-spacer>
                <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <div>
                    <v-tabs
                    class="hidden-sm-and-down"     
                    optional
                    color="orange"
                    
                    >
                    <v-tab
                        v-for="(link, i) in links" :key="i"
                        :to="link.link"
                        :ripple="false"  
                        class="font-weight-bold"         
                        text
                        
                    >
                        {{ link.name }}
                    </v-tab>
                    </v-tabs>
                </div>
            </v-toolbar>

        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            style="background-color:rgb(20 22 27 /81%) ;"
            dark
        >
            <v-list-item>
                <v-list-item-avatar>
                <v-img src="/img/logo.svg"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>ISAPE</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                v-for="item in links"
                :key="item.name"
                link
                >

                <v-list-item-content>
                    <v-list-item-title  >
                        <v-btn 
                        :to="item.link" 
                        text 
                        small 
                        style="width: 100%; justify-content: flex-start;"
                        >
                            <v-icon left>{{ item.icon }}</v-icon>
                            {{ item.name }}
                        </v-btn>
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default{
    data(){
        return{
            links:[
                {name:'inicio',link:'/inicio',icon:'mdi-view-dashboard-outline' },
                {name:'nosotros',link:'/nosotros',icon:'mdi-domain'},
                {name:'servicios',link:'/servicios',icon:'mdi-tools'},
                {name:'contacto',link:'/contacto',icon:'mdi-contacts'},
            ],
            drawer:false,
        }
        
    }
}
</script>
<style>
#home-app-bar .v-tabs-slider {
    max-width: 24px;
    margin: 0 auto;
}

#home-app-bar .theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--dark.v-tabs > .v-tabs-bar .v-tab--disabled {
    color: rgb(255 255 255) !important;
}
.theme--light.v-tabs > .v-tabs-bar {
    background-color:transparent
}

</style>