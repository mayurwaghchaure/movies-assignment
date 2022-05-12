<template>
  <ion-page>
    <CommonHeader />
    <ion-content :fullscreen="true">
      <AboutUsContainer />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonContent, IonPage } from "@ionic/vue";
import CommonHeader from "@/components/CommonHeader.vue";
import AboutUsContainer from "@/views/aboutus/AboutUsDetails.vue";

export default defineComponent({
  name: "Tab3Page",
  components: {
    CommonHeader,
    IonContent,
    IonPage,
    AboutUsContainer,
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
</style>
