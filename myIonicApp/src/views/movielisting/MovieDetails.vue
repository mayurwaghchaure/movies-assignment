<template>
  <ion-page>
    <CommonHeader />
    <ion-content :fullscreen="true">
      <div class="app">
        <div class="app-intro">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
            <div class="imageContainer">
              <img
                width="310"
                height="250"
                src="https://cdn.mos.cms.futurecdn.net/oRSUt9VtGT6ioCYigzi383-1024-80.jpg.webp"
              />
            </div>
          </ion-buttons>

          <div class="mvContainer">
            <p style="margin-top: 10px"></p>
            <h2>{{ movie.Name }}</h2>
            <p>
              {{ movie.Synopsis }}
            </p>
            <p>
              <b>Director : {{ movie.Director }}</b>
            </p>
            <p>
              <b>Release date : {{ formatStringToDate(movie.ReleasedAt) }}</b>
            </p>
            <p>
              <b>Has3d : {{ movie.Has3D }}</b>
            </p>
            <p>
              <b>Rating : {{ movie.Rating }}</b>
            </p>
            <p>
              <b>Genres : {{ movie.Genres }}</b>
            </p>
            <p>
              <b>Cast : {{ movie.MainCast }}</b>
            </p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonBackButton, IonButtons } from "@ionic/vue";
import CommonHeader from "@/components/CommonHeader.vue";
import { format } from "date-fns";

export default {
  props: {},
  data: function () {
    return {
      movie: JSON.parse(this.$route.params.movie),
    };
  },
  methods: {
    formatStringToDate(dateStr) {
      const d = new Date(dateStr);
      return format(d, "dd MMMM yyyy");
    },
  },
  components: { IonPage, IonContent, IonBackButton, CommonHeader, IonButtons },
};
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

.mvContainer {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.imageContainer {
  margin-right: 45px;
}

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
}

.app-intro {
  color: white;
  text-align: center;
  padding-top: 10px;
  margin-top: 18px;
}
</style>
