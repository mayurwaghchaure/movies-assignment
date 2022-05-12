<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>
        <img width="125" height="55" src="@/assets/logo.jpg" />
      </ion-title>
      <ion-title>Authoritative Source For Movie</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { defineComponent } from "vue";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/vue";

export default defineComponent({
  name: "CommonHeader",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
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
