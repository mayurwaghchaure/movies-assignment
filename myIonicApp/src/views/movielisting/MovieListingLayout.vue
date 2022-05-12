<template>
  <div class="app">
    <header>
      <h2 class="app-header">Featured Today</h2>
    </header>
    <Search
      :search="state.search"
      :genres="state.genres"
      @search="handleSearch"
    />
    <p class="app-intro">Sharing a few of our favourite movies</p>
    <div class="movies">
      <Movie v-for="movie in filteredMovies" :movie="movie" :key="movie.Id" />
    </div>
  </div>
</template>

<script>
import { reactive, watchEffect } from "vue";
import Search from "@/components/Search.vue";
import Movie from "@/views/movielisting/Movie.vue";

export default {
  name: "app",
  components: {
    Search,
    Movie,
  },
  data: function () {
    return {
      movieSearch: "",
    };
  },
  computed: {
    filteredMovies() {
      return this.state.movies.filter((movie) => {
        const movieGenres = movie.Genres.toLowerCase();
        const searchTerm = this.state.search.toLowerCase();

        return movieGenres.includes(searchTerm);
      });
    },
  },
  setup() {
    const state = reactive({
      search: "",
      loading: true,
      movies: [],
      genres: [],
      errorMessage: null,
    });

    watchEffect(() => {
      const MOVIE_API_URL = `https://eventcinemasapi.s3.ap-southeast-2.amazonaws.com/GetNowShowing.json`;

      fetch(MOVIE_API_URL)
        .then((response) => response.json())
        .then((jsonResponse) => {
          state.movies = jsonResponse.Data.Movies;
          state.genres = jsonResponse.Data.Genres;
          state.loading = false;
        });
    });

    return {
      state,
      handleSearch(searchTerm) {
        state.loading = true;
        state.search = searchTerm;
      },
    };
  },
};
</script>

<style scoped>
.app {
  --border-style: none;
  --background: #373b5e;
  --color: white;
  --min-height: 8rem;
  --stripe: #373b5e;
  --bg: #3e4368;
  --background: transparent;
  background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, var(--bg) 25%, transparent 25%),
    linear-gradient(45deg, var(--bg) 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: var(--stripe);
  min-height: 100%;
}

.app-intro {
  color: white;
  text-align: center;
}

.app-header {
  text-align: center;
  color: white;
}
</style>
