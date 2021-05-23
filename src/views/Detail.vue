<template>
  <div class="container">
    <div class="card bg-dark text-white mb-3">
      <img :src="photo.url" class="card-img" :alt="photo.title">
      <div class="card-img-overlay">
        <h1 class="card-title">{{ photo.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Detail',
  created: function () {
    this.$store.dispatch('setPhotoAsync', this.$route.params.id)
    console.log(this.$route.params.id)
  },
  computed: {
    ...mapState(['photo'])
  }
}
</script>

<style scoped>
img{
  height: 600px;
  width: 600px;
}
</style>
