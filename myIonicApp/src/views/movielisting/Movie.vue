<template>
    <ion-card class="card">
      <ion-card-content class="movie">
        
          <router-link
            :to="{
              name: 'MovieDetails',
              params: { movie: JSON.stringify(movie) },
            }"
          >
            <img
              width="310"
              src="https://cdn.mos.cms.futurecdn.net/oRSUt9VtGT6ioCYigzi383-1024-80.jpg.webp"
            />
            <b>{{ movie.Name }}</b>
          </router-link>

          <span class="rating">
            Rating: <b>{{ movie.Rating }}</b>
          </span>
        
      </ion-card-content>
    </ion-card>
</template>

<script>
import { IonCardContent, IonCard } from "@ionic/vue";
export default {
  name: "Movie",
  props: ["movie"],
  components: { IonCard,IonCardContent },
};
</script>

<style scoped>
.rating {
  float: right;
}

.card {
  background-color: thistle;
  color: black;
}
</style>
