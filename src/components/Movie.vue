<template>
<router-link :to="'/movies/' + movie.imdbID" class="list-group-item" aria-disabled="true">
    <div>
        <img width="100" height="150" :src="movie.Poster" :alt="movie.Title">
    </div>
    <span>{{movie.Title}}</span>
    <span>{{movie.Year}}</span>
</router-link>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    movie: Object
  }
}
</script>

<style scoped>

</style>
