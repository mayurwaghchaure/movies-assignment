<template>
  <ion-page>
    <CommonHeader />
    <ion-content :fullscreen="true">
      <MovieListingContainer />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { triangle } from "ionicons/icons";
import { IonPage, IonContent } from "@ionic/vue";
import MovieListingContainer from "@/views/movielisting/MovieListingLayout.vue";
import CommonHeader from "@/components/CommonHeader.vue";

export default defineComponent({
  name: "Tab1Page",
  components: {
    MovieListingContainer,
    IonContent,
    IonPage,
    CommonHeader,
  },
  setup() {
    return {
      triangle,
    };
  },
});
</script>

<style scoped>
</style>
