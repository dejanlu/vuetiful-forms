<template>
  <div id="app" class="container py-4">
    <Header />
    <div class="row">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  created () {
    this.$store.dispatch('getLoggedInUser')
  },
  components: { Header }
}
</script>

<style scoped>

</style>
