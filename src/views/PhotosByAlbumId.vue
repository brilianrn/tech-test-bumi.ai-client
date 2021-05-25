<template>
  <div class="container text-center">
    <h2>Photos Sorting by Album ID = "{{ this.$route.params.albumId }}"</h2>
    <Loading v-if="!sortingPhotos.length"/>
    <div class="row row-cols-1 row-cols-md-6 g-4">
      <div v-for="sortingPhoto in sortingPhotos" :key="sortingPhoto.id" class="col">
        <div class="h-100">
          <router-link :to="{ path: '/detail/' + sortingPhoto.id }">
            <img :src="sortingPhoto.thumbnailUrl" class="card-img-top" :alt="sortingPhoto.title"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SortingPhotosbyAlbumID',
  created: function () {
    this.$store.dispatch('setSortingPhotosAsync', +this.$route.params.albumId)
  },
  computed: {
    ...mapState(['sortingPhotos'])
  }
}
</script>

<style>

</style>
