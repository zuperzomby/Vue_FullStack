<template>
  <div>
    <app-header></app-header>  
      <section class="main-section section">
        <div class="container content">
          <router-view></router-view>
        </div>
      </section>
    <app-footer></app-footer>
  </div>
</template>

<style lang="scss">
@import "~bulma";

.columns{
  flex-wrap: wrap;
}

</style>

<script>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  export default {
    components:{
      'app-header': Header,
      'app-footer': Footer,
    },
  }
</script>






