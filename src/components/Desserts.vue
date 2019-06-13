<template>
  <div>
    <!-- <v-layout row pa-2 ma-2>
      <v-flex >
        <v-text-field
          name="name"
          v-model="name"
          label="label"
          placeholder="Client"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex >
        <v-text-field
          name="product"
          v-model="product"
          label="label"
          placeholder="Stuff"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex >
        <v-text-field
          name="phone"
          v-model="phone"
          label="label"
          placeholder="Phone"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex >
        <v-text-field
          name="name"
          v-model="adress"
          label="label"
          placeholder="Adress"
          single-line
        ></v-text-field>
      </v-flex>
      <v-flex >
<v-btn primary @click="submitName()">Add</v-btn>
      </v-flex>
    </v-layout> -->

    <v-layout row >
              <v-flex>
                <v-card pa-3 color="blue-grey darken-3"  v-for="person of names" v-bind:key="person['.key']" class="white--text card">
                  <v-card-title>
                    Order ID
                  </v-card-title>
                  <div>
                      <table >
                        <tr>
                          <th>Заказчик</th>
                          <th>Название</th>
                          <th>Номер</th>
                          <th>Адрес</th>
                          <th>Cтатус</th>
                        </tr>
                      <tr>
                        <td>
                          {{person.name}}
                        </td>
                        <td>
                          {{person.product}}
                        </td>
                        <td>
                          {{person.phone}}
                        </td>
                        <td>
                          {{person.adress}}
                        </td>
                        <td>
                          <v-tooltip right z-index="10">
                             <template v-slot:activator="{ on }">
                              <v-btn icon color="green" v-on="on" @click="snackbar = true" >
                                <v-icon class="white--text">done</v-icon>
                              </v-btn>
                            </template>
                            <span>Завершить</span>
                          </v-tooltip>

                            <v-btn icon color="red"
                            @click="deleteOrder('{{person.name}}', '{{person.product}}', '{{person.phone}}', '{{person.adress}}')">
                              <v-icon class="white--text">delete</v-icon>
                            </v-btn>
                        </td>
                      </tr>
                      </table>

                    </div>


                </v-card>
              </v-flex>
            </v-layout>
            <v-snackbar
                timeout="1500"
                v-model="snackbar" bottom right color="green darken-2">
                <v-icon class="white--text">notifications</v-icon>
                New Order
                <v-btn
                  color="white"
                  flat
                  icon
                  @click="snackbar = false"
                >
                  <v-icon>close</v-icon>
                </v-btn>
              </v-snackbar>
  </div>
</template>



<script>
import { namesRef } from '../firebase'

export default {
name : "desserts",
data (){
  return {
      headers: [
      {text: '№', sortable: false, align: 'center'},
      {text: 'Клиент', sortable: false, align: 'left'},
      {text: 'Покупка', sortable: false, align: 'center'},
      {text: 'Телефон', sortable: false, align: 'center'},
      {text: 'Адрес', sortable: false, align: 'center'}
    ],
    snackbar: false
  }
},

firebase :{
  names: namesRef
},

methods: {
  submitName(){
    namesRef.push({name: this.name, product: this.product, phone: this.phone, adress: this.adress});
  },
  deleteOrder(name, product, phone, adress){
    namesRef.delete({name: name, product: product, phone: phone, adress: adress});
  }
}
}
</script>

<style lang="css">
table {
  border-collapse: collapse;
  width: 100%;

}
td, th {
  border: 1px solid transparent;
  text-align: center;
  width: 100px;
}
th{
  text-align: center;
  padding: 7px;
}
td{
  font: 17px sans-serif;
  padding: 10px;
}
.card{
  margin: 1em;
}
</style>
