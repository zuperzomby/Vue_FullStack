<template>
  
</template>

<script>
import appService from '../app.service.js'
export default {

  data() {
    return{
      id: this.$route.params.cardId,
    }
  },
  methods:{
    deleteCard(){
      appService.deleteCard(this.id)
      console.log(this.id)
    }
  },
  watch:{
    '$route'(to,from){
      this.id = to.params.cardId
      this.deleteCard()
    }
  },
  created (){
    this.deleteCard();
  }
  }
</script>
