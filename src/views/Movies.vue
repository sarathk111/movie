<template>
<Header/>
<div class="container">
  <HelloWorld  :msg="welcomeText"/>
  <search-tab @getSerchInput="getSerchInput" />
  <movies-list v-if="searchInput" :movieList="movieResult" />
<div>
</div>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import MoviesList from '../components/MoviesList.vue'
import SearchTab from '../components/SearchTab.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Movies',
  components: {
    Header,
    MoviesList,
    SearchTab,
    HelloWorld
  },
  data:function(){
    return {
     searchInput: null,
     movieResult: null,
     welcomeText: ''
  }
   
  },
  mounted() {
    const userData = JSON.parse(localStorage.getItem('userSession'))
    this.welcomeText = 'Welcome ' +userData.name+' !'
  },
  watch:{
    searchInput: function(value) {
      if(value) {
        this.getMovieData()
      }
     
    }
  },
  methods: {
    getMovieData() {
      fetch(`${process.env.VUE_APP_URL}/?s=${this.searchInput}&apikey=${process.env.VUE_APP_OMDBKEY}`)
        .then(response => response.json())
        .then(data => {
          this.movieResult = data.Search
        });
    },
    getSerchInput(value) {
      this.searchInput = value
    }
  }
}
</script>
