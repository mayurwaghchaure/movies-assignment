<template>
  <form class="search">
    <ion-select
      class="selectionList"
      placeholder="Select Genre"
      @ionChange="handleChange"
    >
      <ion-select-option value="">All Genre</ion-select-option>
      <ion-select-option v-for="g in genres" :key="g.code">{{
        g.name
      }}</ion-select-option>
    </ion-select>
  </form>
</template>

<script>
import { ref } from "vue";
import { IonSelect, IonSelectOption } from "@ionic/vue";

export default {
  name: "Search",
  props: {
    search: String,
    genres: Array,
  },
  components: {
    IonSelect,
    IonSelectOption,
  },
  setup(props, { emit }) {
    //const movieTitle = ref(props.search);
    const movieGenre = ref(props.search);
    return {
      movieGenre,
      handleChange(event) {
        movieGenre.value = event.target.value;
        emit("search", movieGenre.value);
      },
    };
  },
};
</script>

<style scoped>
.search {
  text-align: center;
}

.selectionList {
  background-color: white;
  max-width: 200px;
  border-radius: 5px;
  margin: auto;
}
</style>
