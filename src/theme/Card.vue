<template>
  <div class="card">
    
    <div class="card-content">
    <slot name="title"></slot>
    <slot name="content"></slot>
    </div>

    <footer class="card-footer">
      <router-link class="card-footer-item" :to="{name: 'detail', params: {cardId: linkName}}"
      >Read More</router-link>

      <router-link class="card-footer-item" :to="{name: 'delete', params: {cardId: linkId}}"
      >Delete</router-link>

      <router-link class="card-footer-item" :to="{name: 'edit', params: {cardId: linkId}}"
      >Edit</router-link>
    </footer>

  </div>
</template>
<script>
export default {
  props: ['linkName','linkId']
}
</script>

<style scoped>
  .card{
    padding-bottom: 40px;
    height:100%;
  }
</style>

