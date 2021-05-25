<template>
  <div class="container">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-6">
          <img :src="photo.url" :alt="photo.title">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h2 class="card-title title">{{ toUpperCaseWord(photo.title) }}</h2>
            <i class="card-text title"><small class="text-muted">This photo has number of album is {{ photo.albumId }}</small></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Detail',
  methods: {
    toUpperCaseWord (mySentence) {
      const words = mySentence.split(' ')
      let result = ''

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
      }

      words.join(' ')

      words.map(word => {
        result += word + ' '
      })

      return result
    }
  },
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
    transition: .2s;
  }

  img:hover{
    transform: scale(0.95);
  }

  .title{
    display: flex;
    margin-left: 50px;
  }
</style>
