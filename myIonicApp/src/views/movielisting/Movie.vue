<template>
  <ion-card class="card">
    <ion-card-content>
      <router-link
        :to="{
          name: 'MovieDetails',
          params: { movie: JSON.stringify(movie) },
        }"
      >
        <ion-img
          width="310"
          :src="'https://cdn.mos.cms.futurecdn.net/oRSUt9VtGT6ioCYigzi383-1024-80.jpg.webp'"
        />
        <h3>
          <b>{{ movie.Name }}</b>
        </h3>
      </router-link>

      <span class="rating">
        Rating: <b>{{ movie.Rating }}</b>
      </span>
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCardContent, IonCard, IonImg } from "@ionic/vue";
export default {
  name: "Movie",
  props: ["movie"],
  components: { IonCard, IonCardContent, IonImg },
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
