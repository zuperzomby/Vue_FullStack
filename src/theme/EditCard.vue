<template>
<div class="content">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">name</label>
      </div>
      <div class="field-body">
        <div class="field">
        <div class="control">
          <input v-model="name" class="input" type="text" 
          placeholder="Insert name">
        </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">role</label>
      </div>
      <div class="field-body">
        <div class="field">
        <div class="control">
          <select v-model="role" class="select">
            <option disabled value="">Please select one</option>
            <option>Marksman</option>
            <option>Juggernaut</option>
            <option>Mage</option>
          </select>
        </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">difficulty</label>
      </div>
      <div class="field-body">
        <div class="field">
        <div class="control">
          <select v-model="difficulty" class="select">
            <option disabled value="">Please select one</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body">
        <div class="field">
        <div class="control">
          <button v-on:click="editCard()" class="button is-primary">
          Edit
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appService from '../app.service.js'
export default {

  data() {
    return{
      id: this.$route.params.cardId,
      name: '',
      role: '',
      difficulty: '',
      card: ''
    }
  },
  methods:{
    editCard(){
      appService.editCard(this.id, {name: this.name, role: this.role, difficulty: this.difficulty})
    },
    loadCard(){
      appService.getCardById(this.id).then(data => {
        this.card = data;
        console.log(this.card.name)
        this.name=this.card.name
        this.role=this.card.role
        this.difficulty=this.card.difficulty
      })
    }
  },
  watch:{
    '$route'(to,from){
      this.id = to.params.cardId
      this.editCard()
    }
  },
  created (){
    this.loadCard()
  }
  }
</script>
