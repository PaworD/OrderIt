<template>
<div>
<v-layout row wrap justify-space-around>
          <v-flex xs12 sm12 md3   v-for="item of cakes" v-bind:key="item['.key']" ma-1  >
            <v-card>
        <v-img
          :src="images.first"
          aspect-ratio="2.50"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ item.name }}</h3>
            <div> {{ item.description }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Изменить</v-btn>
          <v-layout justify-end>
          <span class="orange--text"> {{ item.price }} сум</span>
          </v-layout>
        </v-card-actions>
      </v-card>

          </v-flex>

        </v-layout>


    <v-dialog
      v-model="dialog"
      width="500"
    >
    <template v-slot:activator="{ on }">
      <v-btn   right   fab small color="blue-grey darken-4" v-on="on">
            <v-icon color="white">add</v-icon>
      </v-btn>
    </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          
        </v-card-title>

        <v-card-text>
          <v-layout row justify-space-around>

              <v-flex xs12 sm6 md6 ma-1>
              <v-text-field
                label="Название"
                prepend-inner-icon="title"
                solo
                name="cakeName"
                  v-model="cakeName"

                ma-1
              ></v-text-field>

              </v-flex>
              <v-flex xs12 sm6 md6  ma-1>
              <v-text-field
                label="Цена"
                solo
                name="cakePrice"
                v-model="cakePrice"
                prepend-inner-icon="monetization_on"
              ></v-text-field>

              </v-flex>

              </v-layout>
              <v-layout row wrap>
              <v-flex xs3 sm6 md12>
                <v-textarea
                solo
                v-model="cakeDesc"
                name="cakeDesc"
                label="Description"
                placeholder="Описание"
          ></v-textarea>
        </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-text-field
              type="file"
              name="cakeImg"
                  v-model="cakeImg"
            ></v-text-field>
          </v-layout>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="addCake()"
          >
            Добавить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</div>

</template>



<script>
import { cakesRef } from '../firebase'

  export default {
    data () {
      return {
        images : {
          first: require('../assets/images/1.jpg')
        },
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
        dialog : false
      }
    },

    firebase :{
      cakes : cakesRef
    },

    methods : {
      addCake(){
        cakesRef.push({name: this.cakeName, price: this.cakePrice, description: this.cakeDesc});
        this.dialog = false;
      }
    }
  }
</script>

<style lang="css">

</style>
