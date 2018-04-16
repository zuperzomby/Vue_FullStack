<template>
  <div class="columns">
    <div class="column is-one-third"
     v-for="(card) in cards"
     v-bind:key="card._id">
      <card :linkName = "card.name" :linkId = "card._id">
        <h3 slot="title" v-html = "card.name"></h3>
        <span slot="content" v-html = "card.role"></span>
     </card>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import appService from '../app.service.js'
export default {

  components:{
    'card' :Card
  },

  data() {
    return{
      cards: []
    }
  },
  methods:{
    loadCards(){
      appService.getCards().then(data => {
        this.cards = data.items
      })
    }
  },
  created (){
    this.loadCards();
  }
}
</script>

