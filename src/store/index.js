import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
    state:{
        Home:true,
        About:true,
    },
    mutations:{
        disableloader(state,type){
            setTimeout(() => {
                state[type] = false;
              }, 3000);
        }
    },
    actions:{
        cambiarValor({commit},page){
            commit(page,false)
        }   
    },
    getters:{
        Home:state=>state.Home,
        About:state=>state.About,
    }
})

export default store;