<template>
    <div class="moviez">
        <div class="list-group">
            <div class="row">
            <div class="col-md-4 movie-box mb-4" v-for="movie in movieList" :key="movie.id">
                 <Movie :movie="movie" />
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import Movie from '../components/Movie.vue'
export default {
  name: 'movies-list',
  components:{
      Movie
  },
  props: {
    movieList: Array
  }
}
</script>
<style scoped>
.movie-box {
margin-bottom: 15px;
}
</style>