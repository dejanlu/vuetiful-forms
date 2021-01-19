<template>
  <div class="row">
    <div class="col-12 text-right">
      <p v-if="$store.state.user.user">
        Welcome back, {{ $store.state.user.user.firstName }}!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

</style>
