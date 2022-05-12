<template>
  <ion-page>
    <CommonHeader />
    <ion-content :fullscreen="true">
      <SubscriptionContainer />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import SubscriptionContainer from "@/views/subscription/SubscriptionDetails.vue";
import CommonHeader from "@/components/CommonHeader.vue";

export default defineComponent({
  name: "SubscriptionPage",
  components: {
    SubscriptionContainer,
    CommonHeader,
    IonContent,
    IonPage,
  },
});
</script>

<style scoped></style>
