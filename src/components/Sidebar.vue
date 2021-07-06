<template>

   <div class="sidebar">
   
    <div class="info-user">
    
        <div class="user-logo">
            <img src="https://scontent.flad2-1.fna.fbcdn.net/v/t1.15752-0/p206x206/210180978_1413664698992637_8482590118175864012_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeF-qoIlea8mktQNtBpnImpfu-Y0pXO3rJa75jSlc7esluNvSobPgdrujbFGK3I6SfDUGtOEwSczd2vSy5HawKVv&_nc_ohc=epQYvBPc940AX_NTBLA&_nc_ht=scontent.flad2-1.fna&tp=6&oh=1b562e3749be42c14e0145fffb84f7a8&oe=60E9A699" />
        </div>

        <router-link to="/">Dream Tech</router-link>
        <router-link to="/">NIF: 999999999</router-link>
        <router-link to="/">Licença: DT3000</router-link>

        <ul class="list-siedebar">

            <li>
                <router-link to="/">
                    <view-dashboard></view-dashboard> <span>Painel</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-prestashop"></i> <span>Produtos</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="icofont-ui-user-group"></i> <span>Utilizadores</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-computer"></i> <span>POS</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-folder"></i> <span>Documentos</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-user-male"></i> <span>Clientes</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-basket"></i> <span>Encomendas</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-database"></i> <span>Dados</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-list"></i> <span>Realatórios</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-file-fill"></i> <span>SAFT</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-money"></i> <span>Contablidade</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-ui-settings"></i> <span>Definições</span>
                </router-link>
            </li>

            <li>
                <router-link to="/">
                    <i class="icofont-ui-v-card"></i> <span>Sobre</span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <i class="icofont-ui-close"></i> <span>Sair</span>
                </router-link>
            </li>
            
           

        </ul>

    </div>

   </div>


</template>

<script>

import "../assets/css/sidebar.css"

 import { ViewDashboard} from 'mdue';
export default {

    components: {
      ViewDashboard,

    },

}

</script>