<template>
  <div class="card">
    
    <div class="card-content">
    <slot name="title"></slot>
    <slot name="content"></slot>
    <slot name="extra"></slot>
    </div>

    <footer class="card-footer">
      <a class="card-footer-item" :href="link">Back to overview</a>
    </footer>

  </div>
</template>
<script>
export default {
  props: ['link']
}
</script>

<style scoped>
  .card{
    padding-bottom: 40px;
    height:100%;
  }

  Footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
</style>

