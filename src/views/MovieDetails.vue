<template>
<Header/>
  <div class="container">
    <div class="row">
      <div class="col">
        <div v-if="movieResult">
          <h1>{{movieResult.Title}}</h1>
          <h5> <span>Director : {{movieResult.Director}} </span></h5>

          <h6>{{movieResult.Year}}</h6>
           <img width="150" height="200" :src="movieResult.Poster" :alt="movieResult.Title">
          <div class="details">
            <span>Genre: {{movieResult.Genre}}</span>
            <span>Actors: {{movieResult.Actors}}</span>
            <span>Rattings: <star-rating  :stars="getStarRating"/> {{movieResult.Ratings[0].Value}}</span>
            <span>Language: {{movieResult.Language}}</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import starRating from '../components/Rating.vue'
export default {
  name: 'movie-details',
  components: {
    Header,
    starRating
  },
  props: {
    movie: Object
  },
  data(){
    return {
      movieResult: null
    }
  },
  mounted(){
    this.getMovie()
  },
computed: {
  getStarRating(){
    return Math.round(this.movieResult.Ratings[0].Value.split('/')[0])
  }
},
  methods: {

    getMovie() {
      fetch(`${process.env.VUE_APP_URL}/?i=${this.$route.params.imdbID}&apikey=${process.env.VUE_APP_OMDBKEY}`)
        .then(response => response.json())
        .then(data => {
          this.movieResult = data
        });
    }
  }
}
</script>
<style scoped>
.details span{
  display: block;
}
</style>