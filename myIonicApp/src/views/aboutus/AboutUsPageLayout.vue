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

<style scoped></style>
