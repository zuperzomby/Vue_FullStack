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
          <select v-model="role" class="text" type="selected">
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
          <select v-model="difficulty" class="text" type="selected">
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
          <button v-on:click="create()" class="button is-primary">
          Create
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
    data () {
      return {
        name: '',
        role: '',
        difficulty: ''
      }
    },
  methods:{
    create () {
        appService.postCard({name: this.name, role: this.role, difficulty: this.difficulty})
          .then(() => {
            window.location.replace("/cards/");
          })
          .catch(() => window.alert('Could not create'))
      }
  }
}
</script>

