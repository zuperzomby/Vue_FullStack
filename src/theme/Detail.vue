<template>
   <div class="columns">
    <div class="column is-one-third"
     v-for="(card) in cards"
     v-bind:key="card._id">
      <card :link = "/cards/">
        <h1 slot="title" v-html = "card.name"></h1>
        <h4 slot="content" v-html = "card.role"></h4>
        <span slot="extra" v-html = "card.difficulty"></span>
     </card>
    </div>
  </div>
</template>

<script>
import DetailCard from './DetailCard.vue'
import appService from '../app.service.js'
export default {

  components:{
    'card' :DetailCard
  },

  data() {
    return{
      id: this.$route.params.cardId,
      cards: []
    }
  },
  methods:{
    loadCards(){
      appService.getCard(this.id).then(data => {
        this.cards = data.items
      })
    }
  },
  watch:{
    '$route'(to,from){
      this.id = to.params.id
      this.loadCards()
    }
  },
  created (){
    this.loadCards();
    console.log(this.id)
  }
  }
</script>

