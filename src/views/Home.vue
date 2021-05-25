<template>
  <div class="container text-center">
    <h2>Photos Collections</h2>
    <Loading v-if="!photos.length"/>
    <div class="row row-cols-1 row-cols-md-6 g-4">
      <div v-for="photo in photos" :key="photo.id" class="col">
        <div class="h-100">
          <router-link :to="{ path: '/detail/' + photo.id }">
            <img :src="photo.thumbnailUrl" class="card-img-top" :alt="photo.title"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '../components/Loading.vue'

export default {
  name: 'Home',
  methods: {
  },
  components: {
    Loading
  },
  created: function () {
    this.$store.dispatch('setPhotosAsync')
  },
  computed: {
    ...mapState(['photos'])
  }
}
</script>

<style scoped>
  img{
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    transition: transform .2s;
  }

  img:hover{
    transform: scale(1.2);
  }
</style>
