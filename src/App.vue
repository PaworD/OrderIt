<template>
  <div>
    <v-card
      tile
      color="primary"
      >
      <v-toolbar color="blue-grey darken-3"  fixed >
        <v-toolbar-title color="#ffffff">
          <router-link  to="/" class="link">Istiqlol Grant</router-link>
        </v-toolbar-title>

      <v-spacer></v-spacer>

        <span class="white--text" style="font-size: 20px;">
            {{date}}
        </span>

      <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon color="#EFEBE9">history</v-icon>
        </v-btn>

        <v-menu
        transition="slide-y-transition"
        bottom>
             <template v-slot:activator="{ on }">
               <v-btn
                 dark
                 icon
                 v-on="on"
               >
                 <v-icon>more_vert</v-icon>
               </v-btn>
             </template>

             <v-list flat>
               <v-list-tile
                 v-for="(item, i) in options"
                 :key="i"
                 @click=""
                  :to="item.href"
               >
                <v-list-tile-title> <v-icon left>{{item.icon}}</v-icon> {{item.title}}</v-list-tile-title>
               </v-list-tile>
             </v-list>
           </v-menu>
      </v-toolbar>
    </v-card>

      <v-layout row style="margin-top: 4%">
      <v-flex>
        <v-navigation-drawer  fixed height="90vh" class="blue-grey darken-3" style="margin-top: 10vh">
          <v-list>
            <v-btn block flat class="white--text" large to="/desserts"> Десерты</v-btn>
            <v-btn block flat class="white--text" large to="/fastfood"> Еда</v-btn>
            <v-btn block flat class="white--text" large to="/drinks"> Напитки</v-btn>
          </v-list>
        </v-navigation-drawer>
      </v-flex>
      <v-container>
      <v-flex style="margin-left: 11%;">
      <router-view>



      </router-view>
      </v-flex>

    </v-container>
    </v-layout>




      </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      items: [
        { title: 'Десерты', icon: 'cake', action : '/desserts' },
        { title: 'Еда', icon: 'fastfood', action : '/food' },
        { title: 'Напитки', icon: 'local_cafe', action : '/drinks' }
      ],
      options: [
        { title: 'Витрина', icon: 'inbox', href: '/dessertsView' },
        { title: 'Статистика', icon: 'dashboard', href: '/staticsView' },
        { title: 'Пожаловаться', icon: 'headset_mic', href: '/complainView' },
        { title: 'Настройки', icon: 'build', href: '/settingsView' }
      ],
      right: null,
      date: new Date().getHours() + ":" + new Date().getMinutes(),
      snackbar: false
    }
  }
}
</script>

<style scoped>
  .link{
    text-decoration: none;
    color: #fafafa;
  }
</style>
