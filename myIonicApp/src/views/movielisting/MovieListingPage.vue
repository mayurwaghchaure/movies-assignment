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
ion-toolbar {
  --border-style: none;
  --background: #373b5e;
  --color: white;
  --min-height: 8rem;
  --stripe: #373b5e;
  --bg: #3e4368;
  --background: transparent;
  text-align: center;
  background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, var(--bg) 25%, transparent 25%),
    linear-gradient(45deg, var(--bg) 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: var(--stripe);
}

ion-header {
  background-color: #373b5e;
}
</style>
